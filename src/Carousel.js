import slideone from './assets/slide1.png'
import slidetwo from './assets/slide2.png'
import slidethree from './assets/slide3.png'
import slidefor from './assets/slide4.png'
import slidefive from './assets/slide5.png'

const Carousel = ()=>{
    return (
        <section>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slideone} className="d-block w-100" alt="cafe"/>
    </div>
    <div className="carousel-item">
      <img src={slidetwo} className="d-block w-100" alt="oferta"/>
    </div>
    <div className="carousel-item">
      <img src={slidethree} className="d-block w-100" alt="pan"/>
    </div>
    <div className="carousel-item">
      <img src={slidefor} className="d-block w-100" alt="vaso"/>
    </div>
    <div className="carousel-item">
      <img src={slidefive} className="d-block w-100" alt="galleta"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      



</section>


    )
}

export default Carousel;