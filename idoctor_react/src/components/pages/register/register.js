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
                    <Input s={12} label="First Name" />
                    <Input s={12} label="Mid Name" />
                    <Input s={12} label="Last Name" />
                    <Input type="password" label="password" s={6} />
                    <Input type="password" label="password" s={6} />
                    <Input type="email" label="Email" s={12} />
                    <Input s={12} label="Years Old" />
                    <Button waves='light'>button</Button>


                </Row>
            </div>
        );
    }
}


export default Registration;