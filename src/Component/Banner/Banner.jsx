import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../../FromThere/request'
import axios from '../../FromThere/axios'
function Banner() {
    const [movie, setMovie]=useState([])
    useEffect(() => {
        (async () => {
          try {
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.log(request)
            setMovie(request?.data.results[
                Math.floor(Math.random()*request.data.results.length)
            ]);
            return request;
          } catch (error) {
            console.log("error", error);
          }
        })();
      }, []);
      function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1) + "..."  : str ;
      }
  return (
    <div className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
      }}>
        <div className='banner__context'>
            <h1 className='banner__title'> 
                {movie?.title || movie?.name || movie.orginal_name}
            </h1>
            <div className="banner__button">
                <button className='banner-banner'>Play</button>
                <button className='banner-banner'>My List</button>
            </div>
            <h1 className='banner-discription'>{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className='banner-fade'></div>
    </div>
  )
}

export default Banner