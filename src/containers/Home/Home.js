import React, {Component} from 'react';
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Footer/Footer";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "../../components/Card/Card";
import data from './card-data';
import Button from "../../components/Button/Button";
import Filters from "../Filters/Filters";

class Home extends Component {
    render() {
        const tabs = [
            {title: 'Everything', eventKey: 'everything'},
            {title: 'Live Auction', eventKey: 'live-auction'},
            {title: 'Eligible for auction', eventKey: 'eligible-for-auction'},
            {title: 'Buy now only', eventKey: 'buy-now-only'}
        ];
        return (
            <React.Fragment>
                <NavigationBar/>
                <div className={"col-11 mx-auto mt-5"}>
                    <div className="row">
                        <div className="col-3 pl-0 pr-5">
                            <Filters/>
                        </div>
                        <div className="col-9">
                            <div className="row align-items-center">
                               <div className="pr-3 content-center w-100">
                                   <div className={'custom-tabs'}>
                                       <Tabs defaultActiveKey="everything">
                                           {
                                               tabs.map(tab => {
                                                   return <Tab key={tab.eventKey} eventKey={tab.eventKey}
                                                               title={tab.title}/>
                                               })
                                           }
                                       </Tabs>
                                   </div>
                                   <div className={'ml-auto'}>
                                       <div className={'f-14 fw-600'}>Sort By:</div>
                                   </div>
                               </div>
                            </div>
                            <div className="row mt-4 pt-2 align-content-between ">
                                {
                                    data && data.map(item => {
                                        return <div key={item.title} className="col-4 pl-0">
                                            <Card {...item}/>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="row load-more-btn">
                                <Button classes={'w-100 white py-3 mb-3'}
                                            text={'Load more'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Home;
