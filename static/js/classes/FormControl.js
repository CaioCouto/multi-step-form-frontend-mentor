export default class FormControl {
    constructor() {
        this.counter = 0;   
        this.monthly = true;
        this.__activeSwitchDiv = 0;
        this.__bubbles = document.querySelectorAll('.sidebar-bubble');
        this.__forms = document.querySelectorAll('.form');
        this.__formSwitchDivs = document.querySelectorAll('.form-switch-button div');

        this.__addActiveClass();
        this.__initializeSwitch();
    }

    __initializeSwitch() {
        this.__formSwitchDivs[this.__activeSwitchDiv].classList.add('active');
    }

    __increaseCounter(){
        this.counter++;
    }
    
    __decreaseCounter(){
        this.counter--;
    }

    __addActiveClass() {
        this.__bubbles[this.counter].classList.add('active');
        this.__forms[this.counter].classList.add('active');
    }
    
    __removeActiveClass() {
        this.__forms[this.counter].classList.remove('active');
        this.__bubbles[this.counter].classList.remove('active');
    }

    changeSwitch() {
        this.monthly = !this.monthly;
        this.__formSwitchDivs[this.__activeSwitchDiv].classList.remove('active');
        this.__activeSwitchDiv = Number(!this.monthly);
        this.__formSwitchDivs[this.__activeSwitchDiv].classList.add('active');
    }

    goToNext() {
        this.__removeActiveClass();
        this.__increaseCounter();
        this.__addActiveClass();
    }
    
    goBack() {
        this.__removeActiveClass();
        this.__decreaseCounter();
        this.__addActiveClass();
    }

    changePlan() {
        this.__forms[this.counter].classList.remove('active');
        this.counter = 1;
        this.__forms[this.counter].classList.add('active');
    }

    endCicle() {
        this.__forms[this.counter].classList.remove('active');
        this.counter = 4;
        this.__forms[this.counter].classList.add('active');
    }
}