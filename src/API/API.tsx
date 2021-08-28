import axios from 'axios';


const instanceUser = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '34b03fd8-87c3-4bad-b887-a316051adfc3'}
})


export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instanceUser.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    authMe: () => {
        return instanceUser.get('auth/me/').then(response => response.data);
    },
    getPhoto: (photo: string | null | undefined) => {
        return instanceUser.get(`profile/${photo}`).then(response => response.data);
    },
    followUser: (id: number) => {
        return instanceUser.post(`follow/${id}`).then(response => response.data);
    },
    unFollowUser: (id: number) => {
        return instanceUser.delete(`follow/${id}`).then(response => response.data);
    },
}


