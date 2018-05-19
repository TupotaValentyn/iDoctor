import React from 'react'
import Input from 'react-materialize/lib/Input'
import Button from 'react-materialize/lib/Button'
import Row from 'react-materialize/lib/Row'

class Doctor extends React.Component {
    render () {
        return (
            <section className="doctor">
                <div className="container">
                    <Row>
                        <Input name="FIO" type="email" label="ПІБ" s={12} />
                        <Input name='birthday' label="Дата народження" type='date' s={12} onChange={function(e, value) {}} />
                        <Input name='writeDay' label="День запису" type='date' s={12} onChange={function(e, value) {}} />
                        <Input name='report' label='Ваші скарги' type='textarea' s={12}/>
                        <Button floating large className='red' waves='light' icon='add' />
                    </Row>
                </div>
            </section>
        )
    }
}

export default Doctor;