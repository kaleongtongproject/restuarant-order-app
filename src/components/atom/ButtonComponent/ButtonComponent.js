import React from 'react'; 
import injectSheet from 'react-jss';
import { LIGHT_BLUE, LIGHT_GREEN } from '../../../constants/color';
const styles = {
    lightBlue: {
        background: LIGHT_BLUE,
    },
    lightGreen: {
        background: LIGHT_GREEN,
    }
};
//default button component
const ButtonComponent = (props) => (
    <button className={props.className} 
        onClick={props.onClickHandler}> {props.title} </button>
)

export default injectSheet(styles)(ButtonComponent);