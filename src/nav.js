import React from "react"
import {Link, useLocation} from "react-router-dom"

function Navigation(){
    const {pathname} = useLocation();
    const links = [
        {path:'/tuiter',label: 'Tuiter'}
    ];
    return(
    <div className='nav nav-tabs'>
        <Link className='nav-link' to='/tuiter'>Tuiter</Link>
        <Link className='nav-link' to='/labs/a3'>A3</Link>
        <Link className={`nav-link`} to='/labs/a4'>A4</Link>

    </div>
    )
};

export default Navigation;