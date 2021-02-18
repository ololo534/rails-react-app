import React from 'react'
import PropTypes from "prop-types";
import _ from 'lodash'


const ErrorMessage = props => {
    const data = _.get(props.errorMessage, "response.data", null);
    const message = _.get(props.errorMessage, "message", null);
    if (data) {
        const keys = Object.keys(data);
        const values = Object.values(data);
        console.log(keys);
        console.log(values);
        return values.map(value => {
            return (
                <div
                    key={new Date()}
                    className="alert alert-danger"
                    role="alert"
                >
                    {value}
                </div>
            );
        });
    } else {
        return (
            <div className="alert alert-danger" role="alert">
                <p className="mb-0">{message ? message : 'There was an error.'}</p>
            </div>
        );
    }
};

export default ErrorMessage;

ErrorMessage.propTypes = {
    errorMessage: PropTypes.object.isRequired
};
