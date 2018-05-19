import React from 'react'
import Input from 'react-materialize/lib/Input'
import Button from 'react-materialize/lib/Button'
import Row from 'react-materialize/lib/Row'

class Doctor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fio: '' ,
            birthday: '' ,
            writeDay: '',
            report: '',
        };
    }
    handleChange = (event) => {
        let fio = event.target.name;
        let birthday = event.target.name;
        let writeDay = event.target.name;
        let report = event.target.name;

        this.setState({
            [fio]:event.target.value.trim(),
            [birthday]:event.target.value.trim(),
            [writeDay]:event.target.value.trim(),
            [report]:event.target.value.trim(),
        })
    };
    handleSubmit = (e) => {
        console.log(this.state)
    };
    render () {
        return (
            <section className="doctor">
                <div className="container">
                    <Row>
                        <Input
                            name="fio"
                            type="email"
                            label="ПІБ"
                            s={12}
                            value={this.state.fio}
                            onChange={this.handleChange}/>
                        <Input
                            name='birthday'
                            label="Дата народження"
                            type='date'
                            s={12}
                            value={this.state.birthday}
                            onChange={(e, value) => {this.setState({birthday: value})}} />
                        <Input
                            name='writeDay'
                            label="День запису"
                            type='date'
                            s={12}
                            value={this.state.writeDay}
                            onChange={(e, value) => {this.setState({writeDay: value})}} />
                        <Input
                            name='report'
                            label='Ваші скарги'
                            type='textarea'
                            s={12}
                            value={this.state.report}
                            onChange={this.handleChange}/>
                        <Button floating large className='red' waves='light' icon='add' onClick={this.handleSubmit}/>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Doctor;