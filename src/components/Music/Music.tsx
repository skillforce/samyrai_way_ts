import React from 'react';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';



const Music=()=>{
   return (<div>Music</div>)
}


export default withAuthRedirect(Music);