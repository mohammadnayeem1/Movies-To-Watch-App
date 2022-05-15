import React, { useEffect } from "react"
import Bar from "./components/Bar"
import Info from "./components/Info"
import movData from "./movData"
import Form from "./components/Form"
import "./style.css"

export default function App(){
    
    
    const [listOfMovies, setListofMovies] = React.useState(movData);
    
    const [count, setCount] = React.useState(0)

    const [formData,setFormData] = React.useState(
        {
            title: "",
            year: ""
        }
    )
    const [movie, setMovie] = React.useState({})
    

    function handleChange(event) {
        const {name, value} = event.target
        setFormData({...formData,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetchData()
        movie.title && setCount((count) => count+1)

    }
      


    const url =`https://www.omdbapi.com/?t=${formData.title.replace(/ /g, "+")}&y=${formData.year}&plot=full&apikey=399f76ff`
    

    function passMovie(data){
        setMovie({
            key: listOfMovies.length,
            title: data.Title,
            year: data.Year,
            director: data.Director,
            IMDbUrl: `https://www.imdb.com/title/${data.imdbID}/`,
            description: data.Plot,
            imageUrl: data.Poster,
            actors: data.Actors
        })
    }
    

    function fetchData(){
        fetch(url)
        .then(res => res.json())
        .then(data => data.Title ? passMovie(data) : alert("Does not exist"))

    }    
    
    useEffect(() => {
        setListofMovies(listOfMovies.concat(movie))
    }, [movie])
    
  

    const uniqueTitles = Array.from(new Set(listOfMovies.map(movies => movies.title)))
    .map(title => {
      return listOfMovies.find(movies => movies.title === title)
    })
    
    
    const infoElement = uniqueTitles.map(item => {
        
        if (item.title)
        return(
            <Info 
                key= {item.key}
                handleDelete= {handleDelete}
                {...item}
                
            />
        )
    })
    

    function handleDelete(event){
        const title = event.target.name
        const newList = listOfMovies.filter(item => item.title !== title);
        setListofMovies(newList);
    }
    
    return(
        <div>
            <Bar />
            <Form handleChange={handleChange} value={formData} handleSubmit={handleSubmit}/>
            <section className="movie-list">
            {infoElement}
            </section>
        </div>
    )
}
