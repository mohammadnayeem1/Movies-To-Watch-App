import React from 'react'
import film from '../pictures/film.png'

export default function Bar(){
    return(
        <nav className="bar">
                <img src={film} className="icon" />
                <h3> Movies to Watch </h3>
        </nav>
    )
}