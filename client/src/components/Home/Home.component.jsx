import React, { useState } from 'react'
import axios from 'axios'
import {AiOutlineSearch} from 'react-icons/ai'

import ssaavedra from '../../assets/img/Firma-02.png'
import torre from '../../assets/img/torre.png'
import Loading from './../Loading/Loading.component';
import './Home.scss'
import UserCard from '../UserCard/UserCard.component'

export default function Home() {

    const [isLoading, setIsLoading] = useState(false)
    const [inputUser, setInputUser] = useState('')
    const [userFound, setUserFound] = useState({})

    const handleChange = (e) => {
        setInputUser(e.target.value)
    }

    const searchUser = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const response = await axios.get(`/user/profile`, {
            params: {
                user: inputUser
            }
        })
        setIsLoading(false)
        if(response.data.status === 'error'){
            setUserFound({
                user:'User not found'
            })
        }else{
            setUserFound(response.data.userInfo)
        }
    }

    return(
        <div className="home-container">
            {isLoading && <Loading/>}
            <div className="search">
                <div className="home-title">
                    <h1>torre</h1><h1 className='co'>.co</h1>
                </div>
                <div className="search-bar">
                    <input type="text" name="search-user" id="search-user" placeholder='Search user' onChange={handleChange} value={inputUser} />
                    <AiOutlineSearch className='icon' onClick={searchUser}/>
                </div>
            </div>
            <div className="footer">
                <p>Made by:</p>
                <a href="santiagosaavedra.com.co">
                    <img src={ssaavedra} alt="ssaavedraa" id='ssaavedraa' />
                </a>
                <p>for: </p>
                <a href="torre.co">
                    <img src={torre} alt="torre" id='torre' />
                </a>
            </div>
            <UserCard user={userFound}/>
        </div>
    )
}