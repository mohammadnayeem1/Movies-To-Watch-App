import React from 'react'

export default function Info(props){
    
    
    return(
        <div className="info">
            <img src={props.imageUrl} className="movieImage" alt="Picture not found"/>
            <div className = "movieInfo">
                <h1 className="Title"> {props.title} </h1>
                <h3 className="Year"> Release year: {props.year} </h3>
                <div>
                    <h3 className="Director"> Directed by: {props.director} </h3>
                    <h3 className="Actors"> Starring: {props.actors}</h3>
                    <p className="Description"> {props.description} </p>
                    <a href={props.IMDbUrl}> Click Here for more Info </a>
                    <button className='delete' name={props.title} onClick={props.handleDelete}> Delete </button>
                </div>
            </div>
        </div>
    )
}