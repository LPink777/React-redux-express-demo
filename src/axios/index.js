import axios from 'axios';
import 'es6-promise';
import qs from 'query-string';

export function get(url,params){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params
        }).then( res => {
            resolve(res.data)
        }).catch( err => {
            reject(err)
        })
    })
}

export function post(url,data) {
    return new Promise((resolve,reject)=>{
        axios.post(url,qs.stringify(data),{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then( res => {
            resolve(res.data)
        } ).catch( err => {
            reject(err)
        } )
    })
}