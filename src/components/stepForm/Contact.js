import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Contact = ({ formData, setForm, navigation }) => {
    const { phone, email } = formData;
    return (
        <Container maxWidth="xs">
            <h3>Контактная информация</h3>

            <TextField 
            label="Телефон" 
            name="phone" 
            value={phone}
            onChange={setForm}
            margin="normal" 
            variant="outlined" 
            autoComplete="off" 
            fullWidth />

<TextField 
            label="E-mail" 
            name="email" 
            value={email}
            onChange={setForm}
            margin="normal" 
            variant="outlined" 
            autoComplete="off" 
            fullWidth />

                    <div style={{ marginTop: '1rem' }} >

                    <Button 
                    color="secondary" 
                    variant="contained" 
                    style={{ marginRight:'1rem' }}
                    onClick={ () => navigation.previous()}
                    >Вернуться</Button>

                    <Button 
                    color="primary" 
                    variant="contained"
                    onClick={() => navigation.next()}
                    >Дальше</Button>
                    </div>

        </Container>
    );
};