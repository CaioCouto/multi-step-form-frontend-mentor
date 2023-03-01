export default class PlanForm {
    constructor() {
        this.__selectedSection = null;
        this.__pricing = [ 9, 12, 15 ];
        this.chosenPlan = {label: '', price: 0 };
        this.__form = document.querySelector('#form1');
        this.__formSections = document.querySelectorAll('.form1-section');
        this.__formHelperText = document.querySelector('.form1-helperText');
        this.__formDiscountText = document.querySelectorAll('.form1-discount');
        
        this.setPricing(true);
    }

    setPricing(monthly) {
        this.__form.querySelectorAll('.form1-pricing').forEach((elem, index) => {
            const discountTextClassList = this.__formDiscountText[index].classList;
            let value, plan;
            if(monthly) {
                value = this.__pricing[index]; 
                plan = `mo`
                discountTextClassList.remove('active');
            }
            else {
                value = this.__pricing[index]*10; 
                plan = `yr`
                discountTextClassList.add('active');
            }
            elem.textContent = `$${value}/${plan}`;
        })
    }
    
    selectSection(index, monthly) {
        this.__formSections.forEach((section, i) => {
            this.__selectedSection = i;
            section.classList.remove('selected');
            if(index === i) {
                section.classList.add('selected')
                this.chosenPlan.label = section.querySelector('.form-label').textContent;
                this.chosenPlan.price = monthly ? this.__pricing[index] : this.__pricing[index]*10;
            };
        });
    }

    validateForm() {
        const aSectionIsSelected = typeof this.__selectedSection === 'number';
        if (aSectionIsSelected) {
            this.__formHelperText.classList.remove('active');
            return true;
        }
        this.__formHelperText.classList.add('active');
        return false;
    }
}