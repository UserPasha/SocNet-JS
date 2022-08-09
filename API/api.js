import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
    "API-KEY":"2ca26160-56ab-4819-81b3-f2d1c7c81a00"
}}
)


export const usersAPI = {
    getListOfUsers  (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=> response.data)
    },
    getCurrentPage  (pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response=> response.data)
    },
    unfollowUser  (id) {
        return instance.delete(`follow/${id}`).then(response=> response.data)
    },
    followUser (id) {
        return instance.post(`follow/${id}`).then(response=> response.data)
    },

    userProfile(userId){
        console.warn("deprecated method, please use ProfileAPI")
        return profileAPI.userProfile(userId)
    }

}


export const profileAPI = {
    userProfile(userId){
        return instance.get("profile/"+userId).then(response => response.data)
    },
    getStatus(userId){
        return instance.get("profile/status/"+userId)
    },
    updateStatus(status){
        return instance.put("profile/status", {status: status})
    }

}

export const authAPI = {
    me(){
        return instance.get("auth/me").then(response => response.data)
    }
}