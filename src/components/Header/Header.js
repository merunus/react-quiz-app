import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className = "header">
            <Link to = "/react-quiz-app" className = "title">Quizland </Link>
            <hr className='divider'></hr>
        </div>
        
    )
}

export default Header
