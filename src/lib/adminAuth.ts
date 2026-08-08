// Admin auth helpers — JWT-based session management
// v2: tolerant of old session format, proper key names

const TOKEN_KEY  = 'birla_admin_jwt';
const USER_KEY   = 'birla_admin_user';
const EXPIRY_KEY = 'birla_admin_expiry';

// Legacy keys from previous implementation
const LEGACY_TOKEN_KEYS = ['birla_admin_token', 'birla_admin_key', 'admin_token', 'adminToken'];

export interface AdminUser {
  id: number;
  username: string;
  email: string;
  fullName?: string;
  role: string;
  lastLogin?: string;
}

export function saveSession(token: string, user: AdminUser, expiresIn = '8h'): void {
  if (typeof window === 'undefined') return;
  const hours  = parseInt(expiresIn) || 8;
  const expiry = Date.now() + hours * 60 * 60 * 1000;
  localStorage.setItem(TOKEN_KEY,  token);
  localStorage.setItem(USER_KEY,   JSON.stringify(user));
  localStorage.setItem(EXPIRY_KEY, String(expiry));
  // Clean up any legacy keys
  LEGACY_TOKEN_KEYS.forEach(k => localStorage.removeItem(k));
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  const token  = localStorage.getItem(TOKEN_KEY);
  const expiry = localStorage.getItem(EXPIRY_KEY);
  if (!token) {
    console.debug('[adminAuth] getToken: no token in localStorage');
    return null;
  }
  if (!expiry) {
    console.debug('[adminAuth] getToken: token found but no expiry → clearing stale session');
    clearSession();
    return null;
  }
  if (Date.now() > Number(expiry)) {
    console.debug('[adminAuth] getToken: token expired → clearing');
    clearSession();
    return null;
  }
  console.debug('[adminAuth] getToken: valid token returned');
  return token;
}

export function getUser(): AdminUser | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function clearSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(EXPIRY_KEY);
  // Also clean up legacy keys
  LEGACY_TOKEN_KEYS.forEach(k => localStorage.removeItem(k));
}

export function isAuthenticated(): boolean {
  return Boolean(getToken());
}

// Aliases
export { clearSession as clearToken };
export { saveSession as saveToken };
