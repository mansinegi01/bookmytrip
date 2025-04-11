import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

function Login() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    useEffect(()=>{
        axios.get("http://localhost:8000/test")
        .then((res)=>{
            console.log("done")
        })
        .catch((err)=>{
            console.log(`error occured`)
        })
    })
    return (
        <>
            <div className=" w-full flex-row mt-20">
                <div className=" flex justify-center w-full h-2/3">
                    <h2>Signup</h2>
                </div>
                <div className="w-full flex justify-center ">
                    <form className="border-2 border-gray-700 bg-gray-400 w-1/2 p-3  ">

                        <div className="">
                            <label for="exampleInputName1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" 
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                            />
                            <div id="NameHelp" className="form-text"></div>
                        </div>
                        <div className="">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary mt-3" >Register</button>
                        <p>Already a member? <Link to="/" className="underline">Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;