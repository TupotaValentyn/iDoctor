import React from 'react'
import './style.css'
import notFoundimg from './../../../assets/img/notFound.gif'

class notFound extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <div>
                    <h1>404 not found</h1>
                    <img src={notFoundimg} alt=""/>
                </div>
                <div id='fromMusic'>

                </div>
            </div>
        );
    }
}


export default notFound;