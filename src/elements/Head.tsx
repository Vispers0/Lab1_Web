import { useState } from 'react'
import pageLogo from '../assets/T.svg'
import '../styles/Head.css'

export default function Head(){
    return(
        <>
            <div class="head">
                <div>
                    <img class="circle" src={pageLogo}/>
                    <p class="title">HealthCare</p>
                    <p class="category">About us</p>
                    <p class="category">Testimonials</p>
                    <p class="category">Apps</p>
                    <p class="category">Find a doctor</p>
                    <p class="category">Home</p>
                </div>
            </div>
        </>
    );
}
