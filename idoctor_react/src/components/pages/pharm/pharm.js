import React from  'react'
import Collection from 'react-materialize/lib/Collection'
import CollectionItem from 'react-materialize/lib/CollectionItem'
import Card from 'react-materialize/lib/Card'
import './pharm.css'

class Pharm extends React.Component {
    render () {
        return (
            <section className="Pharm">
                <div className="container">
                    <Card textClassName='black-text'
                          title='Запис до лікаря'
                          actions={[<a href='#'>Записатись на прийом</a>]}>
                        I am a very simple card.
                    </Card>
                    <Card textClassName='black-text'
                          title='Ймовірна хвороба'>
                        I am a very simple card.
                    </Card>
                    <Collection header='Ліки, які допоможуть'>
                        <CollectionItem>Alvin1</CollectionItem>
                        <CollectionItem>Alvin2</CollectionItem>
                        <CollectionItem>Alvin3</CollectionItem>
                        <CollectionItem>Alvin4</CollectionItem>
                    </Collection>
                </div>
            </section>
        )
    }
}

export default Pharm