
import * as  Axios  from 'axios';

const instance = Axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '2c22ff32-ed18-4be9-9b23-cba7cd28458c'
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
    getProfileStatus (id) {
        return instance.get(`/profile/status/${id}`)
    },
    updateProfileStatus (status) {
        return instance.put(`/profile/status/`, {status:status})
    },
    authMe () {
        return instance.get(`/auth/me`)
    },
    login (email, password, rememberMe) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`/auth/login`)
    }
    
}
