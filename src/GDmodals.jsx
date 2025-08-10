
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';

function GDmodals({ show, onHide, folder}){
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
if (!folder) return null;

    return (
        <>
        <Modal
      show={show} onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="w-fit m-auto"
      data-bs-theme="dark"
      bg="dark"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {folder.projectName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
            
            <Slider {...settings}>
                {folder?.designs?.map((design, index) => (
                    <div key={index} className="m-auto">
                        <img src={design} alt={`Design ${index + 1}`} className="h-[50vh] w-auto m-auto" />
                    </div>
                    ))}
            </Slider>
                
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
}

export default GDmodals;