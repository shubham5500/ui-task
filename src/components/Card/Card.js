import React from "react";
import Button from "../Button/Button";

const Card = ({
                  imgUrl,
                  status,
                  views,
                  type,
                  title,
                  currentBid,
                  msrp,
                  units,
                  daysLeft,
                  wrapperClass
              }) => {
    let typeClass = '';
    switch (type) {
        case "Live Auction":
            typeClass = 'green pl-4';
            break;
        case "Eligible For Auction":
            typeClass = 'cream';
            break;
        case "Newly Listed":
            typeClass = 'green';
            break;
    }
    return (
        <div className={`custom-card mb-3 ${wrapperClass && wrapperClass}`}>
            <div className={'header'}>
                <div>
                    <img width={'100%'}
                         height={'100%'}
                         src={require(`../../assets/img/${imgUrl}`)}/>
                </div>
                <div className={'status-views px-3'}>
                    <div className={'status all-center'}>{status}</div>
                    {
                        views && <div className={'views ml-auto all-center'}>
                            <i className={'fas fa-eye mr-2 f-12'}/><span>{views}</span>
                        </div>
                    }
                </div>
            </div>
            <div className={'body px-3'}>
                <div className={'content-center w-100 mt-3'}>
                    <div className={`type content-center ${typeClass}`}>
                        {type === 'Live Auction' && <span className={'red-dot'}/>}
                        {type}
                    </div>
                    {daysLeft && <div className="days-left ml-auto">{daysLeft} days left</div>}
                </div>
                <div className={'py-3 f-14 fw-600 title'}>
                    {title}
                </div>
                <div className={'py-3 d-flex justify-space-between w-100 flex-wrap justify-content-between'}>
                    <div className={'count-and-price'}>
                        <div className={'value'}>{currentBid}</div>
                        <div className={'key'}>Current Bid</div>
                    </div>
                    <div className={'count-and-price'}>
                        <div className={'value'}>{msrp}</div>
                        <div className={'key'}>MSRP</div>
                    </div>
                    <div className={'count-and-price'}>
                        <div className={'value'}>{units}</div>
                        <div className={'key'}>Units</div>
                    </div>
                </div>
            </div>
            <div className={'footer w-100'}>
                <div className="content-center w-100 py-3 px-3 buttons-wrapper">
                    <Button text={'View Auction'}
                            classes={'green px-3'}/>
                    <Button text={'Watch'}
                            classes={'white ml-3 watch-btn'}>
                        <i className="far fa-star yellow-star ml-1"/>
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Card;
