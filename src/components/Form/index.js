import React, { Component } from 'react';
import PropTypes from "prop-types";

class Form extends Component {
    componentWillMount() {
        this.props.onInitial();
    }

    render() {
        return (
            <div
                name={this.props.name}
                action={this.props.action}
                className={this.props.className}
                style={this.props.style}
            >
                {this.props.children}
            </div>
        );
    }
}

Form.defaultProps = {

}

Form.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.style),
}

export default Form;

