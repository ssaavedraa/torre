import React from 'react'
import {FaUserGraduate, FaUserTag} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'

import './UserCard.scss'

export default function UserCard({user}) {

    if(user.user === 'User not found') return <p>{user.user}</p>
    else{
    return(
        <div className="user-card">
            <div className="hexagon-border">
                <img src={user.picture} alt={user.publicId} />
            </div>
            <div className="text">
                <h1>{user.name}</h1>
                <p><FaUserGraduate className='icon'/>{user.headline}</p>
                <p><GoLocation className='icon'/>{user.location}</p>
                <p><FaUserTag className='icon'/>{user.publicId}</p>
            </div>
        </div>
    )}
}