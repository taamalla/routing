import {useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
var getYouTubeID = require('get-youtube-id');
function AddMovie({handleAdd}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle]=useState('') 
    const [description, setDesc]=useState('') 
    const [posterUrl, setPoster]=useState('')
    const [rate, setRate]=useState(0) 
    const [trailerUrl,setTrailerUrl]=useState('')
   
    const HandleChange = (e) =>
    setTrailerUrl(getYouTubeID(e.target.value));

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div style={{display:'flex', flexDirection:'column'}}>
              <label> TITLE</label>
              <input   type='text'  onChange={(e)=>setTitle(e.target.value)}  value={title} />
              <label> DESCRIPTION</label>
              <input   type='text'  onChange={(e)=>setDesc(e.target.value)}  value={description} />
              <label> POSTERURL</label>
              <input   type='text'  onChange={(e)=>setPoster(e.target.value)}  value={posterUrl} />
              <label> RATE</label>
              <input   type='text'  onChange={(e)=>setRate(e.target.value)}  value={rate} />
              <label> TRAILERURL(only a youtube link)</label>
              <input   type='text'  onChange={HandleChange}  value={trailerUrl} 
              required placeholder="URL" />
              </div>
              
             
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
            onClick={()=>handleAdd({id:Math.random(), title, description, posterUrl,rate,trailerUrl})}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default AddMovie