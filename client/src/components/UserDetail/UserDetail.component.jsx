import React, { useEffect, useState} from 'react'
import axios from 'axios'
import ProfilePicture from '../ProfilePicture/ProfilePicture.component'
import { useParams } from 'react-router-dom'
import {FaUserGraduate, FaUserTag} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import './UserDetail.scss'
import Loading from '../Loading/Loading.component'
import Navbar from '../Navbar/Navbar.component'


export default function UserDetail() {

    const {publicId} = useParams()

    let proficiencyLevels = []

    const [userStrengths, setUserStrengths] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    const renderStrengths = () => {
        proficiencyLevels = [...new Set(userStrengths.map(strength => strength.proficiency))]
        return(
            proficiencyLevels.map(proficiency => {
                return(
                    <div className="strengths">
                        <div className="proficiency">
                            <h1>{proficiency}</h1>
                        </div>
                        <div className="skills">
                            {userStrengths.map(skill => {
                                return skill.proficiency === proficiency ? <p className='skill'>{skill.name}</p> : null
                            })}
                        </div>
                    </div>
                )
            })
        )
    }

    const getUserStrengths = async () =>{
        const response = await axios.get(`/user/skills`, {
            params: {
                user: publicId
            }
        })
        setUserStrengths(response.data.strengths)
    }

    const getUserInfo = async () => {
        const response = await axios.get(`/user/profile`, {
            params: {
                user: publicId
            }
        })
        setUserInfo(response.data.userInfo)
    }

    useEffect(() => {
        getUserStrengths()
        getUserInfo()
    },[])
    if(!userInfo || !userStrengths) return <Loading/>
    else return(
        <div className="detail-container">
            <Navbar/>
            {
                userInfo && <div className="card">
                    <ProfilePicture picture={userInfo.picture} publicId={userInfo.publicId}/>
                    <div className="info">
                        <h1>{userInfo.name}</h1>
                        <h2><FaUserGraduate className='icon'/>{userInfo.headline}</h2>
                        <p><GoLocation className='icon'/>{userInfo.location}</p>
                        <p><FaUserTag className='icon'/>{userInfo.publicId}</p>
                    </div>
                </div>
            }
            <div className="card">
                {
                    userStrengths && renderStrengths()
                }
            </div>

        </div>
    )
}