import React from 'react'
import review from './review.js'

export default function Reviews(props) {
    

    return (
        <div className='reviews'>
            {review.profiles.map(item => {
                return (
                    <div key={item.id} className='card'>
                        <p>{item.description}</p>
                        <div className='card-flex'>
                            <img src={ item.img} alt="profile"/>
                            <div className='review-credentials'>
                                <h5>{item.name}</h5>
                                <p>{item.function}</p>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}
