import React, { useEffect } from "react"
import Bar from "./components/Bar"
import Info from "./components/Info"
import movData from "./movData"
import Form from "./components/Form"
import "./style.css"

export default function App(){
    
    const [listOfMovies, setListofMovies] = React.useState(movData);
    
    const infoElement = listOfMovies.map(item =>{
        if (item.title)
        return(
            <Info 
                key= {item.key}
                handleDelete= {handleDelete}
                {...item}
                
            />
        )
    })
    


    
    const [count, setCount] = React.useState(0)

     const [formData,setFormData] = React.useState(
        {
            title: "",
            year: ""
        }
    )

    function handleChange(event) {
        const {name, value} = event.target
        setFormData({...formData,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleChange(event)
        fetchData()
        console.log(movie)
        movie.title && setCount(count+1)
        setListofMovies(listOfMovies.concat(movie))

    }
      

    
    const [movie, setMovie] = React.useState({
        key: 3,
        title: "Se7en",
        year: 1995,
        director: "David Fincher",
        IMDbUrl: "https://www.imdb.com/title/tt0114369/",
        description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    })
    
    


    const url =`https://www.omdbapi.com/?t=${formData.title.replace(/ /g, "+")}&y=${formData.year}&plot=full&apikey=399f76ff`
    

    function passMovie(data){
        setMovie({
            title: data.Title,
            year: data.Year,
            director: data.Director,
            IMDbUrl: `https://www.imdb.com/title/${data.imdbID}/`,
            description: data.Plot,
            imageUrl: data.Poster
        })
    }
    
    
    function fetchData(){
        fetch(url)
        .then(res => res.json())
        .then(data => passMovie(data))

    }    
    
    
    
    //console.log(movieData)
    //console.log(movie)
    //console.log(count)  

    function handleDelete(event){
        const title = event.target.name
        console.log(title)
        const newList = listOfMovies.filter(item => item.title !== title);
        setListofMovies(newList);
    }
    
    return(
        <div>
            <Bar />
            <Form handleChange={handleChange} value={formData} fetchData={fetchData} handleSubmit={handleSubmit}/>
            <section className="movie-list">
            {infoElement}
            {(count > 0 && movie.title) && <Info {...movie} handleDelete={handleDelete} />}
            </section>
        </div>
    )
}
