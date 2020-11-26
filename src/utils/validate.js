import { message } from 'shared/constant';

export const commonValidation = (expression, values, errors) => {
    switch(expression) {
    case 'email':
        if (!values.email) {
            errors.email = message.EMPTY_EMAIL;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = message.INVALID_EMAIL;
        }
        break;
    case 'phone':
        if (values.phone && values.phone.length < 10) {
            errors.phone = message.PHONE_LENGTH_REQUIRED;
        }

        if (values.phone && Number.isNaN(Number(values.phone))) {
            errors.phone = message.VALID_PHONE;
        }
        break;
    default:
        // code block
    }
}

export const loginValidate = values => {
    const errors = {};
    // commonValidation('email', values, errors);

    if (!values.password) {
        errors.password = message.EMPTY_PASSWORD;
    }
    return errors;
}

export const forGotValidate = values => {
    const errors = {};
    commonValidation('email', values, errors);
    return errors;
}

export const resetValidate = values => {
    const errors = {};
    if (!values.password) {
        errors.password = message.EMPTY_PASSWORD;
    } else if(values.password && values.password.length < 8) {
        errors.password = message.PASSWORD_LENGTH;
    }

    if (!values.confPassword ) {
        errors.confPassword = message.EMPTY_CONFIRM_PASSWORD ;
    } else if (values.confPassword !== values.password) {
        errors.confPassword = message.PASSWORD_NOT_MATCH ;
    }
    return errors;
}

export const clientInfoValidation = values => {
    const errors = {};
    const letter = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (!values.name) {
        errors.name = message.NAME_REQUIRED;
    } else if(values.name && !(values.name.match(letter))) {
        errors.name = message.ONLY_CHARECTERS;
    }

    commonValidation('email', values, errors);

    commonValidation('phone', values, errors);

    if (!values.leastFTime) {
        errors.leastFTime = message.EMPTY_LEAST;
    }
    return errors;
}