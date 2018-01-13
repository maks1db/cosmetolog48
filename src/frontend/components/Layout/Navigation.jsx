import React, { PureComponent } from 'react';
import classname from 'helpers/classname';

const Item = ({href, children, active}) => (
    <li 
        {...classname({
            active: active, 
            'current-menu-item': active  
        }, 'menu-item menu-item-type-custom menu-item-object-custom')}  
        title={children}
    >
        <a href={href}>
            {children}
        </a>
    </li>
);

export default class Navigation extends PureComponent {
    render() {

        return (
            <div className="navigation_menu affix-top" data-spy="affix" data-offset-top="95" id="enigma_nav_top">
                <span id="header_shadow"></span>
                <div className="container navbar-container">
                    <nav className="navbar navbar-default " role="navigation">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                                <span className="sr-only">Переключить навигации</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div id="menu" className="collapse navbar-collapse ">	
                            <div>
                                <ul className="nav navbar-nav">
                                    <Item href="#main" active={false}>Главная</Item>
                                    <Item href="#service" active={false}>Услуги</Item>
                                    <Item href="#about" active={true}>Обо мне</Item>
                                    <Item href="#certificates" active={false}>Сертификаты</Item>
                                    <Item href="#contacts" active={false}>Контакты</Item>
                                </ul>
                            </div>				
                        </div>	
                    </nav>
                </div>
            </div>
        );
    }
}