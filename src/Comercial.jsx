import React from 'react'
import data from './data.js'
import './styles/Content.scss'
// import access from './images/icon-access-anywhere.svg'

export default function Comercial(props) {
    

    return (
        <div className='comercials'>
            {data.profiles.map(item => {
                return (<div key={item.id} className='comercial'>
                    <img src={item.img} alt="access"/>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>)
            })}
        </div>
    )
}
