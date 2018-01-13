import React, { PureComponent } from 'react';

const Ico = ({name, children}) => (
    <li className="facebook" data-toggle="tooltip" data-placement="bottom" title="" data-original-title={name}>
        <a href={children} target="_blank" >
            <i className={`fa fa-${name}`}></i>
        </a>
    </li>
);

export default class Header extends PureComponent {
    render() {

        return (
            <div className="header_section">
		        <div className="container">
                    <div className="row ">
                        <div className="col-md-6 col-sm-12 wl_rtl">					
                            <div className="logo">						
                                <a 
                                    href="http://косметолог48.рф/" 
                                    title="Косметолог48.рф" 
                                    rel="home">
                                Косметолог48.рф
                                </a>
                                <p>Сайт Якушенко Сергея Сергеевича</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <ul className="head-contact-info">
                                <li data-original-title="" title=""><i className="fa fa-phone"></i><a href="tel:+79601521422">Звоните! +79601521422</a></li>				</ul>
                            <ul className="social">
                                <Ico name="vk">https://vk.com/doctorserg</Ico>
                                <Ico name="facebook">https://www.facebook.com/profile.php?id=100009585617653</Ico>
                                <Ico name="instagram">https://www.instagram.com/doctor_yakushenko</Ico>
	                		</ul>	
                        </div>
                    </div>
                </div>	
            </div>
        );
    }
}