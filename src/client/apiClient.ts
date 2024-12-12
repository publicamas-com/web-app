import axios from 'axios';
import { ICategory } from '@/types/api/category.type';
import { GetUserResponse } from '@/types/api/getUser.response';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
        if (isBrowser) {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;


export const callLogin = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post('/users/sign-in', {email, password});
        return response.data;
    } catch (error) {
        console.error('Error en callLogin:', error);
        throw error;
    }
}

export const callGetMe = async (token: string) : Promise<GetUserResponse> => {
    try {
        const response = await axiosInstance.get<GetUserResponse>('/users/me', {headers: {Authorization: `Bearer ${token}`}});
        return response.data;
    } catch (error) {
        console.error('Error en callGetMe:', error);
        throw error;
    }
}

export const callGetCategoryBySlug = async (slug: string) : Promise<ICategory>=> {
    const result = await axiosInstance.get(`/categories/slug/${slug}`);
    return result.data;
}

export const callGetChildCategoriesByParentId = async (parentId: string) : Promise<ICategory[]> => {
    const result = await axiosInstance.get(`/categories?child=true&parentId=${parentId}`);
    return result.data;
}
export const callGetParentCategories = async () : Promise<ICategory[]> => {
    const result = await axiosInstance.get(`/categories?child=false`);
    return result.data;
}