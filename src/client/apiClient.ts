import axios from 'axios';

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

export const callGetMe = async (token: string) => {
    try {
        const response = await axiosInstance.get('/users/me', {headers: {Authorization: `Bearer ${token}`}});
        return response.data;
    } catch (error) {
        console.error('Error en callGetMe:', error);
        throw error;
    }
}