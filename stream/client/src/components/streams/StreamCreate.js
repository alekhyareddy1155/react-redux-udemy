import React from 'react';
import {Field, formValues, reduxForm } from 'redux-form';

class StreamCreate extends React.Component{

    renderInput=( {input, label, meta} )=>{
        // console.log(meta);
        const className=`field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
           <label>{label}</label>
        <input { ...input} autoComplete="off" />
        {this.renderError(meta)}
        </div>
        )
    }

    renderError=({ error, touched})=>{
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }
    
    onSubmit(formValues){
        console.log(formValues);
    }
    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
                <Field name="title" component={this.renderInput} label="enter title" />
                <Field name="description" component={this.renderInput} label="enter description" />
                <button className="ui button primary">
                    Submit
                </button>
            </form>
        
        )
    }
}

const validate=(formValues)=>{
    const erros={};
    if(!formValues.title){
        erros.title='you must enter a title';
    }

    if(!formValues.description){
        erros.description='you must enter a description';
    }
    return erros;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);