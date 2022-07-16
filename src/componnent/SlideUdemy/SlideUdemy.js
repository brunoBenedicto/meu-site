import React from "react";
import '../SlideUdemy/SlideUdemy.css'
import '../SlideUdemy/RadioCheckedUdemy.css'
export default function SlideUdemy(){

    
    return(
        <div className="sliderU">
            <div class="slidesU">
                <input type="radio" name="radio-btnU" id="radioU1"/>
                <input type="radio" name="radio-btnU" id="radioU2"/>
                <input type="radio" name="radio-btnU" id="radioU3"/>

                <div className="slideU firstU">
                    <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-06cabab2-b0da-44d4-b6e3-6c2e356d8e85.jpg?v=1655520211000" alt="slide01"/>
                </div>
                <div className="slideU">
                    <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-b283f8e5-8895-474e-b09b-ef8136a8d8e0.jpg?v=1651078038000" alt="slide02"/>
                </div>
                <div className="slideU">
                    <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-c331f9ef-590c-4106-b5fc-1476d8b8fb8c.jpg?v=1651206838000" alt="slide03"/>
                </div>
    
                <div className="navigation-autoU">
                    <div className="auto-btnU1"></div>
                    <div className="auto-btnU2"></div>
                    <div className="auto-btnU3"></div>
                </div>
            </div>

            <div className="manual-navigationU">
                <label for="radioU1" className="manual-btnU"></label>
                <label for="radioU2" className="manual-btnU"></label>
                <label for="radioU3" className="manual-btnU"></label>
            </div>

        </div>
    )
}