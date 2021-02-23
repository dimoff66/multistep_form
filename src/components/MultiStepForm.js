import React, { useState } from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import  { Specialization } from './stepForm/Specialization';
import { Subspecialty } from './stepForm/Subspecialty';
import { Contact } from './stepForm/Contact';
import { Submit } from './stepForm/Submit';
import { Review } from './stepForm/Review';

const defaultData = {
    firstName: '',
    lastName: '',
    nickName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
};

const steps = [
    {id: 'specialization'},
    {id: 'subspecialty'},
    {id: 'contact'},
    {id: 'review'},
    {id: 'submit'},
]

export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep:0,
    });

    const [specializations, changeSpecialization] = useState([])
    const toggleSpecialization = spec => {
        if (specializations.includes(spec)) {
            changeSpecialization(specializations.filter(v => v !== spec))
        } else {
            changeSpecialization([...specializations, spec])
        }
    } 

    const props = {formData, setForm, navigation}
    const specProps = { specializations, toggleSpecialization }

        switch(step.id) {
            case 'specialization':
                return <Specialization { ...props} {...specProps} />;
            case 'subspecialty':
                return <Subspecialty { ...props} {...specProps} />;
            case 'contact':
                return <Contact { ...props} />;
            case 'review':
                return <Review { ...props} />;
            case 'submit':
                return <Submit { ...props} />;
            

        }

    console.log(step);

    return (
        <div>
           <h1>Multi step Form</h1> 
        </div>
    )
}
