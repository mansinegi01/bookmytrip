import React from "react";
import { Link } from "react-router-dom";
function Login() {
    return (
        <>
            <div className=" w-full flex-row mt-20">
                <div className=" flex justify-center w-full h-2/3">
                    <h2>LogSignup</h2>
                </div>
                <div className="w-full flex justify-center ">
                    <form className="border-2 border-gray-700 bg-gray-400 w-1/2 p-3  ">

                        <div className="">
                            <label for="exampleInputName1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" />
                            <div id="NameHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">Register</button>
                       
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;