import React from 'react';
import about from "../styles/About.module.css"
import { useForm } from "react-hook-form";


export default function About(){

    const {  register } = useForm();



    return (
        
        <div className={about.container}>
            <div className={about.frame}>
            <div>
                <h1 className={about.b}>About us</h1>
            </div>
                <div className={about.img}>

                </div>
                <div className={about.bg_img2}></div>
                <h1 className={about.head}>Lichi is a fashion brand, a team of professionals and a huge community of girls in love with fashion. Design studio "Lichi" is located in the very heart of Europe - Germany. The main idea of the brand is to offer dozens of new designs of clothes and accessories every week! Girl "Lichi" loves high fashion! She loves how we transform trends and create clothes that can be worn on a daily basis. We are followed on social networks to see the latest in the fashion industry and what to wear with them, because we always demonstrate several combinations.</h1>
                <h1 className={about.b}>Any questions? Contact us!</h1>   
            <form action="action_page.php">

                <label htmlFor="fname">Name</label>
                <input type="text" id={about.fname} name="firstname" placeholder="Your name.."></input>

                <label htmlFor="email">Email</label>
                <input type="text" id={about.email} name="mail" placeholder="Your email.." ref={register({
                                        required: "Required!",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address!"
                                        }
                                    })}></input>

                <label htmlFor="subject">Message</label>
                <textarea id={about.subject} name="subject" placeholder="Write something.." ></textarea>

                <input type="submit" value="Submit"></input>

            </form>       

        </div>

            <h1 className={about.footer}>Lichi © 2020 . All rights reserved.</h1>
        </div>
        
    );
    
}