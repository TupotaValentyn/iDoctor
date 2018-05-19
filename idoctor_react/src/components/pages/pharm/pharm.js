import React from  'react'
import Card from 'react-materialize/lib/Card'

class Pharm extends React.Component {
    render () {
        return (
            <section className="Pharm">
                <div className="container">
                    <Card className='blue-grey darken-1'
                          textClassName='white-text'
                          title='Запис до лікаря'
                          actions={[<a href='#'>This is a link</a>]}>
                        I am a very simple card.
                    </Card>
                    <Card className='blue-grey darken-1'
                          textClassName='white-text'
                          title='Ймовірна хвороба'>
                        I am a very simple card.
                    </Card>
                    <Card className='blue-grey darken-1'
                          textClassName='white-text'
                          title='Ліки, які допоможуть'>
                        <ul>
                            <li>Ліки </li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Card>
                </div>
            </section>
        )
    }
}

export default Pharm