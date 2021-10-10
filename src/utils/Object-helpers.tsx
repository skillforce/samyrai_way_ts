import {
    UsersDataType
} from '../Redux/UsersPage-reducer';


export const updateObjectInArray = (items:UsersDataType[],IdUser:number,followed:boolean)=>{
    return items.map((t) => t.id === IdUser ? {
        ...t,
        followed: followed
    } : t)
}