import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Navbar.scss'

export default function Navbar() {

    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const searchUser = async (e) => {
        e.preventDefault()
        const response = await axios.get(`/user/profile`, {
            params: {
                user: searchInput
            }
        })
        if(response.data.status !== 'error'){
            window.location.assign(`/user/${response.data.userInfo.publicId}`)
        }else{
            alert('User not found')
        }
    }

    return(
        <nav className='navbar'>
            <Link to ='/'>
                <div className="home-title">
                    <h1>torre</h1><h1 className='co'>.co</h1>
                </div>
            </Link>
            <div className="search-bar">
                <input type="text" name="search-user" id="search-user" placeholder='Search user' onChange={handleChange} />
                <AiOutlineSearch className='icon' onClick={searchUser}/>
            </div>
        </nav>
    )
}