import axios from "axios";

const instance = axios.create({
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true,
        headers: {
            "API-KEY": "4f8341e7-d33a-4d8b-8d10-b8d41fc32b1d"
        }
    }
)


export const usersAPI = {
    getListOfUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getCurrentPage(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },

    userProfile(userId) {
        console.warn("deprecated method, please use ProfileAPI")
        return profileAPI.userProfile(userId)
    }

}


export const profileAPI = {
    userProfile(userId) {
        return instance.get("profile/" + userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus(status) {
        return instance.put("profile/status", {status: status})
    },
    saveImage(image){
        let Data = new FormData()
        Data.append('image', image)
        return instance.put('profile/photo', Data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfileInfo(data){
        return instance.put('profile', data)
    }

}

export const authAPI = {
    me() {
        return instance.get("auth/me").then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})

    },
    logout() {
        return instance.delete(`auth/login`)
    }
}