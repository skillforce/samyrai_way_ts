import React from 'react';
import s from './Paginator.module.css';


const { page, pageSelect, btnGroup} = s;


type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (t: number) => void
}


const Paginator = (props: PaginatorPropsType) => {

    const {totalUsersCount,pageSize,currentPage,onPageChanged}=props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let allPages = [];
    for (let i = 1; i <= pagesCount; i++) {
        allPages.push(i)
    }



    return (
            <div className={btnGroup}>
                {allPages.map(t => <span onClick={() => {
                    onPageChanged(t)
                }} className={currentPage === t ? pageSelect : page}>{t}</span>)}
            </div>

    )
}


export default Paginator;


