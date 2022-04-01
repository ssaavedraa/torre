import React from 'react'
import {FaUserGraduate, FaUserTag} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import { NavLink } from 'react-router-dom'
import ProfilePicture from '../ProfilePicture/ProfilePicture.component'

import './UserCard.scss'

export default function UserCard({user}) {

    if(user.user === 'User not found') return <p>{user.user}</p>
    else{
    return(
        <NavLink to={`/user/${user.publicId}`}>
            <div className="user-card">
                <ProfilePicture picture={user.picture} publicId={user.publicId}/>
                <div className="text">
                    <h1>{user.name}</h1>
                    <p><FaUserGraduate className='icon'/>{user.headline}</p>
                    <p><GoLocation className='icon'/>{user.location}</p>
                    <p><FaUserTag className='icon'/>{user.publicId}</p>
                </div>
            </div>
        </NavLink>
    )}
}