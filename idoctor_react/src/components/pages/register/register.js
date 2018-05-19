import React from 'react'
import Input from 'react-materialize/lib/Input'
import Row from 'react-materialize/lib/Row'
import Icon from 'react-materialize/lib/Icon'
import account_circle from './../../atoms/icon/account_circle'

class Registration extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Input s={6} label="First Name" validate><Icon><account_circle /></Icon></Input>
                    <Input s={6} label="Mid Name" validate><Icon>account_circle</Icon></Input>
                    <Input s={6} label="Last Name" validate><Icon>account_circle</Icon></Input>
                    <Input type="password" label="password" s={12} />
                    <Input type="email" label="Email" s={12} />
                </Row>
            </div>
        );
    }
}


export default Registration;