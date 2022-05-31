import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firebaseDatabase } from "../backend/firebaseHandler";
import './joblistStyles.css';

const JobList=()=>{
    
    const [stuList, setstuList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const studentRef = ref(firebaseDatabase, 'POST-RECORDS');
            onValue(studentRef, (dataSnapshot) => {
                if (dataSnapshot.exists()) {
                    const temp = [];
                    for (const CompName in dataSnapshot.val()) {
                        const student = dataSnapshot.child(CompName).val();
                        temp.push(student);
                    }
                    setstuList(temp);
                    console.log(stuList);
                }

                else {
                    alert("no records found")
                }

            })
        }
        fetchData();
    }, []);
    return(
       
        <div className="grid-list">
        {
            stuList.map((item)=>{
                return(
                    <div className="grid-content"> 
                        <h3>{item.CompName}</h3>
                        <p>{item.post}</p>
                        <p>{item.loca}</p>
                        <p>{item.pack}</p>
                        <Link to="/details">Visit website</Link>

                    </div>

                )

            })
        }
        </div>
        
  

    )
}

export default JobList;