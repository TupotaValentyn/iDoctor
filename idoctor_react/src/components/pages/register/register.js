import React from 'react'
import Input from 'react-materialize/lib/Input'
import Row from 'react-materialize/lib/Row'
import Icon from 'react-materialize/lib/Icon'
import './register.css'
import Button from 'react-materialize/lib/Button'


class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '' ,
            midName: '' ,
            lastName: '' ,
            Email: '' ,
            password: '',
            passwordConf: '',
            years: '',
        };
    }

    handleChange = (event) => {
        let firstName = event.target.name;
        let midName = event.target.name;
        let lastName = event.target.name;
        let Email = event.target.name;
        let password = event.target.name;
        let passwordConf = event.target.name;
        let years = event.target.name;

        this.setState({
            [firstName]:event.target.value,
            [midName]:event.target.value.trim(),
            [lastName]:event.target.value.trim(),
            [Email]:event.target.value.trim(),
            [password]:event.target.value.trim(),
            [passwordConf]:event.target.value.trim(),
            [years]:event.target.value.trim(),

        })
    };

    handleSubmit = (event) => {
      console.log(this.state)
    };

    render() {
        console.log(this.state)
        return (
            <div className='form'>
                <Row>
                    <Input type='text' s={12} label="Ім'я" name= 'firstName'
                           value={this.state.firstName}
                           onChange={this.handleChange}/>
                    <Input type='text' s={12} label="По Батькові" name= 'midName'
                           value={this.state.midName}
                           onChange={this.handleChange}/>
                    <Input type='text' s={12} label="Прізвище" name='lastName'
                           value={this.state.lastName}
                           onChange={this.handleChange}/>
                    <Input type="password" label="Пароль" s={6} name='password'
                           value={this.state.password}
                           onChange={this.handleChange}/>
                    <Input type="password" label="Повторіть Пароль" s={6} name='passwordConf'
                           value={this.state.passwordConf}
                           onChange={this.handleChange}/>
                    <Input type="email" label="Емеіл" s={12} name='Email'
                           value={this.state.Email}
                           onChange={this.handleChange} />
                    <Input type='number' s={12} label="Вік"  name='years'
                           value={this.state.years}
                           onChange={this.handleChange} />

                    <Button waves='light' onClick={this.handleSubmit}>Реєстрауція</Button>


                </Row>
            </div>
        );
    }
}


export default Registration;