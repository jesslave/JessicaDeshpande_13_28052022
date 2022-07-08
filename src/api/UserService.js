import axios from "axios"

export function UserService() {
    return {
        login(email, password) {
            return axios.post('http://localhost:3001/api/v1/user/login', { email, password })
        },
        getUserProfile(token) {
            const authorization = "Bearer " + token
            return axios.post('http://localhost:3001/api/v1/user/profile', {}, {
                headers: {
                    "Authorization": authorization
                }
            })
        },
        editProfile(token, payload) {
            const authorization = "Bearer " + token
            return axios.put('http://localhost:3001/api/v1/user/profile', payload, {
                headers: {
                    "Authorization": authorization
                }
            })
        }
    }
}