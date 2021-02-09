import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
    const { go } = navigation;
    const {
        firstName,
        lastName,
        nickName,
        address,
        city,
        state,
        zip,
        phone,
        email,
    } = formData;
    return (
       <Container maxWidth="sm">
           <h3>Обзор</h3>

           <RenderAccordion summary="Имя" go={ go }
           details={[
               {'Имя': firstName },
               {'Фамилия': lastName },
               {'Никнейм': nickName },
           ]} />

        <RenderAccordion summary="Адресс" go={ address }
           details={[
               {'Улица, дом': address },
               {'Город': city },
               {'Район': state },
               {'Индекс': zip },
           ]} />

        <RenderAccordion summary="Контактная информация" go={ go }
           details={[
               {'Телефон': phone },
               {'E-mail': email },
           ]} />

           <Button
           color="primary"
           variant="contained"
           style={{ marginTop: '1.5rem'}}
           onClick={() => go('submit')}
           >
               Подтвердить

           </Button>

       </Container>
    );
};

export const RenderAccordion = ({ summary, details, go }) => (
<Accordion>
    <AccordionSummary
    expandIcon={ <ExpandMoreIcon/> }
    >{summary}</AccordionSummary>
    <AccordionDetail>
        <div>
        {details.map((data, index) => {
            const objKey = Object.keys(data)[0];
            const objValue = data[Object.keys(data)[0]];

            return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
        }) }
        <IconButton
        color="primary"
        component="span"
        onClick={() => go(go)}
        ><EditIcon/></IconButton>
        </div>
    </AccordionDetail>
</Accordion>
)