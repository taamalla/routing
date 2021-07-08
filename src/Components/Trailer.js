import YouTube from "react-youtube"
import {useParams} from "react-router-dom"
import { MovieList } from "./MovieList";

var getYouTubeID = require('get-youtube-id');
function Trailer({movies}){
  const {ID}=useParams()
  const movie=movies.find(el=>el.id==ID)
  console.log(movie)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
    
          autoplay: 0,
        },
      };
      const onReady = (e) =>
      e.target.pauseVideo();

    return (
<div>
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
    <iframe width="560" height="315" src={movie.trailerUrl}
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    )
}
export default Trailer