import { get, post } from './index';
const SERVER_IP = 'http://localhost:3000';
const registerApi = `${SERVER_IP}/register`;
const loginApi = `${SERVER_IP}/login`;

export function register(data) {
    return post(registerApi,data) 
}

export function login(data) {
    return get(loginApi,data) 
}