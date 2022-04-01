import React from 'react'

export default function ProfilePicture({picture, publicId}) {
    return(
        <div className="hexagon-border">
            <img src={picture} alt={publicId} />
        </div>
    )
}