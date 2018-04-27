import React from 'react';
import { createAction } from "redux-actions";
import { formMerberType, formSubmitName, ONFORMUPDATEPROPS } from "./formType";

export const onFormUpdateProps = createAction(ONFORMUPDATEPROPS);

export const isFormMerber = element => formMerberType.some((type) => {
    const elementType = element.type;
    if (elementType === 'function') {
        return true;
    } else if (type === elementType) {
        return true;
    }
    return false;
})

export const isSubmitForm = (ele) => {
    if (ele.props) {
        return ele.props.type === formSubmitName;
    }
    return false
}

export const onFormSubmit = props => (dispatch, getState) => {
    console.log(props)
}

export const onFormChildrenSubscribe = (toprops, props = toprops) => dispatch => (
    React.Children.map(props.children, (child) => {
        if (isFormMerber(child)) {
            const formName = props.name;
            return React.cloneElement(child, { formName }) 
        } else if(isSubmitForm(child)) {
            return React.cloneElement(child, {
                onClick: () => dispatch(onFormSubmit(toprops))
            });
        } else if(React.isValidElement(child)) {
            return React.cloneElement(child, {
                child: dispatch(onFormChildrenSubscribe(toprops, child.props))
            })
        }
        return child;
    })
)

export const onFormInitial = props => (
    (dispatch) => {
        const formName = props.name;
        const dataSource = [];
        const children = dispatch(onFormChildrenSubscribe(props));
        dispatch(onFormUpdateProps({ formName, children }))
    }
)
