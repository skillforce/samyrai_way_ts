import React, {Suspense} from 'react';

import Preloader from '../components/Preloader/Preloader';


export function withSuspense(Component: React.FC) {

    return (props: any) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }


}