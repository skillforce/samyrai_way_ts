import React, {useState} from 'react';
import s from './Paginator.module.css';


const {page, pageSelect, btnGroup} = s;


type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    onPageChanged: (t: number) => void
    portionSize: number
}


const Paginator = (props: PaginatorPropsType) => {

    const {totalItemsCount, pageSize, currentPage, onPageChanged, portionSize} = props;

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let allPages = [];
    for (let i = 1; i <= pagesCount; i++) {
        allPages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize);

    const [portionNumber, setPortionNumber] = useState(1);


    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (


        <div className={btnGroup}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button> }

            {allPages .filter(t=>t>=leftPortionPageNumber && t<=rightPortionPageNumber)
                .map((p)=>{
                    return <span className={currentPage === p ? pageSelect : page}
                    key={p}
                    onClick={()=>{onPageChanged(p)}}>{p}</span>
                })}

            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber +1)
            }}>Next</button>}
        </div>

    )
}


export default Paginator;


