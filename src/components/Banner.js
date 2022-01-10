import React, { useEffect, useState } from 'react'
import instance from '../axios'
import request from '../request'
import '../css/Banner.css'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const requestdalam = await instance.get(request.fetchNetflixOriginals)
            setMovie(
                requestdalam.data.results[
                Math.floor(Math.random() * requestdalam.data.results.length - 1)
                ]
            )
            return requestdalam
        }
        fetchData()
    }, [])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='baner_description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className='banner_fadeBottom' />
        </header>
    )
}

export default Banner
