import { getToken } from './adminAuth';

const BACKEND = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000').replace(/\/$/, '');

type ApiResult<T = unknown> =
  | { ok: true; data: T; meta?: Record<string, number> }
  | { ok: false; message: string; errors?: { field: string; message: string }[] };

async function request<T>(
  path: string,
  options: RequestInit = {},
  isFormData = false,
): Promise<ApiResult<T>> {
  const token = getToken();
  const headers: Record<string, string> = {};
  // Send JWT as Bearer token (and legacy x-api-key for backward compat)
  if (token) {
    headers['authorization'] = `Bearer ${token}`;
    headers['x-api-key'] = token;
  }
  if (!isFormData) headers['Content-Type'] = 'application/json';

  try {
    const res = await fetch(`${BACKEND}${path}`, {
      ...options,
      headers: { ...headers, ...(options.headers as Record<string, string> || {}) },
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      return {
        ok: false,
        message: json.message || `Error ${res.status}`,
        errors: json.errors,
      };
    }
    return { ok: true, data: json.data ?? json, meta: json.meta };
  } catch {
    return { ok: false, message: 'Cannot connect to backend. Is the server running?' };
  }
}

export const adminApi = {
  // Auth
  login: (username: string, password: string) =>
    request('/api/auth/login', { method: 'POST', body: JSON.stringify({ username, password }) }),
  signup: (data: { username: string; email: string; password: string; fullName?: string }) =>
    request('/api/auth/signup', { method: 'POST', body: JSON.stringify(data) }),
  verify: (token: string) =>
    request('/api/auth/verify', {
      method: 'POST',
      headers: { authorization: `Bearer ${token}`, 'x-api-key': token },
    }),

  // Dashboard stats
  stats: () => Promise.all([
    request<{ data: unknown[]; meta: { total: number } }>('/api/gallery?limit=1'),
    request<{ data: unknown[]; meta: { total: number } }>('/api/gallery?limit=1&active=true'),
    request<{ data: unknown[]; meta: { total: number } }>('/api/announcements?limit=1'),
    request<{ data: unknown[]; meta: { total: number } }>('/api/admissions?limit=1'),
    request<{ data: unknown[]; meta: { total: number } }>('/api/admissions?limit=1&status=new'),
    request<{ data: unknown[]; meta: { total: number } }>('/api/contact?limit=1'),
    request<{ data: unknown[]; meta: { total: number } }>('/api/contact?limit=1&status=new'),
  ]),

  // Gallery
  gallery: {
    list:   (params = '') => request(`/api/gallery?${params}`),
    get:    (id: number)  => request(`/api/gallery/${id}`),
    create: (form: FormData) =>
      request('/api/gallery', { method: 'POST', body: form }, true),
    update: (id: number, body: object) =>
      request(`/api/gallery/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
    toggle: (id: number) =>
      request(`/api/gallery/${id}/toggle`, { method: 'PATCH' }),
    reorder: (items: { id: number; sortOrder: number }[]) =>
      request('/api/gallery/reorder', { method: 'PATCH', body: JSON.stringify({ items }) }),
    delete: (id: number) =>
      request(`/api/gallery/${id}`, { method: 'DELETE' }),
  },

  // Announcements
  announcements: {
    list:   (params = '') => request(`/api/announcements?${params}`),
    get:    (id: number)  => request(`/api/announcements/${id}`),
    create: (body: object) =>
      request('/api/announcements', { method: 'POST', body: JSON.stringify(body) }),
    update: (id: number, body: object) =>
      request(`/api/announcements/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
    toggle: (id: number) =>
      request(`/api/announcements/${id}/toggle`, { method: 'PATCH' }),
    delete: (id: number) =>
      request(`/api/announcements/${id}`, { method: 'DELETE' }),
  },

  // Admissions
  admissions: {
    list:         (params = '') => request(`/api/admissions?${params}`),
    get:          (id: number)  => request(`/api/admissions/${id}`),
    updateStatus: (id: number, status: string) =>
      request(`/api/admissions/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }),
    delete: (id: number) =>
      request(`/api/admissions/${id}`, { method: 'DELETE' }),
  },

  // Contacts
  contacts: {
    list:         (params = '') => request(`/api/contact?${params}`),
    get:          (id: number)  => request(`/api/contact/${id}`),
    updateStatus: (id: number, status: string) =>
      request(`/api/contact/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }),
    delete: (id: number) =>
      request(`/api/contact/${id}`, { method: 'DELETE' }),
  },
};

export { BACKEND };
