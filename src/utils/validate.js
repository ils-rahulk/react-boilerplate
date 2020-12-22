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
export const raterFormValidation = values => {
    const errors = {};
    if (!values.accessToken) {
        errors.accessToken = message.EMPTY_ACCESS_TOKEN;
    }
    return errors;
}