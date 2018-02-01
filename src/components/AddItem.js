import React from 'react';
import {connect} from 'react-redux';
import { ADD_ITEM, ITEM_INPUT } from '../state/actions';

const AddItem = props => {

    return (
        <div className="row">
            <div style={ {float: 'right'} } className="medium-12 md-text-field with-floating-label columns">
                <div className="row">
                    <form onSubmit={
                        (e) => {
                            e.preventDefault();
                            props.addNewItem();
                        }}
                    >
                        <div className="small-12 medium-10 columns">
                            <input
                                id="addItemInput"
                                type="text"
                                onInput={(e) => {
                                    e.preventDefault();
                                    props.newItemInput(e.target.value);
                                }}
                                value={props.newItem}
                                required
                            />
                            <label htmlFor="addItemInput">Add Item</label>
                        </div>

                        <div className="small-12 medium-2 columns">
                            <button className="expand">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        newItem: state.newItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewItem() {
            dispatch( {type: ADD_ITEM} )
        },
        newItemInput(newInput) {
            dispatch( {type: ITEM_INPUT, payload: newInput} )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);