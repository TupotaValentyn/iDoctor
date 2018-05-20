import React from 'react'
import Seks1 from './../../../assets/img/seks1.png'
import Seks2 from './../../../assets/img/seks2.png'
import Seks3 from './../../../assets/img/sex3.png'
import Card from 'react-materialize/lib/Card'
import Col from 'react-materialize/lib/Col'
import CardTitle from 'react-materialize/lib/CardTitle'
import './aboutas.css'

class AboutUs extends React.Component {
    render() {
        return (
            <div className='AboutUs-wrapper'>
                    <h1 className='Ourteam'>Наша Команда</h1>
                    <ul>
                        <li>
                            <Col>
                                <Card  header={<CardTitle reveal image={Seks1} waves='light'/>}
                                      title="Даня <Full_Machine>"
                                      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                                    <p><a href="#">Telegram</a></p>
                                </Card>
                            </Col>
                        </li>
                        <li>
                            <Col>
                                <Card  header={<CardTitle reveal image={Seks2} waves='light'/>}
                                       title="Валік <Git_Machine>"
                                      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                                    <p><a href="">Telegram</a></p>
                                </Card>
                            </Col>
                        </li>
                        <li>
                            <Col>
                                <Card header={<CardTitle reveal image={Seks3} waves='light'/>}
                                      title="Саня <Frontend_Machine>"
                                      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                                    <p><a href="#">Telegram</a></p>
                                </Card>
                            </Col>
                        </li>
                    </ul>


            </div>
        );
    }
}


export default AboutUs;