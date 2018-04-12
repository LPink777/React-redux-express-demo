import { post } from './index';

export function register(data) {
    return post('http://localhost:3000/register',data) 
}