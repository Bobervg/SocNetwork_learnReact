
import * as  Axios  from 'axios';

const instance = Axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'f2fbe505-fd97-4af2-841a-d777aed30b39'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const API = {
    getUsers (currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
        return response.data})
    },
    getFollow (id) {
        return instance.post(`/follow/${id}`)
        .then(response => {
        return response.data})
    },
    getUnFollow (id) {
        return instance.delete(`/follow/${id}`)
        .then(response => {
        return response.data})
    },
    getProfile (id) {
        return instance.get(`/profile/${id}`)
        
        
    },
    authMe () {
        return instance.get(`auth/me`)
    }
}
