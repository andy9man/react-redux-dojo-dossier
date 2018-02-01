import {TAB_SELECTED, ADD_ITEM, ADD_TAB, ITEM_INPUT} from './actions.js';

class Item {
    constructor(title) {
        this.id = Date.now() + title;
        this.title = title;
        this.items = [];
    }
}

const initialState = {
    currentTab: undefined,
    newItem: '',
    //tabs: []
    tabs: [
        new Item('Rachel'),
        new Item('Monica'),
        new Item('Phoebe'),
        new Item('Joey'),
        new Item('Chandler'),
        new Item('Ross')
    ]
}

export const reducer = ( state={...initialState, currentTab: 0}, action ) => {
    switch( action.type ) {
        case TAB_SELECTED:
            return { ...state, currentTab: action.payload};

        case ADD_ITEM:
            const newArray = state.tabs.slice();
            newArray[state.currentTab].items.push(state.newItem);
            return { ...state, newItem: '', tabs: newArray};

        case ADD_TAB:
            let newTabsArray = state.tabs.slice();
            newTabsArray.push( new Item(action.payload));
            return {...state, tabs: newTabsArray}

        case ITEM_INPUT:
            return {...state, newItem: action.payload}

        default:
            return state;
    }
}