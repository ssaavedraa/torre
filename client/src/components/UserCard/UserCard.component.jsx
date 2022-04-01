import React from 'react'
import './UserCard.scss'

export default function UserCard({user}) {

    if(user.user === 'User not found') return <p>{user.user}</p>
    else{
    return(
        <div className="user-card">
           <img src={user.picture} alt={user.publicId} />
           <h1>{user.name}</h1>
           <p>{user.headline}</p>
           <p>{user.location}</p>
           <p>{user.publicId}</p>
        </div>
    )}
}