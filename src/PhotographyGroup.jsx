
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function PhotographyGroup({show, onHide, gallery}) {

  if (!gallery) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    
  }
    return (
    <>
      <Modal
        show={show} onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="w-fit m-auto"
      >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="text-white">
              {gallery.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>

              <Slider {...settings} >
                {gallery.photos.map((url, index) => (
                  <div key={index} className="m-auto">
                    <img
                  key={url}
                  src={url}
                  alt={`${gallery.name}`}
                  className="w-auto max-h-[60vh] h-auto m-auto justify-around"
               />
                  </div>
                ))}
              </Slider>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal></>
    );
}
export default PhotographyGroup;