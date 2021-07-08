import {Navbar,Form,FormControl} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
function Nav ({setSearch, setRating}){
    const ratingChanged = (newRating) => {
        setRating(newRating);
      };
       

    return (
        <Navbar bg="light" expand="lg">

  <Navbar.Brand ><Link to="/" >Movie App</Link></Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   
    <Form inline>
      <FormControl     onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
  
    </Form>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
  </Navbar.Collapse>
</Navbar>
    )
}
export default Nav