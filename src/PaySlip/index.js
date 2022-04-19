import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import classes from './index.module.css';
import Apton_logo from '../PayrollForm/Apton_logo.jpg';

const PaySlip = (props) => {
    const { employeeName, employeeCode, address, aadharNumber, month,
        department, pfNumber, paidDays, lop, uanNumber, designation,
        accountNumber, hra, basic, conveyanceAllowance, specialAllowance,
        bonus, pfAmount, esi, professionalTax, dateValue } = props;
    const componentRef = useRef();

    const [shortMonth] = useState(new Date(dateValue).toLocaleString("en", { month: "short"}))
    const [fullYear] = useState(new Date(dateValue).getFullYear());

    const printHandler = useReactToPrint({
        content: () => componentRef.current
    });

    return (
        <div>
            <div className={classes.container} ref={componentRef}>
                <div className={classes.header}>
                    <img src={Apton_logo} alt="Apton logo"></img>
                    <div>No: 7, Kaliamman kovil street, Rathnapuri, Chennai-600107</div>
                    <b><div>Payslip for the month: {`${shortMonth} ${fullYear}`}</div></b>
                </div>
                <div className={classes.line}></div>
                <div className={classes.firstRow}>
                    <div className={classes.firstColumn}>
                        <div>Employee name: {employeeName}</div>
                        <div>Employee code: {employeeCode}</div>
                        <div className={classes.address}>Employee address: {address}</div>
                        <div>Designation: {designation}</div>
                        <div>Department: {department}</div>

                    </div>
                    <div className={classes.secondColumn}>
                        <div>Aadhar number: {aadharNumber}</div>
                        <div>PF number: {pfNumber}</div>
                        <div>UAN: {uanNumber}</div>
                        <div>Bank account number: {accountNumber}</div>
                        <div>Paid days: {paidDays}</div>
                        <div>Loss of Pay: {lop}</div>
                    </div>
                </div>
                <table className="table" id={classes.paySlipTable}>
                    <thead>
                        <tr>
                            <th>Earnings</th>
                            <th>Amount monthly</th>
                            <th>Amount yearly</th>
                            <th>Deductions</th>
                            <th>Amount monthly</th>
                            <th>Amount yearly</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Basic</td>
                            <td>{basic}</td>
                            <td>{basic * 12}</td>
                            <td>PF amount</td>
                            <td>{pfAmount}</td>
                            <td>{pfAmount * 12}</td>
                        </tr>
                        <tr>
                            <td>HRA</td>
                            <td>{hra}</td>
                            <td>{hra * 12}</td>
                            <td>ESI</td>
                            <td>{esi}</td>
                            <td>{esi * 12}</td>
                        </tr>
                        <tr>
                            <td>Conveyance allowance</td>
                            <td>{conveyanceAllowance}</td>
                            <td>{conveyanceAllowance * 12}</td>
                            <td>Professional Tax</td>
                            <td>{professionalTax}</td>
                            <td>{professionalTax * 12}</td>
                        </tr>
                        <tr>
                            <td>Special allowance</td>
                            <td>{specialAllowance}</td>
                            <td>{specialAllowance * 12}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Bonus</td>
                            <td>{bonus}</td>
                            <td>{bonus * 12}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button type="button" onClick={() => printHandler()} className={`btn btn-light ${classes.printButton}`} >Print</button>
        </div>
    )
}

export default PaySlip;
