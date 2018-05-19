import React from 'react'
import Input from 'react-materialize/lib/Input'
import Row from 'react-materialize/lib/Row'
import Icon from 'react-materialize/lib/Icon'
import './register.css'
import Button from 'react-materialize/lib/Button'


class Registration extends React.Component {
    render() {
        return (
            <div className='form'>
                <Row>
                    <Input s={12} label="Ім'я" />
                    <Input s={12} label="По Батькові" />
                    <Input s={12} label="Прізвище" />
                    <Input type="password" label="Пароль" s={6} />
                    <Input type="password" label="Повторіть Пароль" s={6} />
                    <Input type="email" label="Емеіл" s={12} />
                    <Input s={12} label="Вік" />
                    <Button waves='light'>Реєстрауція</Button>


                </Row>
            </div>
        );
    }
}


export default Registration;