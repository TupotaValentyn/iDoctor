import React from 'react'
import Input from 'react-materialize/lib/Input'
import Button from 'react-materialize/lib/Button'
import Row from 'react-materialize/lib/Row'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'

class Doctor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fio: '' ,
            birthday: '' ,
            writeDay: '',
            time: '10:00',
            report: '',
        };
    }
    handleChange = (event) => {
        let fio = event.target.name;
        let birthday = event.target.name;
        let writeDay = event.target.name;
        let report = event.target.name;
        let time = event.target.name;

        this.setState({
            [fio]:event.target.value.trim(),
            [birthday]:event.target.value.trim(),
            [writeDay]:event.target.value.trim(),
            [report]:event.target.value.trim(),
            [time]:event.target.value.trim(),
        })
    };
    handleSubmit = (e) => {
        console.log(this.state)
    };
    render () {
        console.log(this.state)
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
                            label="Дата народження (число/місяць/рік)"
                            type='text'
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
                        <div>
                            <TimePicker
                                showSecond={false}
                                showMinute={false}
                                placeholder="Час"
                                onChange={(value) => {this.setState({time: value.format("HH")})}}
                                disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 21, 22, 23]}
                                minuteStep={30} />
                        </div>
                        <Input
                            name='report'
                            label='Ваші скарги'
                            type='textarea'
                            s={12}
                            value={this.state.report}
                            onChange={this.handleChange}/>
                        <Button waves='light'>button</Button>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Doctor;