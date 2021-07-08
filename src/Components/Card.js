import {Card} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

import {Link} from "react-router-dom";
function MovieCard ({movie}){
  console.log(movie)
    return (
        
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    {movie.description}
    </Card.Text>
    <ReactStars
    count={5}
    value={movie.rate}
    size={24}
    activeColor="#ffd700"
  />
  
  <Link to={`/trailer/${movie.id}`}>Watch the Trailer</Link>

  </Card.Body>
</Card>
       
    )
}
export default MovieCard