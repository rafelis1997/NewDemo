import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export function InstructionsWorld() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="w-full flex flex-col justify-center items-center p-0">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <span className='max-w-xs text-3xl text-center text-[#6e5dcf] font-black'>
              No apps, no downloads.  
            </span>
            <div className="svgContainer">
              <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 -10 32 40" className='arIcon'>
                <line className="st0" x1="4" y1="24" x2="28" y2="24" id="id_101"></line>
                <polygon className="st0 cube" points="16,2 10,5 16,8 22,5 " id="id_102"></polygon>
                <polyline className="st0 cube" points="10,5 10,12 16,15 22,12 22,5 " id="id_103"></polyline>
                <line className="st0 cube" x1="16" y1="8" x2="16" y2="15" id="id_104"></line>
                <path className="st0" d="M28.5,23.4l-3.9-4.7c-0.4-0.5-0.9-0.7-1.5-0.7H8.9c-0.6,0-1.2,0.3-1.5,0.7l-3.9,4.7C3.2,23.8,3,24.3,3,24.7V27
                  c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2v-2.3C29,24.3,28.8,23.8,28.5,23.4z" id="id_105" shapeRendering="geometricPrecision"></path>
              </svg>
            </div>
 
            <span className='max-w-xs text-3xl text-center text-[#263238] font-extrabold'>
              In this app, you will be able to experience AR <span className='max-w-xs text-3xl text-center text-[#6e5dcf] font-black'>directly from your browser</span></span>
          </div>

          <div className="keen-slider__slide number-slide2">
            <span className='max-w-xs text-3xl text-center text-[#263238] font-extrabold'>
              You can place the model on any horizontal surface
            </span>
            <div className="svgContainer">
              <img src="https://raw.githubusercontent.com/rafelis1997/rafelis1997/main/193482536-2cc6c466-b52d-4c0d-93ce-6e44d3a6477f.svg" alt=""/>
            </div>
            <span className='max-w-xs text-3xl text-center text-[#6e5dcf] font-black'>
              Try to position it by dragging, rotate or scale with a pinch move. It's awesome!
            </span>
          </div>
          <div className="keen-slider__slide number-slide3">
             
            <div className="svgContainer">
             
            <svg width="200" height="200" viewBox="-50 -50 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M120.885 85.5385L99 96.5175L77.1151 85.5385L99 74.5594L120.885 85.5385Z" stroke="#92E3A9"/>
              <mask id="path-2-inside-1_804_571" fill="white">
                <path  d="M76 85.5385V112.462L99 124L122 112.462V85.5385"/>
              </mask>
              <path  d="M76 112.462H75V113.079L75.5516 113.355L76 112.462ZM99 124L98.5516 124.894L99 125.119L99.4484 124.894L99 124ZM122 112.462L122.448 113.355L123 113.079V112.462H122ZM75 85.5385V112.462H77V85.5385H75ZM75.5516 113.355L98.5516 124.894L99.4484 123.106L76.4484 111.568L75.5516 113.355ZM99.4484 124.894L122.448 113.355L121.552 111.568L98.5516 123.106L99.4484 124.894ZM123 112.462V85.5385H121V112.462H123Z" fill="#92E3A9" mask="url(#path-2-inside-1_804_571)"/>
              <path  d="M99 97.0769V124" stroke="#92E3A9"/>
              <path className="phone" d="M67.9501 190H132.05C143.18 190 152.21 181.442 152.21 170.862V29.152C152.21 18.582 143.184 10 132.07 10H67.9701C56.8421 10 47.8101 18.582 47.8101 29.152V170.86C47.8101 181.436 56.8361 190 67.9701 190M100.03 183.486C95.0441 183.486 91.0181 179.446 91.0181 174.49C91.0181 169.512 95.0381 165.486 100.03 165.486C105.004 165.486 109.018 169.506 109.018 174.49C109.018 179.452 104.998 183.486 100.03 183.486ZM86.2941 21.664H113.748C114.86 21.664 115.768 22.43 115.768 23.368C115.768 24.31 114.864 25.076 113.748 25.076H86.2941C85.1941 25.076 84.2741 24.31 84.2741 23.368C84.2739 22.43 85.1821 21.664 86.2941 21.664M55.7161 43.26C55.7161 41.672 57.0661 40.384 58.7321 40.384H141.312C142.982 40.384 144.326 41.666 144.326 43.26V156.24C144.326 157.822 142.982 159.106 141.312 159.106H58.7321C57.0661 159.106 55.7161 157.822 55.7161 156.24V43.26" fill="#92E3A9"/>
            </svg>
            </div>
            <span className='max-w-xs text-3xl text-center text-[#263238] font-extrabold'>
              <span 
                className='max-w-xs text-3xl text-center text-[#6e5dcf] font-black'
              > That's it!</span>
            </span>
            
            <Link to="/world-ar" className="absolute bottom-20 w-7/12 m-4">
                <span 
                  className="font-bold text-xl text-slate-50 flex justify-center items-center py-4 px-8 rounded-md bg-[#6e5dcf]"
                >Let's Go!</span>
              </Link>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}