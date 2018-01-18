import React, { PureComponent } from 'react';
import classname from 'helpers/classname';
import scrollTo from 'helpers/scrollTo';
import ToTop from 'react-scroll-top';

const Item = ({href, children, activeMenu}) => (
    <li 
        {...classname({
            active: activeMenu === href, 
            'current-menu-item': activeMenu === href  
        }, 'menu-item menu-item-type-custom menu-item-object-custom')}  
        onClick={(e) => {
            e.preventDefault();
            if(history.pushState) {
                history.pushState(null, null, href);
            }
            else {
                location.hash = href;
            }
            scrollTo(href);
        }}
        title={children}
    >
        <a href={href}>
            {children}
        </a>
    </li>
);

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
            '#main',
            '#service',
            '#about',
            '#certificates',
            '#contacts'
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
                const element = document.querySelector(item);
                if (element && element.offsetTop + 200 > scroll) {
                    this.setState({
                        activeMenu: item  
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
                                    <Item href="#main" activeMenu={activeMenu}>Главная</Item>
                                    <Item href="#service" activeMenu={activeMenu}>Услуги</Item>
                                    <Item href="#about" activeMenu={activeMenu}>Обо мне</Item>
                                    <Item href="#certificates" activeMenu={activeMenu}>Сертификаты</Item>
                                    <Item href="#contacts" activeMenu={activeMenu}>Контакты</Item>
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