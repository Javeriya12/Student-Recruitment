import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth, firebaseDatabase } from "../backend/firebaseHandler";
import './stuSignupStyles.css';

const SignUp=()=>{
                  
    const [stuData,setstuData]=useState({
        sname:"",
        clg:"",
        dept:"",
        tenth:"",
        twel:"",
        sem:"",
        cgpa:"",
        Email:"",
        Pass:""
    });

    const nav=useNavigate();

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setstuData({
            ...stuData,
            [name]: value
        })

    }
    const handleSign=async()=>{
        try{
            await createUserWithEmailAndPassword(firebaseAuth,stuData.Email,stuData.Pass)
            const recordRef=ref(firebaseDatabase,`STUD-RECORDS/${stuData.sname}`);
            await set(recordRef,stuData);
            
          
           nav("/Job");
        }
       catch(err){
           alert(err);
       }
    }


    return(
        <div className="record-data-container">
        <div className="input-feilds-container">
            <input className="inputs" value={stuData.sname} onChange={handleChange} name="sname" placeholder="Student Name"/>
            <input className="inputs" value={stuData.clg} onChange={handleChange} name="clg" placeholder="College Name"/>
            <input className="inputs" value={stuData.dept} onChange={handleChange} name="dept" placeholder="Department"/>
            <input className="inputs" value={stuData.tenth} onChange={handleChange} name="tenth" placeholder="10%"/>
            <input className="inputs" value={stuData.twel} onChange={handleChange} name="twel"  placeholder="12%"/>
            <input className="inputs" value={stuData.sem} onChange={handleChange} name="sem"  placeholder="Semester"/>
            <input className="inputs" value={stuData.cgpa} onChange={handleChange} name="cgpa"  placeholder="Current CGPA"/>
            <input className="inputs" value={stuData.Email} onChange={handleChange} name="Email"  placeholder="Email ID"/>
            <input className="inputs" value={stuData.Pass} onChange={handleChange} name="Pass"  placeholder="Password"/>
            <button className="Sign-up-button" onClick={handleSign}>Sign Up</button>

        </div>
    </div>

    )
}

export default SignUp;