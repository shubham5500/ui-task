import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Input from "../Input/Input";
import Button from "../Button/Button";

const NavigationBar = () => {
    return (
        <Navbar expand="lg" sticky="top" bg={'white'} className={'py-3 custom-navbar'}>
            <div className="col-11 mx-auto">
                <div className="row align-items-center justify-content-between">
                    <Navbar.Brand>
                        <img src={require('../../assets/img/Group 4.svg')}/>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <div className={"col-5 px-0"}>
                        <Input type={'text'}
                               placeholder={'Search something'}
                               inputWrapperClass={'align-items-center'}
                               classes={'pl-5'}>
                            <div className={"input-group-prepend c-p"}>
                                <span className="fas fa-search text-8A94A6"/>
                            </div>
                        </Input>
                    </div>
                    <div>
                        <Button classes={'white'} text={'Sign In'}/>
                        <Button classes={'green ml-3'} text={'Sign Up'}/>
                    </div>
                </div>
            </div>
        </Navbar>
    )
};

export default NavigationBar;
