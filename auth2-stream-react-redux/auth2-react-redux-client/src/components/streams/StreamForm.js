import React from 'react';
import {Field, reduxForm} from "redux-form";
import history from "../../history";


class StreamForm extends React.Component {
    renderErrors({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderErrors(meta)}
            </div>
        );
    }

    onSubmit=(formValues)=> {
        this.props.onSubmit(formValues);
    }
    onCancel = ()=>{
        history.push('/');
    }

    render() {
        console.log(this.props);
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
                <button className="ui button primary" onClick={this.onCancel}>Cancel</button>
            </form>
        );
    }


}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'You must enter Title.'
    }
    if (!formValues.description) {
        errors.description = 'You must enter Description.'
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);


