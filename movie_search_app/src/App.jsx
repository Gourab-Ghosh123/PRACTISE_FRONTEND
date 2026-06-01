import "./App.css";
import { useState } from "react";

function App() {
    const [search , setSearch] = useState("");
    const [movies , setMovies] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState("");

    async function fetchMovies() {
        try {
            setLoading("true");
            setError("");

            const response = await fetch(
                `https://www.omdbapi.com/?s=${search}&apikey=${import.meta.env.VITE_API_KEY}`
            );
            const data = await response.json();
            
            if(data.Response === "False") {
                throw new Error(data.Error);
            }

            setMovies(data.Search);
        }

        catch(err) {
            setError(err.message)
        }

        finally {
            setLoading(false);
        }
    }

    return (
        <div className="app">

            <h1 className="title">
                Movie Search App
                </h1>


            <div className="search-box">
            <input type="text" placeholder="Search Movie..." value={search}
            onChange={(e) => setSearch(e.target.value) }/>

            <button onClick={fetchMovies}>Search</button>
            </div> 

            {
                loading && 
                <h2>Loading...</h2>
            }

            {
                error && 
                <h2>{error}</h2>
            }

            <div className="movie-card">
            {
                movies.map((movie) => (
                    <div className="movie-card" key={movie.imdbID}>

                        <img src={movie.Poster} alt={movie.Title} />
                        <div className="movie-info">
                        <h2>{movie.Title}</h2>
                        <p>{movie.Year}</p>
                        </div>
                        </div>
                        
                ))   
            }
            </div>
            </div>
        
    )
}

export default App;