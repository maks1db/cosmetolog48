import React, { PureComponent } from 'react';
import classname from 'helpers/classname';
import ToTop from 'react-scroll-top';

class Item extends PureComponent {
    render() {
        const {hash, children, activeMenu} = this.props;
        return (
            <li 
                {...classname({
                    active: activeMenu === hash, 
                    'current-menu-item': activeMenu === hash  
                }, 'menu-item menu-item-type-custom menu-item-object-custom')}   
                title={children}
            >
                <a 
                    href={hash}
                >
                    {children}
                </a>
            </li>
        );
    }
}

export default class Navigation extends PureComponent {

    constructor() {
        super();
        this.state = {
            activeMenu: '#main',
            fixed: false,
            menuOpen: false
        };
    }

    componentDidMount() {
        const items = [
            {key: '#main', value: 400},
            {key: '#service', value: 300},
            {key: '#about', value: 500},
            {key: '#certificates', value: 800},
            {key: '#contacts', value: 1000}
        ];

        window.addEventListener('scroll', () => {
            const { fixed } = this.state;
            const scroll = window.scrollY;

            if (fixed && scroll < 95) {
                this.setState({
                    fixed: false
                });
            }
            else if (!fixed && scroll >= 95) {
                this.setState({
                    fixed: true
                });
            }

            let loopBreak = false;
            items.forEach((item) => {

                if (loopBreak) return;
                const element = document.querySelector(item.key);
                if (element && element.offsetTop + item.value  > scroll) {
                    this.setState({
                        activeMenu: item.key  
                    });
                    loopBreak = true;
                }
            });
        });
    }

    onToggleMenu = () => {
        const { menuOpen } = this.state;

        this.setState( {
            menuOpen: !menuOpen
        });
    }

    render() {

        const { activeMenu, fixed, menuOpen } = this.state;
        return (
            <div 
                {...classname({
                    'affix-top': !fixed,
                    'affix': fixed
                }, 'navigation_menu')}
                id="enigma_nav_top"
            >
                <span id="header_shadow"></span>
                <div className="container navbar-container">
                    <nav className="navbar navbar-default " role="navigation">
                        <div className="navbar-header">
                            <button type="button" 
                                className="navbar-toggle" 
                                onClick={this.onToggleMenu}
                                data-toggle="collapse" 
                                data-target="#menu"
                            >
                                <span className="sr-only">Переключить навигации</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div id="menu" 
                            {...classname({
                                in: menuOpen
                            }, 'collapse navbar-collapse')}
                        >	
                            <div>
                                <ul className="nav navbar-nav">
                                    <Item hash="#main" activeMenu={activeMenu}>Главная</Item>
                                    <Item hash="#service" activeMenu={activeMenu}>Услуги</Item>
                                    <Item hash="#about" activeMenu={activeMenu}>Обо мне</Item>
                                    <Item hash="#certificates" activeMenu={activeMenu}>Сертификаты</Item>
                                    <Item hash="#contacts" activeMenu={activeMenu}>Контакты</Item>
                                </ul>
                            </div>				
                        </div>	
                    </nav>
                </div>
                <div className="to-top" >
                    <ToTop 
                        hideAt={100} 
                        position="bottom" 
                    />
                </div>
            </div>
        );
    }
}