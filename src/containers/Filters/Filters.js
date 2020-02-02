import React, {Component} from 'react';
import {enums} from "../../utils/enums";
import lodash from 'lodash'
import Dropdown from "../../components/Dropdown/Dropdown";

class Filters extends Component {

    state = {
        locationFilters: {
            heading: 'Location',
            filters: [
                {name: 'West', value: false},
                {name: 'Midwest', value: false},
                {name: 'Southeast', value: false},
                {name: 'Northeast', value: false},
                {name: 'Southwest', value: false}
            ]
        },
        msrpFilters: {
            heading: 'MSRP Percent Off',
            filters: [
                {name: '0-20%', value: false},
                {name: '20-50%', value: false},
                {name: '50-80%', value: false}
            ]
        },
        conditionFilters: {
            heading: 'Condition',
            filters: [
                {name: 'New', value: false},
                {name: 'Like New', value: false},
                {name: 'Uninspected Returns', value: false},
                {name: 'Used', value: false},
                {name: 'Salvage', value: false},
                {name: 'Mixed', value: false}
            ]
        }
    };

    filterHandler = (value, type, index) => {
        const checkBoxToggle = (index, filterArray) => {
            filterArray.map((item, i) => {
                if (i === index) {
                    item.value = !item.value;
                }
            });
        };
        let {locationFilters, msrpFilters, conditionFilters} = lodash.cloneDeep(this.state);
        switch (type) {
            case enums.LOCATION:
                checkBoxToggle(index, locationFilters.filters);
                break;
            case enums.MSRP:
                checkBoxToggle(index, msrpFilters.filters);
                break;
            case enums.CONDITION:
                checkBoxToggle(index, conditionFilters.filters);
                break;
        }
        this.setState((state) => {
            return {
                ...state,
                locationFilters,
                msrpFilters,
                conditionFilters
            }
        });
    };

    render() {
        let {state: {locationFilters, msrpFilters, conditionFilters}, filterHandler} = this;
        const minMaxData = [
            {name: '$ Min', value: 'LOWEST_PRICE'},
            {name: '$ Max', value: 'HIGHEST_PRICE'}
        ];
        return <div className={'filters-wrapper'}>
            <div className="header py-1">
                <div className={'content-center'}>
                    <span className={'text-0A1F44 f-20 fw-600'}>
                        Filters
                    </span>
                    <span className={'text-00B571 text-uppercase ml-auto fw-600 f-12'}>
                        Clear
                    </span>
                </div>
            </div>
            <div className={'body pt-4'}>
                <div className="d-flex flex-wrap mb-4">
                    <div className={'fw-600 f-12 text-0A1F44 w-100 text-uppercase mb-2'}>Price</div>
                    <Dropdown wrapperClass={'min-max-dropdown with-border'}
                              selectClass={'py-1 content-center'}
                              optionArray={minMaxData}/>
                    <Dropdown wrapperClass={'min-max-dropdown with-border ml-3'}
                              selectClass={'py-1 content-center'}
                              optionArray={minMaxData}/>
                </div>
                <CheckBoxFilters heading={locationFilters.heading}
                                 filters={locationFilters.filters}
                                 handler={(e, index) => {
                                     filterHandler(e, enums.LOCATION, index)
                                 }}
                                 classes={'mb-4'}/>
                <CheckBoxFilters heading={msrpFilters.heading}
                                 filters={msrpFilters.filters}
                                 handler={(e, index) => {
                                     filterHandler(e, enums.MSRP, index)
                                 }}
                                 classes={'mb-4'}/>
                <CheckBoxFilters heading={conditionFilters.heading}
                                 filters={conditionFilters.filters}
                                 handler={(e, index) => {
                                     filterHandler(e, enums.CONDITION, index)
                                 }}
                                 classes={'mb-4'}/>
            </div>
        </div>
    }
}

export default Filters;


const CheckBoxFilters = ({heading, filters, classes, handler}) => {
    return (
        <div className={`checkbox-filters ${classes && classes}`}>
            <div className={'heading mb-2 py-1'}>{heading}</div>
            {
                filters && filters.map((item, index) => {
                    return <div className={'filters content-center mb-2'}
                                onClick={handler.bind(this, item.value, index)}>
                        <div className={'box'}>
                            {
                                item.value ? <i className="fas fa-check-square checked"/> :
                                    <i className="far fa-square unchecked"/>
                            }
                        </div>
                        <div className={`${item.value ? 'checked' : 'unchecked'} ml-3 fw-600`}>{item.name}</div>
                    </div>
                })
            }
        </div>
    )
};
