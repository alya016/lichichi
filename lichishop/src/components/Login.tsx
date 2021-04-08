import React, { useEffect, useReducer, useState } from 'react';
import loginStyle from "../styles/Login.module.css"
import {login} from "../utils"
import axios from "../api/axios"
import { useForm } from "react-hook-form";
import { initialState, loginReducer } from '../reducers/loginReducer';



export default function Login(){

    const { register, errors } = useForm();
    const [data, setData] = useState<any[]>([]) 

    useEffect(() => {   
        async function fetchData() {
            const res = await axios.get("http://localhost:3000/users")
            setData([... res.data])
        }
        fetchData()
    }, [])

    const [state, dispatch] = useReducer(loginReducer, initialState);
    const { username, password, isLoading, error, isLoggedIn } = state;

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        dispatch({ type: 'login'});
    
        try {
          await login( username, password, data );
          dispatch({ type: 'success' });
          
        } catch (error) {
          dispatch({ type: 'error' });
        }
      };

      console.log(data)


    return (
        
        <div className={loginStyle.log}>

        
            <div  className={loginStyle.framelog}>
            <img id = {loginStyle.ima} src="https://lichi.com/statics/images/pages/bg.how_to_return.2.jpg" alt=""/>

            </div>
            <div className={loginStyle.logframelog}>
                
            <h1 className={loginStyle.lolog}>LOG IN</h1>
            
            {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button className={loginStyle.submit} type='submit'  onClick={() => dispatch({ type: 'logOut' })}>
              Log Out
            </button>
          </>
             ) : (
            <div id={loginStyle.containerlog}>
                {error && <p style = {{color: "red", fontSize: "20px", textAlign:"center"}} className={error}>{error}</p>}<br></br><br/><br/>
                <p className={loginStyle.inp1}>Email:</p><br/><br/>
                <form onSubmit={onSubmit}>
                    <input
                        name="email"
                        onChange={(e) =>
                            dispatch({
                              type: 'field',
                              fieldName: 'username',
                              payload: e.currentTarget.value,
                            })
                          }
                        ref={register({
                            required: "Required!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address!"
                            }
                        })}
                    /><br/>

                    <div className={loginStyle.checklog}>
                        {errors.email && errors.email.message}
                    </div>

                    <p className={loginStyle.inplog}>Password:</p><br/><br/>
                    <input
                        type="password"
                        name="password"
                        autoComplete='new-password'
                        onChange={(e) =>
                          dispatch({
                            type: 'field',
                            fieldName: 'password',
                            payload: e.currentTarget.value,
                          })
                        }
                        ref={register({
                            required: "Required!",
                            validate: value => value !== "admin" || "Nice try!"
                        })}
                    />

                    <div className={loginStyle.checklog}>
                        {errors.password && errors.password.message}
                    </div>


                    <div className={loginStyle.checklog}>
                        {errors.checkbox && errors.checkbox.message}
                    </div>

                    <button className={loginStyle.submit} type='submit' disabled={isLoading}> 
                        {isLoading ? 'Logging in...' : 'Log In'}
                    </button><br/><br/><br/>
                </form>
            </div>
            
        )}

            </div>
                    

        </div>
        

        
    );
}