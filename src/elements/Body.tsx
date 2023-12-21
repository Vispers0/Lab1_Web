import { useState } from 'react'
import image from '../assets/img1.svg'
import "../styles/Body.css"

export default function Body(){
    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div class="body">
                                <span>
                                    <p class="textAbove">Virtual healthcare for you</p>
                                    <p class="text">Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                                </span>
                            </div>
                        </td>
                        <td>
                            <div class="imgContainer">
                                <img src={image}/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
