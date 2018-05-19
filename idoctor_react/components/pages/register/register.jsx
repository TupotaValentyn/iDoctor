import React from 'react'

class Register extends React.Component {
    render() {
        return (
          <div>
              <Row>
                  <Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
                  <Input s={6} label="Last Name" validate><Icon>account_circle</Icon></Input>
                  <Input s={6} label="Mid Name" validate><Icon>account_circle</Icon></Input>

                  <Input type="password" label="password" s={12} />
                  <Input type="password" label="again password" s={12} />
                  <Input type="email" label="Email" s={12} />


              </Row>

          </div>
    );
    }
}


export default Register;