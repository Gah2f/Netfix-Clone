import React,{useState, useEffect} from 'react'
import '../Row/Row.css'
import axios from '../../FromThere/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl]=useState("");
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        // console.log(request)
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => (
      
          <img 
          onClick={()=>handleClick(movie)}
           className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={index}
            src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}

          />
        ))}
    </div>
    <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
      </div>
    </div>
  )
}
export default Row