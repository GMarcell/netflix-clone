import movieTrailer from 'movie-trailer'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import instance from '../axios'
import '../css/Row.css'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [TrailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchURL)
            // console.log(request)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchURL])
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if (TrailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(
                        new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                }).catch((error) => console.error(error))
        }
    }
    return (
        <div className='row'>
            <h3>{title}</h3>
            <div className='row_posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster $ {isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {TrailerUrl && <YouTube videoId={TrailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
