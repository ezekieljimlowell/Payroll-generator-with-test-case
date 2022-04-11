import React, { useState } from "react";
import PaySlip from "../PaySlip";
import styles from './EmployeeTable.module.css';
import ShowPaySlip from "./ShowPaySlip";

const EmployeeTable = ({ arrayOfObject }) => {
    const [showPaySlip, setShowPaySlip] = useState(false);
    let [paySlipData, setPaySlipData] = useState("");
    let [hideIndex, setHideIndex] = useState("");
    //let [arrayAfterDeletion, setDelete] = useState([]);

    const showHandler = (index) => {
        let filteredData = arrayOfObject.filter((data, i) => i === index)
        setPaySlipData(filteredData);
        setShowPaySlip(true);
        setHideIndex(index);
    }
    //console.log(paySlipData);

    const hideHandler = (index) => {
        if (hideIndex === index) {
            setShowPaySlip(false);
        }
    }

    /*const deleteHandler = (index) => {
        console.log(index);
        if (arrayOfObject.length === index) {
            arrayOfObject.splice(index - 1, 1);
            localStorage.setItem("empRow", JSON.stringify(arrayOfObject));
            setEmployeeData(JSON.parse(localStorage.getItem("empRow") || "[]"));
        }
        else {
            arrayOfObject.splice(index, 1);
            localStorage.setItem("empRow", JSON.stringify(arrayOfObject));
            setEmployeeData(JSON.parse(localStorage.getItem("empRow") || "[]"));
        }
    }*/

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee name</th>
                        <th>Employee code</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Paid days</th>
                        <th>Loss of pay</th>
                        <th>UAN number</th>
                        <th>Aadhar number</th>
                        {/*<th>Delete</th>*/}
                        <th>Expand</th>
                        <th>Hide</th>
                    </tr>
                </thead>
                <tbody>
                    {arrayOfObject !== undefined && arrayOfObject.map((data, index) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.empName}</td>
                                <td>{data.empCode}</td>
                                <td>{data.department}</td>
                                <td>{data.designation}</td>
                                <td>{data.paidDays}</td>
                                <td>{data.lop}</td>
                                <td>{data.uanNumber}</td>
                                <td>{data.aadharNumber}</td>
                                {/*<td><button type="button" onClick={() => deleteHandler(data.id)}>Delete</button></td>*/}
                                <td><button type="button" onClick={() => {
                                    showHandler(index);
                                }}>Show</button></td>
                                <td><button type="button" onClick={() => hideHandler(index)}>Hide</button></td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
            {(showPaySlip && paySlipData.length > 0) && paySlipData.map(data => <div key={paySlipData}><ShowPaySlip {...data} className={styles.paySlip}/></div>)}

        </>
    )
}

export default EmployeeTable;