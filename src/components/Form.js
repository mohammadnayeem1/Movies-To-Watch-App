import React from 'react'

export default function Form(props){
    



    
    return (
        <form className="form" onSubmit={props.handleSubmit}>
            <input type="text" placeholder="Title" name="title" onChange={props.handleChange} value={props.title}/>
            <input type="number" placeholder="Year (optional)" name="year" onChange={props.handleChange} value={props.year}/>
            <button className="button"> Submit </button>
        </form>
    )
}