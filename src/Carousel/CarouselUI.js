import useCarouselLogic from './CarouselLogic';

const Carousel = () => {
  const { carouselPosition, angle, slideLeft, slideRight } = useCarouselLogic();

  return (
    <div
      id='projects-section'
      className={`modal ${
        newState.openProjects ? `modal--visible` : `modal--closed`
      }`}
    >
      <div className='modal_content-projects'>
        <span className='close' onClick={newState.closeModalProjects}>
          ×
        </span>
        <div className='project_carousel-container'>
          <button className='slider_btn slider_btn-left' onClick={slideLeft}>
            ‹
          </button>
          <div className='project_carousel'>
            <div
              className='project_content'
              style={{ transform: `rotateY(${angle}deg)` }}
            >
              <div className='project_window'>
                <img src={nextJSImg} alt='next js landing page' />
                <div
                  className={`project_description ${
                    carouselPosition === 0
                      ? 'project_description--active'
                      : 'project_description--inactive'
                  }`}
                >
                  <div className='project_window'>
                    <img src={reactModalImg} alt='modal-windows-reactjs' />
                    <div
                      className={`project_description ${
                        carouselPosition === 1
                          ? 'project_description--active'
                          : 'project_description--inactive'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className='project_window'>
                <img src={topQualityPaintImg} alt='painting website' />
                <div
                  className={`project_description ${
                    carouselPosition === 2
                      ? 'project_description--active'
                      : 'project_description--inactive'
                  }`}
                ></div>
              </div>
              <div className='project_window'>
                <img src={maptyImg} alt='mapty_app' />
                <div
                  className={`project_description ${
                    carouselPosition === 3
                      ? 'project_description--active'
                      : 'project_description--inactive'
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <button className='slider_btn slider_btn-right' onClick={slideRight}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
