import React from 'react'

export default function Form(props){

    return (
        <form className="form" onSubmit={props.handleSubmit}>
            <input type="text" placeholder="Title" name="title" onChange={props.handleChange} value={props.title} className="formTitle"/>
            <input type="text" placeholder="Year(optional)" pattern="[0-9]*" maxlength="4" size="13" name="year" onChange={props.handleChange} value={props.year}/>
            <button className="btn"> Submit </button>
        </form>
    )
}