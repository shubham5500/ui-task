import React from "react";

const Footer = () => {
    const list1 = {
        heading: 'Company',
        links: [{name: 'About', link: ''}, {name: 'FAQs', link: ''}, {name: 'Sign Up', link: ''}]
    };
    const list2 = {heading: 'Legal', links: [{name: 'Terms of Use', link: ''}, {name: 'Privacy Policy', link: ''}]};
    const list3 = {
        heading: 'Contact', links: [{name: 'Contact: contact@anteelo.com', link: ''},
            {name: 'Email: support@anteelo.com', link: ''},
            {name: 'Join Our Facebook Group: Anteelodesign', link: ''}]
    };
    return (
        <React.Fragment>
            <footer className={'footer-wrapper'}>
                <div className="col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-md-2">
                            <div>
                                <img src={require('../../assets/img/Group 3.svg')}/>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="row justify-content-around">
                                <FootList heading={list1.heading} links={list1.links}/>
                                <FootList heading={list2.heading} links={list2.links}/>
                                <FootList heading={list3.heading} links={list3.links}/>
                                <FootList heading={'Follow Us'}>
                                    <li className={'links'}>
                                   <span className={'mr-3'}>
                                       <img alt={''} width={18} height={18} src={require('../../assets/img/Facebook.png')}/>
                                   </span>
                                        <span className={'mr-3'}>
                                       <img alt={''} width={18} height={18} src={require('../../assets/img/Instagram.png')}/>
                                   </span>
                                        <span className={'mr-3'}>
                                       <img alt={''} width={18} height={18} src={require('../../assets/img/Twitter.png')}/>
                                   </span>
                                    </li>
                                </FootList>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={'text-center f-10 w-100 py-3'}>
                © 2018 Invento Lots
            </div>
        </React.Fragment>
    )
};

export default Footer;


const FootList = ({heading, links, children}) => {
    return (
        <ul className={'footer-list'}>
            <li className={'heading'}>{heading}</li>
            {
                links && links.map(item => {
                    return <li key={item.name} className={'links'}>{item.name}</li>
                })
            }
            {children}
        </ul>
    )
};
