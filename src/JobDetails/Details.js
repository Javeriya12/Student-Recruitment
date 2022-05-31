import { Button } from "@mui/material";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { firebaseDatabase } from "../backend/firebaseHandler";
import './JobDetailsStyles.css';


const JobDetail = () => {


    const [jobDet, setjobdet] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const jobdetRef = ref(firebaseDatabase, 'POST-RECORDS');
            onValue(jobdetRef, (dataSnapshot) => {
                if (dataSnapshot.exists()) {
                    const temp = [];
                    for (const CompName in dataSnapshot.val()) {
                        const student = dataSnapshot.child(CompName).val();
                        temp.push(student);
                    }
                    setjobdet(temp);
                    console.log(jobDet);
                }

                else {
                    alert("no records found")
                }

            })
        }
        fetchData();
    }, []);

    const handleClick = () => {
        alert("You Have successfully applied!");

    }

    return (
        <div className="list-containr">
            <div className="grid-list">
                {
                    jobDet.map((item) => {
                        return (
                            <div className="grid-content">
                                <h3>{item.CompName}</h3>
                                <p>Post:{item.post}</p>
                                <p>Location:{item.loca}</p>
                                <p>Package:{item.pack}</p>
                                <p>10th cutoff:{item.tenth}</p>
                                <p>10th cutoff:{item.twel}</p>
                                <p>Semester:{item.sem}</p>
                                <p>current CGPA cutoff:{item.current}</p>
                                <Button variant="contained" onClick={handleClick}>Apply</Button>


                            </div>

                        )

                    })
                }
            </div>

        </div>


    );
}
export default JobDetail;