import React from 'react';
import { formMerberType } from "./formType";

export const isFormMerber = element => formMerberType.some((type) => {
    const elementType = element.type;
    if (elementType === 'function') {
        return true;        
    } else if (type === element.type) {
        return true;
    }
    return false;
})


export const onFormChildrenSubscribe = (toprops, props = toprops) => dispatch => (
    React.Children.map(props.children, (child) => {
        if (isFormMerber(child)) {
            const formName = props.name;
            return React.cloneElement(child, { formName }) 
        }
    })
)

export const onFormInitial = (props) => (dispatch) => {
    const formName = props.name;
    const dataSource = [];
    const children = dispatch(onFormChildrenSubscribe(props));
}
