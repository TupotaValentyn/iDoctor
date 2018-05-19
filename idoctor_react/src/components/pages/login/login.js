import React from 'react'
import Input from 'react-materialize/lib/Input'
import Row from 'react-materialize/lib/Row'
import Button from 'react-materialize/lib/Button'
import './login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('email - ', this.state.email);
        console.log('pass - ', this.state.email);
    };
    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    };
    render() {
        console.log(this.state);
        return (
            <div className='login'>
                <Row>
                    <Input
                        type="email"
                        label="Емеіл" s={12}
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}/>
                    <Input
                        type="password"
                        label="Пароль"
                        s={12}
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}/>

                    <Button waves='light' onClick={this.handleSubmit}>Увійти</Button>
                </Row>
            </div>
        );
    }
}


export default Login;