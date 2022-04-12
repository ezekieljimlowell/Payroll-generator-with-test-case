import { act } from "react-dom/test-utils";
import { screen, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import PayrollForm from "./index";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import PaySlip from "../PaySlip";
import moment from 'moment';

let container;

describe("testing for display value", () => {
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    })

    it("Display value of all the data", async () => {
        /*act(() => {
            ReactDOM.createRoot(container).render(<>
                <PayrollForm submitHandler={submitHandler}/>
            </>)
        });*/

        ReactDOM.render(<PayrollForm />, container);

        //Employee name
        const employeeNameInput = screen.getByPlaceholderText(/Employee name/i);
        userEvent.type(employeeNameInput, "Kalidas");
        expect(employeeNameInput).toHaveDisplayValue(/Kalidas/i);

        //Employee code
        const employeeCodeInput = screen.getByPlaceholderText(/Employee code/i);
        userEvent.type(employeeCodeInput, "R234RE");
        expect(employeeCodeInput).toHaveDisplayValue(/R234RE/i);

        //Employee address
        const employeeAddressInput = screen.getByPlaceholderText(/Employee address/i);
        userEvent.type(employeeAddressInput, "No: 783, mkr street, rajakilpskkam, chennai - 34");
        expect(employeeAddressInput).toHaveDisplayValue(/No: 783, mkr street, rajakilpskkam, chennai - 34/i);

        //Aadhar number
        const aaharNumberInput = screen.getByPlaceholderText(/Aadhar number/i);
        userEvent.type(aaharNumberInput, "879012345432");
        expect(aaharNumberInput).toHaveDisplayValue(/879012345432/i);

        //month
        const monthInput = screen.getByTestId("date-picker");
        screen.debug(monthInput);
        fireEvent.click(monthInput);
        fireEvent.change(monthInput, { target: { value: "01-1999" }});
        //fireEvent.click(document.querySelectorAll(".ant-picker-cell-selected")[0]);
        screen.debug(monthInput);
        expect(monthInput).toHaveDisplayValue(/[Tue Dec 01 2020 00:00:00 GMT+0530]/i);

        //Department
        const departmentInput = screen.getByPlaceholderText(/Department/i);
        userEvent.type(departmentInput, "Electrical");
        expect(departmentInput).toHaveDisplayValue(/Electrical/i);

        //PF number
        const pfNumberInput = screen.getByPlaceholderText(/PF number/i);
        userEvent.type(pfNumberInput, "Tn-1332m4ksudvs00ews99");
        expect(pfNumberInput).toHaveDisplayValue(/Tn-1332m4ksudvs00ews99/i);

        //Paid days
        const paidDaysInput = screen.getByPlaceholderText(/Paid days/i);
        userEvent.type(paidDaysInput, "30");
        expect(paidDaysInput).toHaveDisplayValue(/30/i);

        //Loss of pay
        const lopInput = screen.getByPlaceholderText(/Loss of pay/i);
        userEvent.type(lopInput, "1");
        expect(lopInput).toHaveDisplayValue(/1/i);

        //UAN number
        const uanInput = screen.getByPlaceholderText(/UAN number/i);
        userEvent.type(uanInput, "999996789012");
        expect(uanInput).toHaveDisplayValue(/999996789012/i);

        //Designation
        const designationInput = screen.getByPlaceholderText(/Designation/i);
        userEvent.type(designationInput, "Consultant");
        expect(designationInput).toHaveDisplayValue(/Consultant/i);

        //Bank account number
        const accountInput = screen.getByPlaceholderText(/Bank account number/i);
        userEvent.type(accountInput, "123456789876");
        expect(accountInput).toHaveDisplayValue(/123456789876/i);

        //HRA
        const hraInput = screen.getByPlaceholderText(/HRA/i);
        userEvent.type(hraInput, "2000");
        expect(hraInput).toHaveDisplayValue(/2000/i);

        //Basic
        const basicInput = screen.getByPlaceholderText(/Basic/i);
        userEvent.type(basicInput, "8000");
        expect(basicInput).toHaveDisplayValue(/8000/i);

        //Conveyance allowance
        const conveyanceInput = screen.getByPlaceholderText(/Conveyance allowance/i);
        userEvent.type(conveyanceInput, "2000");
        expect(conveyanceInput).toHaveDisplayValue(/2000/i);

        //Special allowance
        const specialAllowanceInput = screen.getByPlaceholderText(/Special allowance/i);
        userEvent.type(specialAllowanceInput, "1500");
        expect(specialAllowanceInput).toHaveDisplayValue(/1500/i);

        //Bonus
        const bonusInput = screen.getByPlaceholderText(/Bonus/i);
        userEvent.type(bonusInput, "2000");
        expect(bonusInput).toHaveDisplayValue(/2000/i);

        //PF amount
        const pfAmountInput = screen.getByPlaceholderText(/PF amount/i);
        userEvent.type(pfAmountInput, "1500");
        expect(pfAmountInput).toHaveDisplayValue(/1500/i);

        //ESI
        const esiInput = screen.getByPlaceholderText(/ESI amount/i);
        userEvent.type(esiInput, "1000");
        expect(esiInput).toHaveDisplayValue(/1000/i);

        //Professional tax
        const professionalInput = screen.getByPlaceholderText(/Professional tax/i);
        userEvent.type(professionalInput, "250");
        expect(professionalInput).toHaveDisplayValue(/250/i);

        //Generate pay slip
        const generateButton = screen.getByRole("button", { name: /Generate/i });
        //fireEvent.submit(generateButton);
        userEvent.click(generateButton);
        //expect(submitHandler).toHaveBeenCalled();

        //const duplicateErrorCode = screen.getByText("")


        //CHECK DISPLAY OF CONTENT IN EMPLOYEE TABLE AND PAYSLIP
        const displayedEmployeeNameTable = screen.queryAllByText(/Kalidas/i)[0];
        expect(displayedEmployeeNameTable).toBeInTheDocument();
        const displayedEmployeeNameSlip = screen.getByText(/Employee name: Kalidas/i);
        expect(displayedEmployeeNameSlip).toBeInTheDocument();

        const displayedEmpCodeTable = screen.getAllByText(/R234RE/i)[0];
        expect(displayedEmpCodeTable).toBeInTheDocument();
        const displayedEmpCodeSlip = screen.getByText(/Employee code: R234RE/i);
        expect(displayedEmpCodeSlip).toBeInTheDocument();

        const displayedDepartmentTable = screen.getAllByText(/Electrical/i)[0];
        const displayedDepartmentSlip = screen.getAllByText(/Electrical/i)[1];
        expect(displayedDepartmentSlip).toBeInTheDocument();
        expect(displayedDepartmentTable).toBeInTheDocument();

        const displayedDesigantionTable = screen.getAllByText(/Consultant/i)[0];
        const displayedDesigantionSlip = screen.getByText(/Designation: Consultant/i);
        expect(displayedDesigantionTable).toBeInTheDocument();
        expect(displayedDesigantionSlip).toBeInTheDocument();

        const paidDaysTable = screen.getAllByText(/30/i)[0];
        const paidDaysSlip = screen.getByText(/Paid days: 30/i);
        expect(paidDaysTable).toBeInTheDocument();
        expect(paidDaysSlip).toBeInTheDocument();

        const lopTable = screen.getAllByText(/1/i)[0];
        const lopSlip = screen.getByText(/Loss of Pay: 1/i);
        expect(lopTable).toBeInTheDocument();
        expect(lopSlip).toBeInTheDocument();

        const uanTable = screen.getAllByText(/999996789012/i)[0];
        const uanSlip = screen.getByText(/UAN: 999996789012/i);
        expect(uanTable).toBeInTheDocument();
        expect(uanSlip).toBeInTheDocument();

        const aadharTable = screen.getAllByText(/879012345432/i)[0];
        const aadharSlip = screen.getByText(/Aadhar number: 879012345432/i);
        expect(aadharTable).toBeInTheDocument();
        expect(aadharSlip).toBeInTheDocument();

        const addressSlip = screen.getByText(/Employee address: No: 783, mkr street, rajakilpskkam, chennai - 34/i);
        expect(addressSlip).toBeInTheDocument();

        const pfNumberSlip = screen.getByText(/PF number: Tn-1332m4ksudvs00ews99/i);
        expect(pfNumberSlip).toBeInTheDocument();

        const accountSlip = screen.getByText(/Bank account number: 123456789876/i);
        expect(accountSlip).toBeInTheDocument();

        const showButton = screen.getAllByRole("button", {name: /Show/i})[0];
        expect(showButton).toBeInTheDocument();
        const hideButton = screen.getAllByRole("button", {name: /Hide/i})[0];
        expect(hideButton).toBeInTheDocument();
        const printButton = screen.getByRole("button", { name: /Print/i});
        expect(printButton).toBeInTheDocument();

        const companyAddress = screen.getByText(/No: 7, Kaliamman kovil street, Rathnapuri, Chennai-600107/i);
        expect(companyAddress).toBeInTheDocument();

        const paySlipMonth = screen.queryByText(/Payslip for the month: /i);
        screen.debug(paySlipMonth);

        employeeCodeInput.setSelectionRange(0, 6);
        userEvent.type(employeeCodeInput, "{backspace}R234RE");
        userEvent.click(generateButton);
        const duplicateErrorEmpCode = screen.getByText(/Duplicate Employee code is not allowed/i);
        expect(duplicateErrorEmpCode).toBeInTheDocument();
        employeeCodeInput.setSelectionRange(0,6);
        userEvent.type(employeeCodeInput, "{backspace}");
        userEvent.click(generateButton);
        const emptyEmpCodeError = screen.getByText(/Employee code should not be empty/i);
        expect(emptyEmpCodeError).toBeInTheDocument();

    })
})