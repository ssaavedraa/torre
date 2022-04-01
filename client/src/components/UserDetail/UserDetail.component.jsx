import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProfilePicture from '../ProfilePicture/ProfilePicture.component'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading.component'
import './UserDetail.scss'

export default function UserDetail() {

    const {publicId} = useParams()

    let proficiencyLevels = []

    const [userStrengths, setUserStrengths] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    // if (userStrengths) {
    //     const strengths = [...new Set(userStrengths.map(strength => strength.proficiency))]
    // }

    const renderStrengths = () => {
        proficiencyLevels = [...new Set(userStrengths.map(strength => strength.proficiency))]
        return(
            proficiencyLevels.map(proficiency => {
                return(
                    <div className="strengths">
                        <h1>{proficiency}</h1>
                        {userStrengths.map(skill => {
                            return skill.proficiency === proficiency ? <p>{skill.name}, {skill.proficiency}</p> : null
                        })}
                    </div>
                )
            })
        )
    }

    const getUserStrengths = async () =>{
        const response = await axios.get(`http://localhost:3001/user/skills`, {
            params: {
                user: publicId
            }
        })
        setUserStrengths(response.data.strengths)
    }

    const getUserInfo = async () => {
        const response = await axios.get(`http://localhost:3001/user/profile`, {
            params: {
                user: publicId
            }
        })
        setUserInfo(response.data.userInfo)
    }

    useEffect(() => {
        getUserStrengths()
        getUserInfo()
    }, [])

    return(
        <div className="detail-container">
            {isLoading && <Loading/>}
            {
                userInfo && <div className="user-info-card">
                    <ProfilePicture picture={userInfo.picture} publicId={userInfo.publicId}/>
                    <h1>{userInfo.name}</h1>
                    <h2>{userInfo.headline}</h2>
                    <p>{userInfo.location}</p>
                    <p>{userInfo.publicId}</p>
                    <p>{userInfo.bioSummary}</p>
                </div>
            }
            <div className="skills-card">
                {
                    userStrengths && renderStrengths()
                }
            </div>

        </div>
    )
}