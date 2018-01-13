import React, { PureComponent } from 'react';
import classname from 'helpers/classname';
import { setInterval } from 'timers';

class Item extends PureComponent {

    constructor() {
        super();

        this.state = {
            leftNext: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.next) {
            setTimeout(() => {
                this.setState({
                    leftNext: true
                });  
            }, 50);
        }
    }

    render() {

        const {active, children, img, href, hrefText, left, next} = this.props;
        const { leftNext } = this.state;

        return (
            <div 
                {...classname(
                    {
                        active: next ? false : active || left,
                        next: next,
                        left: left || (leftNext && next)
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
const INTERVAL = 4000;

export default class CarouselScreen extends PureComponent {

    constructor() {
        super();
        this.state = {
            activeSlide: 1,
            prepareSlide: false,
            next: true
        };
    }

    onChangeSlide = (count) => {
        const {activeSlide} = this.state;

        let slide = activeSlide + count;

        if (slide > 3) {
            slide = 1;
        }
        else if (slide === 0) {
            slide = 3;
        }

        this.setState({
            prepareSlide: true,
            activeSlide: slide,
            next: true
        });

        setTimeout(() => {
            this.setState({
                prepareSlide: false
            });  
        }, 500);
    }

    onClickChangeSlide = (count) => {
        clearInterval(this.interval);
        this.onChangeSlide(count);
        this.interval = setInterval(() => this.onChangeSlide, INTERVAL);
    }

    componentDidMount() {
        // this.interval = setInterval(() => {
        //     this.onChangeSlide(1);
        // }, INTERVAL);     
    }

    render() {

        const { activeSlide, prepareSlide } = this.state;

        return (
            <div className="carousel slide">
                <div className="carousel-inner">
                    <Item 
                        active={activeSlide === 1}
                        left={prepareSlide && activeSlide === 2}
                        next={prepareSlide && activeSlide === 1}
                        img="http://косметолог48.рф/wp-content/uploads/2016/10/1.jpg"
                        href="/#contacts"
                        hrefText="Запись на приём +7 (960) 152-14-22"
                    >
                        Есть вопросы? Просто позвоните!
                    </Item> 
                    <Item 
                        active={activeSlide === 2}
                        left={prepareSlide && activeSlide === 3}
                        next={prepareSlide && activeSlide === 2}
                        img="http://косметолог48.рф/wp-content/uploads/2016/10/3.jpg"
                        href="/#services"
                        hrefText="Услуги"
                    >
                        Беспокоят родинки? Это ко мне.
                    </Item>
                    <Item 
                        active={activeSlide === 3}
                        left={prepareSlide && activeSlide === 1}
                        next={prepareSlide && activeSlide === 3}
                        img="http://косметолог48.рф/wp-content/uploads/2016/10/2.jpg"
                        href="/#contacts"
                        hrefText="Узнай подробности, звони +7 (960) 152-14-22"
                    >
                        Уникальные услуги и самые современные методы.
                    </Item>	

                    <ol className="carousel-indicators">
                        <li {...classname({active: activeSlide === 1})}></li>
                        <li {...classname({active: activeSlide === 2})}></li>
                        <li {...classname({active: activeSlide === 3})}></li>
                    </ol>
                    <a 
                        className="left carousel-control"
                        onClick={() => this.onClickChangeSlide(-1)}    
                    >
                        <span className="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a 
                        className="right carousel-control"
                        onClick={() => this.onClickChangeSlide(1)}
                    >
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </a>
                    <div className="enigma_slider_shadow"></div>
                </div>
            </div>
        );
    }
}
