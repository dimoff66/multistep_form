import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import mas_reg from './mas_reg.css';



  

export const Subspecialty = ({ formData, setForm, navigation, specializations }) => {


    const { address, city, state, zip } = formData;
    return (
       <Container maxWidth="xs">
           <h3>Выбрано: </h3>
           <div>{specializations.join()}</div>
           <h3 className="main_h1">Услуги</h3>

           <TextField 
            label="Улица, дом" 
            name="address" 
            value={address}
            onChange={setForm}
            margin="normal" 
            variant="outlined" 
            autoComplete="off" 
            fullWidth />

             <TextField 
            label="Город" 
            name="city" 
            value={city}
            onChange={setForm}
            margin="normal" 
            variant="outlined" 
            autoComplete="off" 
            fullWidth />

             <TextField 
            label="Район" 
            name="state" 
            value={state}
            onChange={setForm}
            margin="normal" 
            variant="outlined" 
            autoComplete="off" 
            fullWidth />

            <TextField 
            label="Индекс"
            margin="normal" 
            variant="outlined" 
            autoComplete="off" 
            fullWidth />

        <div style={{ marginTop: '1rem' }} >

            

            <button 
            className="dale_2"
            style={{ marginTop:'1rem' }}
            onClick={() => navigation.next()}
            >Дальше</button>
            
            <button 
            className="serviceMaster__btn" 
            style={{ marginRight:'1rem' }}
            onClick={ () => navigation.previous()}
            >Вернутся</button>
        </div>
       </Container>
    );
};
