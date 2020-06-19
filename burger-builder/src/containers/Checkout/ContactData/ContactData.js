import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    }
    getFormData = () => {
        const formData = [];
        for (let i in this.state.orderForm) {
            formData.push({
                key: i,
                config: this.state.orderForm[i]
            })
        }
        return formData;
    }
    inputChangeHandler = (event,key) => {
        let updatedOrderForm = {
            ...this.state.orderForm
        }
        let field = {...updatedOrderForm[key]}; 
        field.touched = true;
        field.value = event.target.value;
        if(field.validation.required){
            field.valid =  !!event.target.value.length;
        }
        updatedOrderForm[key] = field;
        let formIsValid = true;
        for(let key in updatedOrderForm){
            if(!updatedOrderForm[key].valid){
                formIsValid = false;
                break;
            }
        }
        this.setState({
            orderForm: updatedOrderForm,
            formIsValid: formIsValid
        })
    }


    render() {
        const formArr = (<form>
            {this.getFormData()
                .map(field => {
                    return (<Input
                        key={field.key}
                        value={field.config.value}
                        changed={(event)=>this.inputChangeHandler(event,field.key)}
                        invalid={!field.config.valid}
                        touched={field.config.touched}
                        elementConfig={field.config.elementConfig}
                    />)
                })}</form>)
        return (
            <div className={classes.ContactData}>
                {formArr}
                <Button disabled={!this.state.formIsValid} btnType="Success">Order</Button>
            </div>
        )
    }
}


export default ContactData;