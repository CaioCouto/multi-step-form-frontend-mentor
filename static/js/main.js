import PlanForm from "./classes/PlanForm.js";
import AddOnsForm from "./classes/AddOnsForm.js";
import FormControl from "./classes/FormControl.js";
import CheckoutForm from "./classes/CheckoutForm.js";
import PersonalInformationForm from "./classes/PersonalInformationForm.js";


const planForm = new PlanForm();
const addOnsForm = new AddOnsForm();
const formControl = new FormControl();
const checkoutForm = new CheckoutForm();
const personalInformationForm = new PersonalInformationForm();

function validateForms() {
    switch(formControl.counter) {
        case 0: return personalInformationForm.validateForm();
        case 1: return planForm.validateForm();
        default: return true;
    }
}

function nextForm(e) {
    e.stopImmediatePropagation();
    if (validateForms()) {
        formControl.goToNext();
        if (formControl.counter === 3) {
            checkoutForm.generateForm(planForm.chosenPlan, addOnsForm.chosenAddOns, formControl.monthly);
            document.querySelector('.form3-planChange').addEventListener('click', () => { formControl.changePlan() });
        }
    }
}

function previousForm(e) {
    e.stopImmediatePropagation();
    formControl.goBack();
}

function changePlan() {
    formControl.changeSwitch();
    planForm.setPricing(formControl.monthly);
    addOnsForm.setPricing(formControl.monthly);
}

function selectPlanFormSession(e, index) {
    e.stopImmediatePropagation();
    planForm.selectSection(index, formControl.monthly);
}

function selectAddOnFormSession(e, index) {
    e.stopImmediatePropagation();
    addOnsForm.selectSection(index, formControl.monthly);
}


const form1Sections = document.querySelectorAll('.form1-section');
form1Sections.forEach((elem,index) => {
    elem.addEventListener('click', (e) => selectPlanFormSession(e, index))
});

const form1Switch = document.querySelector('.form-switch');
form1Switch.addEventListener('click', changePlan);

const form2Sections = document.querySelectorAll('.form2-section');
form2Sections.forEach((elem,index) => {
    elem.addEventListener('click', (e) => selectAddOnFormSession(e, index))
});

const previousBtns = document.querySelectorAll('.form-button-previous');
const nextBtns = document.querySelectorAll('.form-button-next');
for (let i = 0; i < nextBtns.length; i++) {
    nextBtns[i].addEventListener('click', nextForm)
    previousBtns[i].addEventListener('click', previousForm)
}

const confirmBtn = document.querySelector('.form-button-confirm');
confirmBtn.addEventListener('click', () => { formControl.endCicle() });