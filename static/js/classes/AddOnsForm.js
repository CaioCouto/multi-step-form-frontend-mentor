export default class AddOnsForm {
    constructor() {
        this.__selectedSections = [];
        this.__pricing = [ 1, 2, 2 ];
        this.chosenAddOns = [];
        this.__form = document.querySelector('#form2');
        this.__formSections = document.querySelectorAll('.form2-section');
        this.__formHelperText = document.querySelector('.form2-helperText');
        
        this.setPricing(true);
    }

    setPricing(monthly) {
        this.__form.querySelectorAll('.form2-pricing').forEach((elem, index) => {
            let value, plan;
            if(monthly) {
                value = this.__pricing[index]; 
                plan = `mo`
            }
            else {
                value = this.__pricing[index]*10; 
                plan = `yr`
            }
            elem.textContent = `+$${value}/${plan}`;
        })
    }
    
    selectSection(index, monthly) {
        const selectedSectionIndex = this.__selectedSections.indexOf(index);
        this.__formSections.forEach((section, i) => {
            if (index === i) {
                const label = section.querySelector('.form-label').textContent;
                if (selectedSectionIndex === -1) {
                    section.classList.add('selected');
                    section.querySelector('input').checked = true;
                    this.__selectedSections.splice(index, 1, index);
                    this.chosenAddOns.splice(index, 1, { 
                        label: label, 
                        price: monthly ? this.__pricing[index] : this.__pricing[index]*10 
                    });
                }
                else {
                    this.chosenAddOns.splice(index, 1, null);
                    this.__selectedSections.splice(index, 1, null);
                    section.classList.remove('selected');
                    section.querySelector('input').checked = false;
                }
            }
        });
    }
}