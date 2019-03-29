import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeSeedAndFetch } from './redux/actions';
import * as actions from './redux/actions';

class SeedPicker extends Component {
    handleChangeSeed = (e) => {
        this.props.changeSeedAndFetch(e.currentTarget.value);
        console.log("CURRENT VALUE ", e.currentTarget.value);
    }

    render() {
        return (
            <div className="field">
                <select
                    className="ui dropdown fluid"
                    onChange={this.handleChangeSeed}
                    value={this.props.seed}
                >{ console.log("SSSSSSSSEDDD ",this.props.seed)}
                    <option value="default-seed">Default seed</option>
                    <option value="one-seed">One seed</option>
                    <option value="another-seed">Another seed</option>
                </select>
            </div>
        )
    }
}


// const mapStateToProps = (state) => {
//     return {
//         seed: state.seedDataReducer
//     }
// }

// const mapStateToProps = (state) => { // to dziala
//     return state
//     }



const mapStateToProps = (state) => (() => {
    console.log("STATE ", state);
    console.log("AAAAAAAAAAA ", state.seedDataReducer.seed);
    //  return {seed: state.seedDataReducer.changeSeedAndFetch}})
    return {state}})

// const mapStateToProps = (state) => {
//     return {
//       ...state.seedDataReducer }
//   };

const mapDispatchToProps = { changeSeedAndFetch };


// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeSeedAndFetch: () => dispatch(actions.changeSeedAndFetch())
//     }
//   };




export const SeedPickerContainer = connect(mapStateToProps, mapDispatchToProps)(SeedPicker);