import React, { useState, useEffect } from 'react';
import reg from "../styles/Registration.module.css"
import { useForm } from "react-hook-form";
import axios from '../api/axios';


export default function Registration(){

    const { handleSubmit, register, errors } = useForm();
   
    const [user, setUser] = useState<any[]>([])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("http://localhost:3000/users")
            setUser([... res.data])
        }
        fetchData()
    }, [])

    function onSubmit(values: any) {
        
        if(user){
            const checker = user.find((u) => u.username == values.email)
            if(checker){
                alert("User is already added!")
                return;
            }
        }

        const model = { 
            username: values.email,
            password: values.password,
   
        }

        const result = axios.post("http://localhost:3000/users", model);   
        alert("User is added!")
        window.location.reload();   
    }
 
    console.log(user)
    return (
        <div className= {reg.registration}>
            <img id={reg.imgReg} src="https://lichi.com/statics/images/pages/bg.how_to_return.2.jpg"/>
            <div id={reg.container}>
                <p className={reg.inp}>Email:</p><br/><br/>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="email"
                        ref={register({
                            required: "Required!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address!"
                            }
                        })}
                    /><br/>

                    <div className={reg.check}>
                        {errors.email && errors.email.message}
                    </div>

                    <p className={reg.inp}>Password:</p><br/><br/>
                    <input
                        type="password"
                        name="password"
                        ref={register({
                            required: "Required!",
                            validate: value => value !== "123" || "Are you serious?"
                        })}
                    />

                    <div className={reg.check}>
                        {errors.password && errors.password.message}
                    </div>

                    <p id={reg.inf} className={reg.inp}>
                        <input
                            type="checkbox"
                            name="checkbox"
                            ref={register({
                                required: "Required!"
                            })}
                        />
                        I allow Lichi to use my personal data in accordance<br/>
                        with confidential by agreement.
                    </p><br/><br/><br/><br/>

                    <div className={reg.check}>
                        {errors.checkbox && errors.checkbox.message}
                    </div>

                    <button type="submit" className = {reg.submit} >Submit</button><br/><br/><br/>

                </form>
            </div>
        </div>
    );
}