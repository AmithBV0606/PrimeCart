import React, {useState} from 'react'
import "../Slider/Slider.scss"

// Icons 
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "/src/assets/Models/Slider-1.jpg",
        "/src/assets/Models/Slider-2.jpg",
        "/src/assets/Models/Slider-3.jpg"
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translate(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>

        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <ArrowBackOutlinedIcon sx={{ color : '#999'}}/>
            </div>

            <div className="icon" onClick={nextSlide}>
                <ArrowForwardOutlinedIcon sx={{ color : '#999'}}/>
            </div>
        </div>
    </div>
  )
}

export default Slider