import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import mas_reg from './mas_reg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Map_spec } from './Map_spec';

export const Specialization = ({ formData, setForm, navigation, specializations, toggleSpecialization }) => {

   
    const { firstName, lastName, nickName } = formData;
   
    const [isChecked,setIsChecked] = useState(false);
    console.log(isChecked);
      
        return (
             <Container maxWidth="lg"  style={{ margin:'auto' }}>
             <h1 className="main_h1">Услуги и специальность {isChecked ? "True":"False"}</h1>
             <p className="top_p">Выберите одну или несколько специальностей</p>
             <div className="wraper">
             {Map_spec.map((checkbox, key) => {
               
               return (
                <>
                <input type="checkbox" class="custom-checkbox" 
                  id={checkbox.label} 
                  name={checkbox.label}
                  checked={specializations.includes(checkbox.key)}
                  onChange={() => toggleSpecialization(checkbox.key)}
                  
                  key={checkbox.label}
                />
                <label
                htmlFor={checkbox.label}><span style={{textAlign:'left', width:'50%'}}>{checkbox.label}</span><div className="lined"></div></label>
                </>
         
             )})}
            </div>
            <button 
             className="dale_2"
             style={{ marginTop:'1rem' }}
             onClick={() => navigation.next()}>Далее</button>
            </Container>

          )

}
