# 空间声像工作台 · Spatial Audio Workbench

纯浏览器运行的多声轨 HRTF 空间声像试听台：**React + TypeScript + Three.js + Web Audio API**。
音频文件只保存在本机 IndexedDB，**从不上传**，也不需要任何后端。

## 启动

```bash
npm install
npm run dev      # 开发
npm run build    # 类型检查 + 生产构建
npm test         # 空间数学/样例/多总线路由/音频图行为测试（33 项）
```

## 坐标系与左右含义（三个视图严格一致）

世界采用右手坐标系，单位为米：

- **+X = 听者右方**（屏幕右）；**−X = 左**
- **+Y = 上**
- **听者 yaw=0 时朝向 −Z（屏幕深处=正前）；+Z = 听者身后**
- **yaw 正值 = 听者向右转身**（+90° 时前方变为世界 +X）；pitch 正值 = 抬头
- 声源方位角：**正值=右偏（右耳更响），负值=左偏**，0=正前，±180°=正后
- 同一套数值同时写入 `PannerNode` / `AudioListener`（Web Audio）与 Three.js 场景 / 2D 俯视图

## 音频链

```
BufferSource →(立体声文件经 ChannelSplitter 选原始 L/R 声道)
  → trackGain(track M/S) → PannerNode(HRTF, inverse/linear/exponential 明确距离模型)
  → busGain(总线 M/S/G 与嵌套父总线) → BusPeakMeter
  → parentBusGain / masterGain(主输出 M/G)
  → MasterPeakMeter(AudioWorklet 逐采样峰值+削波) → destination
```

- 工程文档为 `version: 2`，包含 `buses[]`、每轨 `busId` 和单调递增的 `routeVersion`
- 每条轨必须且只能属于一个有效总线；总线可嵌套到主输出，但路由图禁止成环
- 新增/移动/删除总线、迁移成员都先在深拷贝事务中完整校验；失败则旧图、成员归属和 `routeVersion` 全部保持不变
- 有成员或子总线的总线不能删除；最后一个总线不能删除
- 增益/静音/独奏优先级（高到低）：主输出 M → 祖先/本总线 M → 总线 S 子树隔离 → 声轨 S 隔离 → 声轨 M → 声轨增益 → 总线增益 → 主增益
- **播放中迁移总线只重接 PannerNode 输出到另一个 busGain**：不 stop/start、不重建 BufferSource、不触碰 PannerNode 位置，因此不会双重发声或方位跳变
- 移动声源只更新 PannerNode 的 position AudioParam（setTargetAtTime 平滑），音轨不重启
- 每个总线表串联在该总线 GainNode 之后；主表串联在 masterGain 与 destination 之间。仪表读取真实链路，不是 UI 计算值
- 峰值表由 AudioWorklet 逐采样检测（Worklet 不可用时回退 Analyser 时域块），≥1.0 锁存 CLIP；锁存状态不是工程数据，重载后归零并停止播放
- `AudioContext` 必须在用户手势中解锁；解锁失败有独立错误态且不修改路由。文件解码失败按轨标记“解码失败”，不影响其他轨
- 立体声文件通过 ChannelSplitter 显式选择**文件原始左/右声道**作为 HRTF 单声道输入；换总线不改变该选择

## 内置检查样例（全部本地合成）

- **脉冲**：三声 1200Hz 短脉冲，逐次辨别 HRTF 左右方位
- **单音**：持续 440Hz，检查稳定声像与距离衰减
- **双声源 A+B**：两条逐采样完全相同的声轨（同一种子合成），放于 ±X 验证左右内容同步、无相位漂移

“全部播放”在同一 AudioContext 时钟上调度，可直接对比同步。

## 操作

- 3D：拖彩色球移动声源、拖白色听者移动位置；右侧面板精确编辑坐标
- 2D：俯视图拖点移动、拖听者前向圆环手柄旋转朝向
- 每轨有播放/暂停/停止/进度跳转/循环/M/S/增益/总线选择与距离增益读数
- 每个总线卡片可改名、选择父级、调节增益、M/S、添加子总线/成员、查看独立真实链路峰值表

## 持久化

- 布局、多总线图、成员归属与总线/主输出参数防抖自动写入 IndexedDB `session`；文件 Blob 存独立 `blobs` 仓
- IndexedDB v2 保存 ProjectDoc v2；读取旧 v1 会话/工程时在内存中原子迁移为两条默认总线，首次成功保存后再替换旧记录
- 可“另存工程”为多条具名工程
- **重载/载入工程只恢复参数，播放一律停止，绝不自动播放**；文件轨在下次解锁后重新本地解码
