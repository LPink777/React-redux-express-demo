import { get, post } from './index';
import { SERVER_IP } from '../constants/setting'

const registerApi = `${SERVER_IP}/register`;
const loginApi = `${SERVER_IP}/login`;

export function register(data) {
    return post(registerApi,data) 
}

export function login(data) {
    return get(loginApi,data) 
}