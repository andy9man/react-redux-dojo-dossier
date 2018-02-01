import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ADD_TAB } from '../state/actions';

class AddTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    render() {
        console.log(this.props.tabs);
        return (
            <div className="row">
                <div style={ {float: 'right'} } className="medium-6 md-text-field with-floating-label columns">
                    <div className="row">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            this.props.addNewTab(this.state.input);
                            this.setState({ input: '' });
                        }}
                        >
                        <div className="small-8 columns">
                            <input id="addTabInput" type="text" onInput={(e) => this.setState( {input: e.target.value} )} required/>
                            <label htmlFor="addTabInput" value={this.state.input}>Tab Title</label>
                        </div>

                        <div className="small-4 columns">
                            <button className="expand">Add Tab</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        tabs: state.tabs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewTab(newTab) {
            dispatch( {type: ADD_TAB, payload: newTab} )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTab);