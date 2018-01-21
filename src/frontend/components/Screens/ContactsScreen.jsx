import React, { PureComponent } from 'react';

const Item = ({title, children}) => (
    <div className="col-md-4">
        <div style={{fontSize: '1.4em', marginBottom: '10px', textAlign: 'center'}}>
            {title}
        </div>
        <div className="contact">
            <i className="fa fa-home" aria-hidden="true"></i>
            <div className="contact-data">
                <label className="vertical">{children[0].props.children}</label>
            </div>
        </div>
        <div className="contact">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <div className="contact-data">
                <label className="vertical">{children[1].props.children}</label>
            </div>
        </div>
        <div className="contact">
            <i className="fa fa-mobile" aria-hidden="true"></i>
            <div className="contact-data">
                <label className="vertical">{children[2].props.children}</label>
            </div>
        </div>
    </div>
);

export default class ContactsScreen extends PureComponent {

    onScroll = () => {
        
        if (window.innerHeight + window.pageYOffset - 100 >= this.item.offsetTop) {
            (function(w, d, n, s, t) {
    
                t = d.getElementsByTagName('script')[0];
                s = d.createElement('script');
                s.type = 'text/javascript';
                s.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3AocqLGNt-ROQ1hNo-H_bnGED9Bl7IJlR3&amp;width=100%&amp;height=600&amp;lang=ru_RU&amp;scroll=false&amp;id=map';
                s.async = true;
                t.parentNode.insertBefore(s, t);

            })(window, document); 

            window.removeEventListener('scroll', this.onScroll);
        }
    }

    componentDidMount() {

        window.addEventListener('scroll', this.onScroll);
        this.onScroll();
    }

    render() {
        return (
            <div>
                <div 
                    className="enigma_service" 
                    id="contacts" 
                    ref={(e) => this.item = e}
                    style={{paddingBottom: '10px'}}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="enigma_heading_title">
                                    <h3>Контакты</h3>		
                                </div>
                            </div>
                        </div>
                    </div>	
                    <div className="container">
                        <div className="row isotope">		
                            <Item
                                title="ГУЗ Областной кожно-венерологический диспансер"
                            >
                                <div>г.&nbsp;Липецк, ул.&nbsp;Марины&nbsp;Расковой, дом&nbsp;18</div>
                                <div>8 (4742) 55-63-11, доб.&nbsp;302</div>
                                <div>8 (960) 152-14-22</div>
                            </Item> 
                            <Item
                                title="Медико-эстетический центр Комильфо г. Липецка"
                            >
                                <div>г.&nbsp;Липецк, ул.&nbsp;Гагарина, 45а (5&nbsp;этаж)</div>
                                <div>8 (4742) 22-03-02<br />8 (4742) 90-09-09</div>
                                <div>8 (960) 152-14-22</div>
                            </Item> 
                            <Item
                                title="Медико-хирургическая клиника Андромеда"
                            >
                                <div>г.&nbsp;Липецк, ул.&nbsp;Кузнечная, д.&nbsp;10&nbsp;а</div>
                                <div>8 (4742) 51-59-11</div>
                                <div>8 (960) 152-14-22</div>
                            </Item>   
                        </div>
                    </div>
                </div>
                <div id="map"></div>
            </div>
        );
    }
}