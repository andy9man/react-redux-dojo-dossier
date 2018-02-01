import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './ui-toolkit/css/nm-cx/main.css';
import store from './state/store.js';
import AddTab from './components/AddTab.js';
import UserTabs from './components/UserTabs.js';
import TabList from './components/TabList';

const Root = () => {
    return (
        <div>
            <header className="margin-vert-xlarge padding-vert-large padding-horiz-xlarge">
                <h1>Dojo Dossier</h1>
            </header>
            <Provider store={store}>
                <div className="row">
                    <div className="small-6 medium-10 medium-centered large-centered columns">

                        <AddTab />
                        <UserTabs />
                        <TabList />

                    </div>
                </div>
            </Provider>
        </div>
    )
}
ReactDOM.render(<Root />, document.getElementById('root'));
