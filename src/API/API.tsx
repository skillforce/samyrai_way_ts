import axios from 'axios';
import {UsersDataType} from '../Redux/UsersPage-reducer';
import { ProfileResponseType, ProfileType} from '../components/Profile/ProfileContainer';

const instanceUser = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '34b03fd8-87c3-4bad-b887-a316051adfc3'}
})

type GetUsersAPIType = {
    items: UsersDataType[],
    totalCount: number,
    error: null
}


export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instanceUser.get<GetUsersAPIType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    getPhoto: (photo: number | null | undefined) => {
        return instanceUser.get<ProfileResponseType>(`profile/${photo}`).then(response => response.data);
    },
    followUser: (id: number) => {
        return instanceUser.post<boolean>(`follow/${id}`).then(response => response.data);
    },
    unFollowUser: (id: number) => {
        return instanceUser.delete<AuthMeAPIType>(`follow/${id}`).then(response => response.data);
    },
}

type AuthMeAPIType<T = {}> = {
    data: T
    messages: [] | [string]
    fieldsErrors: [] | [string]
    resultCode: number
}


export const AuthAPI = {
    authMe: () => {
        return instanceUser.get<AuthMeAPIType<{ id: number, email: string, login: string }>>('auth/me/').then(response => response.data);
    },
    login: (authObj: any) => {
        return instanceUser.post<AuthMeAPIType<{ userId: number }>>(`/auth/login`, authObj).then(response => response.data);
    },
    logOut: () => {
        return instanceUser.delete<AuthMeAPIType>(`/auth/login`).then(response => response.data);
    }
}


export const profileAPI = {
    getProfile: (id: number) => {
        return instanceUser.get<ProfileType>(`profile/${id}`).then(response => response.data);
    },
    getStatus: (id: number) => {
        return instanceUser.get<string>(`profile/status/${id}`).then(response => response.data);
    },
    updateStatus: (status: string) => {
        return instanceUser.put<AuthMeAPIType>(`profile/status`, {status}).then(response => response.data);
    },
    savePhoto:(photo:File)=>{
        const formData = new FormData();
        formData.append('NewAva',photo)
        return instanceUser.put('/profile/photo',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
    }
}

