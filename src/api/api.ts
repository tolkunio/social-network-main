import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '7710dd5f-ea56-47ff-b059-6e7cb78ca047'}
})
export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    authMe() {
        return instance.get('auth/me');
    },
    follow(userId: string) {
       return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId: string) {
        return instance.delete(`unfollow/${userId}`)
    }
}
export const ProfileApi = {
    getProfileUserById(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`profile/status`,{status})
    }
}