// Dependencies
import Carousel from 'react-bootstrap/Carousel';

const Slide = ({ imgUrl, title, subtitle }) => {
  return (
    // <Fragment>
    //   <div className="carousel-item active">
    //     <img className="d-block w-100" src={imgUrl} alt="Slide" />
    //     <div className="carousel-caption">
    //       <h4>{title}</h4>
    //       <p>{subtitle}</p>
    //     </div>
    //   </div>
    // </Fragment>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={imgUrl}
        alt="Slide"
      />
      <Carousel.Caption>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default Slide;
