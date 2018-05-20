import React from 'react'
import Input from 'react-materialize/lib/Input'
import Button from 'react-materialize/lib/Button'
import Row from 'react-materialize/lib/Row'
import TimePicker from 'rc-time-picker'
import axios from 'axios'
import 'rc-time-picker/assets/index.css'

class Doctor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fio: '' ,
            birthday: '' ,
            writeDay: '',
            time: '',
            report: '',
            ap_time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 21, 22, 23]
        };
    }
    handleChange = (event) => {
        let fio = event.target.name;
        let doctor_name = event.target.name;
        let writeDay = event.target.name;
        let report = event.target.name;
        let time = event.target.name;

        this.setState({
            [fio]:event.target.value.trim(),
            [doctor_name]:event.target.value.trim(),
            [writeDay]:event.target.value.trim(),
            [report]:event.target.value.trim(),
            [time]:event.target.value.trim(),
        })
    };
    handleSubmit = (e) => {
        const opt = {
            fio: this.state.fio,
            doctor_name: this.state.doctor_name,
            writeDay: this.state.writeDay,
            report: this.state.report,
            time: this.state.time,
        };
        axios.post('http://localhost:4000/pharmacy/appointment', opt)
            .then(res => {
                console.log(res);
                if (res.data.status == 200) {
                    alert("Ваш запис успішно створений");
                } else {
                    alert(res.data.errors[0]);
                }
            })

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
                            label="Введіть ПІБ вашого лікаря"
                            type='text'
                            s={12}
                            value={this.state.doctor_name}
                            onChange={(e, value) => {this.setState({doctor_name: value})}} />
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
                                disabledHours={() => this.state.ap_time}
                                minuteStep={30} />
                        </div>
                        <Input
                            name='report'
                            label='Ваші скарги'
                            type='textarea'
                            s={12}
                            value={this.state.report}
                            onChange={this.handleChange}/>
                        <Button waves='light' onClick={this.handleSubmit}>Відправити</Button>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Doctor;