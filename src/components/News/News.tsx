import React from 'react';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';


const News = () => {
    return (<div>News</div>)
}


export default withAuthRedirect(News);