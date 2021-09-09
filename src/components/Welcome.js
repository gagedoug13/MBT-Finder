import React from 'react'
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div className='welcome'>
            <h1>Welcome to MBT Trail Finder!</h1>
            <h2>Let's get started by finding some trails</h2>
            <Link to="/main"> <button className="goToHome">Find Trails</button>   </Link>
        </div>
    )
}
