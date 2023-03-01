export default class CheckoutForm {
    constructor() {
        this.__form = document.querySelector('#form3');
        [ this.__planSection, this.__addOnSection, this.__valueSection ] = this.__form.querySelectorAll('.form3-section');
    }

    __setPlanData(plan, monthly) {
        const div = document.createElement('div');
        const label = document.createElement('p');
        const change = document.createElement('p');
        const value = document.createElement('p');

        label.classList.add('form3-planLabel');
        label.textContent = `${plan.label} (${monthly ? 'Monthly' : 'Yearly'})`;

        change.classList.add('form3-planChange');
        change.textContent = 'Change';

        value.classList.add('form3-planValue');
        value.textContent = `$${plan.price}/${monthly ? 'mo' : 'yr'}`;
        
        div.replaceChildren(label,change);
        this.__planSection.replaceChildren(div,value)
        return plan.price;
    }
    
    __setAddOnsData(addOns, monthly) {
        let totalValue = 0;
        const children = [];
        addOns.filter(addOn => addOn).forEach(addOn => {
            totalValue += addOn.price
            const div = document.createElement('div');
            const label = document.createElement('p');
            const value = document.createElement('p');
            
            label.classList.add('form3-addOnLabel');
            label.textContent = addOn.label;

            value.classList.add('form3-addOnValue');
            value.textContent = `+$${addOn.price}/${monthly ? 'mo' : 'yr'}`;
            
            div.appendChild(label);
            div.appendChild(value);
            children.push(div);
        });
        this.__addOnSection.replaceChildren(...children);
        return totalValue;
    }
    
    __setTotalValue(price, monthly) {
        const paymentPeriod = monthly ? 'month' : 'year';
        const label = document.createElement('p');
        const value = document.createElement('p');

        label.classList.add('form3-totalLabel');
        label.textContent = `Total (per ${paymentPeriod})`;
        
        value.classList.add('form3-totalValue');
        value.textContent = `+$${price}/${paymentPeriod}`;
        
        this.__valueSection.replaceChildren(label, value);
    }

    generateForm(plan, addOns, monthly) {
        const planValue = this.__setPlanData(plan, monthly);
        const addOnsValue = this.__setAddOnsData(addOns, monthly);
        const total = planValue+addOnsValue;
        this.__setTotalValue(total, monthly);
    }
}