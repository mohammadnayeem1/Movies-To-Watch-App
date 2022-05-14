import React from "react"
import Bar from "./components/Bar"
import Info from "./components/Info"
import data from "./data"
import Form from "./components/Form"
import "./style.css"

export default function App(){
    const infoElement = data.map(item =>{
        return(
            <Info 
                key= {item.key}
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
        // passMovie()
        setCount(count+1)

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
    // const [movieData, setMovieData] = React.useState([])
    
    


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
    
    
    
    
    // function passMovie(){
    //     setMovie({
    //     title: movieData.Title,
    //     year: movieData.Year,
    //     director: movieData.Director,
    //     IMDbUrl: `https://www.imdb.com/title/${movieData.imdbID}/`,
    //     description: movieData.Plot,
    //     imageUrl: movieData.Poster
    // })
    // }
    
    // console.log(movieData)
    // console.log(movie)
    // console.log(count)  

    
    return(
        <div>
            <Bar />
            <Form handleChange={handleChange} value={formData} fetchData={fetchData} handleSubmit={handleSubmit}/>
            <section className="movie-list">
            {infoElement}
            {count > 0 && <Info {...movie} />}
            </section>
        </div>
    )
}

//fix 3 clicks  DONE
//fix element DONE
//show new data DONE
//movie not found
// need handle change in submit?
//duplicates
//maybe add autosearch 
//maybe delete feature