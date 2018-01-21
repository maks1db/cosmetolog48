import React, { PureComponent } from 'react';
import classname from 'helpers/classname';
import Slider from 'nuka-carousel';

class Item extends PureComponent {

    constructor() {
        super();
    }

    render() {

        const {active, children, img, href, hrefText } = this.props;

        return (
            <div 
                {...classname(
                    {
                        active: active,
                    }, 'item')}
            >	
                <img 
                    src={img}
                    className="img-responsive" 
                    alt={children} 
                />	  
                <div className="container">
                    <div className="carousel-caption">
                        <div className="carousel-text">
                            <h1 className="animated bounceInRight">{children}</h1>			
                            <a 
                                className="enigma_blog_read_btn animated bounceInUp" 
                                href={href} 
                                role="button">
                                {hrefText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    position: 'static',
    transform: 'translateY(0)',
    cursor: 'pointer',
    top: 0,
};

const decorators = () => [
    {
        position: 'CenterLeft',
        component: ( { previousSlide }) => (
            <a 
                className="left carousel-control"  
                onClick={previousSlide} 
            >
                <span className="glyphicon glyphicon-chevron-left"></span>
            </a>
        ),
        style
    },
    {
        position: 'CenterRight',
        component: ( {nextSlide} ) => (
            <a 
                className="right carousel-control"
                onClick={nextSlide}
            >
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
        ),
        style
    },
    {
        position: 'BottomCenter',
        component: ( {goToSlide, currentSlide} ) => (
            <ol className="carousel-indicators">		
                <li onClick={() => goToSlide(0)} {...classname({active: currentSlide === 0})}></li>		
                <li onClick={() => goToSlide(1)} {...classname({active: currentSlide === 1})}></li>		
                <li onClick={() => goToSlide(2)} {...classname({active: currentSlide === 2})}></li>		
            </ol>
        )
    }
];
const INTERVAL = 9000;

export default class CarouselScreen extends PureComponent {

    constructor() {
        super();
        this.state = {
            activeSlide: 1
        };
    }

    onChangeSlide = (duration = 1) => {
        const {activeSlide} = this.state;

        let slide = activeSlide + duration;

        if (slide > 3) {
            slide = 1;
        }
        else if (slide === 0) {
            slide = 3;
        }

        this.setState({
            activeSlide: slide
        });
    }

    onSetSlide = (number) => {
        this.setState({
            activeSlide: number
        });  
    }

    render() {

        const { activeSlide } = this.state;

        return (
            <div className="carousel slide" id="main">
                <div className="carousel-inner">
                    <Slider 
                        afterSlide={(slide) => this.setState({activeSlide: slide})}
                        decorators={decorators(this.onChangeSlide)}
                        autoplay={true}
                        autoplayInterval={INTERVAL}
                        wrapAround={true}
                        speed={1000}
                        easing="ease-in-out"
                    >
                        <Item 
                            active={activeSlide === 0}
                            img="/assets/images/img_1.jpg"
                            href="/#contacts"
                            hrefText="Запись на приём +7 (960) 152-14-22"
                        >
                    Есть вопросы? Просто позвоните!
                        </Item> 
                        <Item 
                            active={activeSlide === 1}
                            img="/assets/images/img_3.jpg"
                            href="/#services"
                            hrefText="Оромный перечень оказываемых улуг"
                        >
                    Беспокоят родинки? Это ко мне.
                        </Item>
                        <Item 
                            active={activeSlide === 2}
                            img="/assets/images/img_2.jpg"
                            href="/#contacts"
                            hrefText="Узнай подробности, звони +7 (960) 152-14-22"
                        >
                    Уникальные услуги и самые современные методы.
                        </Item>	
                    </Slider>
                    <div className="enigma_slider_shadow"></div>
                </div>
            </div>
        );
    }
}
