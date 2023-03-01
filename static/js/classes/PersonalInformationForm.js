export default class PersonalInformationForm {
    constructor() {
        this.__form = document.querySelector('#form0');
        this.__helperTexts = document.querySelectorAll('#form0 .form0-helperText');
    }

    __isFieldFulfilled(value) {
        return value.length > 0;

    }

    __setHelperText(index,textContent) {
        this.__helperTexts[index].classList.add('active');
        this.__helperTexts[index].textContent = textContent;
    }
    
    __removeHelperText(index) {
        this.__helperTexts[index].classList.remove('active');
    }

    __validateName(name, nameInput) {
        const nameIsValid = this.__isFieldFulfilled(name);
        if(nameIsValid) {
            this.__removeHelperText(0);
            nameInput.classList.remove('invalid');
            return true;
        };
        nameInput.classList.add('invalid');
        this.__setHelperText(0, 'This field is required.');
    }

    __validateEmail(email, emailInput) {
        const emailFormatIsValid = email.search(/^([a-z]|\d){3,}@[a-z]{4,}\.com/, email) !== -1;
        const emailIsValid =  this.__isFieldFulfilled(email) && emailFormatIsValid;
        if(emailIsValid) {
            this.__removeHelperText(1);
            emailInput.classList.remove('invalid');
            return true;
        };
        emailInput.classList.add('invalid');
        this.__setHelperText(1, 'This field is required.');
    }

    __validatePhone(phone, phoneInput) {
        const phoneIsValid = this.__isFieldFulfilled(phone);
        if(phoneIsValid) {
            this.__removeHelperText(2);
            phoneInput.classList.remove('invalid');
            return true;
        };
        phoneInput.classList.add('invalid');
        this.__setHelperText(2, 'This field is required.');
    }

    validateForm() {
        const { name, email, phone } = this.__form.elements;
        const nameIsValid = this.__validateName(name.value, name); 
        const emailIsValid = this.__validateEmail(email.value, email); 
        const phoneIsValid = this.__validatePhone(phone.value, phone);
        return nameIsValid && emailIsValid && phoneIsValid;
    }

}