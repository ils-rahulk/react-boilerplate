/* eslint-disable react/prop-types */

import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';

export const Validations = (props) => {
    const {
        touched,
        error,
        validationError,
        warning,
    } = props.props;

    return (
        <>
            <p>
                {touched && ((error && <span className="field_error">{error}</span>) || (warning && <span>{warning}</span>))}
            </p>
            {validationError && (
                <p>
                    {(validationError && <span className="field_error">{validationError}</span>)}
                </p>
            )}
        </>
    );
};

const renderField = (props) => {
    const {
        input,
        label,
        name,
        type,
        placeholder,
        disabled,
        validationError,
        meta: { touched, error, warning },
        maxLength,
        formClass,
        rows,
    } = props;

    return (
        <FormGroup className={ formClass + ' force-mb-10' } style={ { width: '100%' } }>
            {label && <Label className="force_mb-5" for={ name }>{label || ''}</Label>}
            <Input rows={ rows } { ...input } maxLength={ maxLength } disabled={ disabled || false } type={ type } className={ validationError || (touched && error) ? 'validation-error' : '' } placeholder={ placeholder || '' } />
            <Validations
                props={ {
                    touched,
                    error,
                    validationError,
                    warning,
                } }
            />
        </FormGroup>
    );
};

const renderCheckbox = (props) => {
    const {
        input,
        placeholder,
        validationError,
        checked,
        disabled,
        meta: { touched, error, warning },
    } = props;

    return (
        <FormGroup check>
            <Label check>
                <Input { ...input } disabled={ disabled || false } checked={ checked } type="checkbox" />
                {' '}
                {placeholder}
            </Label>
            <Validations
                props={ {
                    touched,
                    error,
                    validationError,
                    warning,
                } }
            />
        </FormGroup>
    );
};

const renderSelectField = ({
    input,
    label,
    selectLabel,
    optionValues,
    formClass,
    validationError,
    disabled,
    meta: { touched, error, warning },
}) => (
    <React.Fragment>
        <FormGroup className={ formClass + ' force-mb-10' }>
            {label && <Label>{label}</Label>}
            <Input { ...input } placeholder="choose" type="select" disabled={ disabled || false }>
                {selectLabel && (
                    <option value="" disabled>
                        {selectLabel}
                    </option>
                )}
                {optionValues &&
                optionValues.map((item, index) => (
                    <option key={ index } value={ item.value }>
                        {item.label}
                    </option>
                ))}
            </Input>
            <Validations
                props={ {
                    touched,
                    error,
                    validationError,
                    warning,
                } }
            />
        </FormGroup>
    </React.Fragment>
);

export {
    renderField,
    renderCheckbox,
    renderSelectField
};