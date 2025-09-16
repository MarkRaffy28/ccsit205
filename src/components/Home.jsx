import Carousel from 'react-bootstrap/Carousel';
import img1 from '/images/img1.jpg';
import img2 from '/images/img2.jpg';
import img3 from '/images/img3.jpg';
import './Home.css'

function Home() {
  return (
    <section className='container m-3'>
      <div className='d-flex align-items-center flex-column gap-3'>
        <img className='image border border-2 border-primary' src="https://dl.dropbox.com/scl/fi/d1ykv47ny54gjfzgh37gt/img_13.jpg?rlkey=paoan6xzrn73tmfliqjc730hy&st=iwo56jmz&dl=0" />
        <h5>Know more about me!</h5>
      </div>
    </section>
  )
}

export default Home;
