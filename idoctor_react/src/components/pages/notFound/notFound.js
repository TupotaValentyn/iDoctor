import React from 'react'
import './style.css'
import notFoundimg from './../../../assets/img/notFound.gif'
import Song from './../../../assets/music/Stronger.mp3'
import ReactTimeout from 'react-timeout'


class notFound extends React.Component {
    // timeFunc = setTimeout(() => {
    //                 StartMusic = () =>{
    //                     let item;
    //                     item = document.getElementById('fromMusic')
    //                     item.innerHTML = '<audio src={Song} autoplay loop></audio>'
    //             }
    //             }, 1000);

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