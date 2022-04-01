import React, { useState } from 'react'
import axios from 'axios'
import {AiOutlineSearch} from 'react-icons/ai'

import './Home.scss'

export default function Home() {

    const [isLoading, setIsLoading] = useState()
    const [user, setUser] = useState()

    const searchUser = (e) => {
        e.preventDefault()
    }

    return(
        <div className="home-container">
            <h1>torre</h1>
            <form className="search-bar">
                <input type="text" name="search-user" id="search-user" placeholder='Search user' />
                <AiOutlineSearch className='icon'/>
            </form>
        </div>
    )
}