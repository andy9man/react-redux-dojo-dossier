import React from 'react';
import { connect } from 'react-redux';
import { TAB_SELECTED } from '../state/actions';

const UserTabs = props => {

    const {tabs, currentTab} = props;

    return (
        <div style={ {width: '100%'} } className="bg-black padding-medium">
            <ul className="tabs ghost">
                {
                    tabs.length > 0 ? tabs.map( (tab, index) => {
                        //console.log(tab);
                        return (
                            <li
                                key={index}
                                className={currentTab === index?
                                    "tab-title active" : "tab-title"}
                            >
                                <button onClick={() => props.selectedTab(index)} >{tab.title}</button>
                            </li>
                        )
                    }) : <li className="tab-title">None</li>
                }
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentTab: state.currentTab,
        tabs: state.tabs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectedTab(tabId) {
            dispatch( {type: TAB_SELECTED, payload: tabId} )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTabs);