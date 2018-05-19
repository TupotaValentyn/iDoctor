import React from 'react'
import Input from 'react-materialize/lib/Input'
import Row from 'react-materialize/lib/Row'
import Button from 'react-materialize/lib/Button'
import './login.css'

class Login extends React.Component {

    render() {
        return (
            <div className='login'>
                <Row>
                    <Input type="email" label="Емеіл" s={12} />
                    <Input type="password" label="Пароль" s={12} />
                    <Button waves='light'>Увійти</Button>


                </Row>
            </div>
        );
    }
}


export default Login;