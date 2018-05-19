import React from 'react'
import Input from 'react-materialize/lib/Input'
import Button from 'react-materialize/lib/Button'
import './simptoms.css'
import {NavLink} from 'react-router-dom'

class Simptom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simptom: '',
        }
    }

    handleChange = (e) => {
        let simptom = e.target.name;
        this.setState({
            [simptom]:e.target.value
        })
    };

    render () {
        console.log(this.state.simptom);
        return (
            <section className="simptom">
                <div className="container">
                    <Input  type="text" s={12} label="Введіть ваш симптом" name='simptom'
                            value={this.state.simptom}
                            onChange={this.handleChange}/>
                    <NavLink to={'/pharm/' + this.state.simptom}>Надіслати</NavLink>
                </div>
            </section>
        )
    }
}

export default Simptom;