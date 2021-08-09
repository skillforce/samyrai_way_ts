import axios from 'axios';
import React from 'react';
import s from './UsersClass.module.css';
import avatarBlock from '../../../img/avatarBlock.png';
import {UsersClassPropsType} from './ContainerUsersClass';


const {avatar, statusMSG, fullUsers, btnFoll, btnUnFoll, page, pageSelect, btnGroup} = s;


class UsersClass extends React.Component<UsersClassPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response: any) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }


    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then((response: any) => {
            this.props.setUsers(response.data.items)
        });
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let allPages = [];
        for (let i = 1; i <= pagesCount; i++) {
            allPages.push(i)
        }


        return (<div>
            <div className={btnGroup}>
                {allPages.map(t => <span onClick={() => {this.onPageChanged(t)}}
                                         className={this.props.currentPage === t ? pageSelect : page}>{t}</span>)}
            </div>
            {this.props.UsersData.map(t => (<div className={fullUsers}>
                <div className={avatar}>
                    <img
                        src={t.photos.small ? t.photos.small : avatarBlock}
                        alt="avaUser"/>
                    <div>
                        <div>{t.name}</div>
                        <div className={statusMSG}>{t.status}</div>
                    </div>
                </div>
                <div>
                    {t.followed && <button className={t.followed ? btnFoll : btnUnFoll} onClick={() => {
                        this.props.onUnFollow(t.id)
                    }}>Follow</button>}
                    {!t.followed && <button className={t.followed ? btnFoll : btnUnFoll} onClick={() => {
                        this.props.onFollow(t.id)
                    }}>Unfollow</button>}

                </div>
            </div>))}
        </div>)
    }
}


export default UsersClass;