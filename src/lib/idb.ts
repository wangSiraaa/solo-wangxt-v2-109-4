import type { NamedProject, ProjectDoc } from '../types';
import { normalizeProjectDoc } from './routing';

/**
 * 所有数据仅保存在浏览器本地 IndexedDB，音频文件绝不上传。
 * 三个对象仓：
 *  - session：单条最近会话（key = 'current'）
 *  - projects：具名工程
 *  - blobs：音频文件 Blob（内置样例不存音频，重载后按类型重新生成）
 *
 * DB v2 对应多总线 ProjectDoc v2。旧 v1 记录读出时做纯函数迁移，
 * 不在这里就地破坏旧数据；下一次成功保存才原子替换为 v2。
 */
const DB_NAME = 'spatial-audio-workbench';
const DB_VERSION = 2;
const STORE_SESSION = 'session';
const STORE_PROJECTS = 'projects';
const STORE_BLOBS = 'blobs';

function openDb(version?: number): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, version);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_SESSION)) db.createObjectStore(STORE_SESSION);
      if (!db.objectStoreNames.contains(STORE_PROJECTS)) {
        const s = db.createObjectStore(STORE_PROJECTS, { keyPath: 'id' });
        s.createIndex('savedAt', 'savedAt');
      }
      if (!db.objectStoreNames.contains(STORE_BLOBS)) db.createObjectStore(STORE_BLOBS);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    req.onblocked = () => reject(req.error ?? new Error('IndexedDB 升级被其他标签页阻塞'));
  });
}

function tx<T>(
  storeName: string,
  mode: IDBTransactionMode,
  fn: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  return openDb(DB_VERSION).then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(storeName, mode);
        const req = fn(t.objectStore(storeName));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
        t.onerror = () => reject(t.error);
        t.onabort = () => reject(t.error);
        t.oncomplete = () => db.close();
      }),
  );
}

export async function saveSession(doc: ProjectDoc): Promise<void> {
  await tx(STORE_SESSION, 'readwrite', (s) => s.put(doc, 'current'));
}

export async function loadSession(): Promise<ProjectDoc | undefined> {
  const raw = await tx<ProjectDoc | undefined>(STORE_SESSION, 'readonly', (s) => s.get('current'));
  return raw ? normalizeProjectDoc(raw) : undefined;
}

export async function putBlob(key: string, blob: Blob): Promise<void> {
  await tx(STORE_BLOBS, 'readwrite', (s) => s.put(blob, key));
}

export async function getBlob(key: string): Promise<Blob | undefined> {
  return tx(STORE_BLOBS, 'readonly', (s) => s.get(key));
}

export async function deleteBlob(key: string): Promise<void> {
  await tx(STORE_BLOBS, 'readwrite', (s) => s.delete(key));
}

export async function listProjects(): Promise<NamedProject[]> {
  const all = await tx<NamedProject[]>(STORE_PROJECTS, 'readonly', (s) => s.getAll());
  return all
    .map((p) => ({ ...p, doc: normalizeProjectDoc(p.doc) }))
    .sort((a, b) => b.savedAt - a.savedAt);
}

export async function saveProject(p: NamedProject): Promise<void> {
  const normalized: NamedProject = { ...p, doc: normalizeProjectDoc(p.doc) };
  await tx(STORE_PROJECTS, 'readwrite', (s) => s.put(normalized));
}

export async function deleteProject(id: string): Promise<void> {
  await tx(STORE_PROJECTS, 'readwrite', (s) => s.delete(id));
}

export async function getProject(id: string): Promise<NamedProject | undefined> {
  const p = await tx<NamedProject | undefined>(STORE_PROJECTS, 'readonly', (s) => s.get(id));
  return p ? { ...p, doc: normalizeProjectDoc(p.doc) } : undefined;
}
