import React from 'react';
import { connect } from 'react-redux';
import AddItem from './AddItem.js';

const TabList = props => {
    console.log("Current Tab: " + props.currentTab);
    console.log(props);
    const tabItems = props.tabs[props.currentTab].items;
    return (
        <div style={ {width: '100%'} } className="bg-off-white padding-vert-medium padding-horiz-medium">
            <ul className="disc" style={ {marginBottom: "35px"} }>
                {
                    tabItems.map( (item, index) => {
                        return ( <li key={index}>{item}</li> )
                    })
                }
            </ul>

            <AddItem />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tabs: state.tabs,
        currentTab: state.currentTab
    }
}

export default connect(mapStateToProps)(TabList);