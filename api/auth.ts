// src/api/auth.ts

import { USER_SERVICE_PATH } from '../config';
import { User } from '../types';
import { apiFetch } from './helper';

// --- Auth API ---
export const login = async (email: string, password: string): Promise<{ accessToken: string; user: User }> => {
    // 关键修复：在发起登录请求前，必须先执行 localStorage.removeItem('accessToken')
    // 原因：后端网关会校验 Header 中的旧 Token，如果旧 Token 过期，即使是登录接口也会被拦截返回 401
    localStorage.removeItem('accessToken');

    return apiFetch<{ accessToken: string; user: User }>(`${USER_SERVICE_PATH}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });
};

export const getMe = (): Promise<User> => apiFetch<User>(`${USER_SERVICE_PATH}/me`);