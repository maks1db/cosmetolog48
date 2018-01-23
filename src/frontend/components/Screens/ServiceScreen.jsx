import React, { PureComponent } from 'react';


const Item = ({ico, title, children}) => (
    <div className=" col-md-4 service">
        <div className="enigma_service_area appear-animation bounceIn appear-animation-visible">
            <div className="enigma_service_iocn pull-left"><i className={`fa-${ico}`}></i></div> 
            <div className="enigma_service_detail media-body">
                <h3>
                    <a>{title}</a>
                </h3>						
                <p></p>
                <p>{children}</p>
                <p></p>					
            </div>
        </div>
    </div>
);

export default class ServiceScreen extends PureComponent {
    render() {
        return (
            <div className="enigma_service" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="enigma_heading_title">
                                <h3>Мои услуги</h3>		
                            </div>
                        </div>
                    </div>
                </div>	
                <div className="container">
                    <div className="row isotope" id="isotope-service-container">		
                        <Item 
                            title="Дерматоскопия"
                            ico="gavel" 
                        >
                            Оптическая диагностика новообразований кожи
                        </Item>
                        <Item 
                            title="Косметологоия"
                            ico="thumbs-up" 
                        >
                            Удаление родинок, папиллом, бородавок. Удаление лазером
                        </Item>
                        <Item 
                            title="Процедуры"
                            ico="user-md" 
                        >
                            Ботокс, омоложение, биоревитализация, пилинг
                        </Item>
                    </div>
                </div>
            </div>
        );
    }
}