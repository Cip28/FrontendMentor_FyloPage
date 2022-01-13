import React from 'react'
import Comercial from './Comercial'
import Reviews from './Reviews'
import './styles/Content.scss'
import img from './images/illustration-stay-productive.png'
import arrow from './images/icon-arrow.svg'
import quotes from './images/bg-quotes.png'
import { useForm } from "react-hook-form";

export default function Content(props) {
    
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
      }

    return (
        <main>
            <Comercial />
            <div className='productive-part'>
                <img src={img} alt="productive" className='productive-img'/>
                <div className='text-productive-part'>
                    <h1>  Stay productive, wherever you are</h1>
                    <p> Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <br></br>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <br></br>

                    <div className="btn-part">
                        <button>
                            See how Fylo works
                            <img src={arrow} alt="productive"/>
                        </button>
                        <div className="underline"></div>
                    </div>
                </div>
            </div>
            {/* ------------------- */}
            <div className='review-part'>
                <img src={quotes} alt="quotes" className='quotes' />
                <div className="review-card-container">
                    <Reviews />
                </div>
            </div>

            {/* -------------------- */}
            <div className='early-access'>
                <h2>Get early access today</h2>
                <p>  It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                    <input
                        type="email"
                        placeholder='email@example.com'
                        {...register("email",{ 
                            required: true,  
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                        })}
                        />
                    <input type="submit" value="Get Started For Free" className='sign-up-btn' placeholder ='email@example.com' />
                    </label>
                {errors.email && <p style={{color:'hsl(0, 100%, 63%)',textAlign:'left',fontWeight:'700'}}>Please enter a valid email address</p>}
                </form>
              
            </div>
        </main>
    )
}
