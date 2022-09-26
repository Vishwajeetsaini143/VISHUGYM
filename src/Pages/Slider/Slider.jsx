import { Carousel } from 'react-responsive-carousel'
import slider from '../../Component/images/slider.jpg'
import slider3 from '../../Component/images/slider3.jpg'
import slider4 from '../../Component/images/slider4.jpg'
import slider5 from '../../Component/images/slider5.jpg'

import './Slider.css'

const  Slider = () => {
  return( 
    <div>
   <Carousel infiniteLoop autoPlay={true} showThumbs={false} showArrows={false} >
    
  
    <div className='Carousel-img'>
    <img src={slider} alt=''/>

    </div> 
    <div className='Carousel-img'>
    <img src={slider3} alt=''/>

    </div> 
    <div className='Carousel-img'>
    <img src={slider4} alt=''/>

    </div> 
    <div className='Carousel-img'>
    <img src={slider5} alt=''/>

    </div> 
   

   </Carousel>
   </div>
   
  )
}

export default Slider