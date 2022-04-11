import { act } from "react-dom/test-utils";
import { screen, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import PayrollForm from "./index";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import PaySlip from "../PaySlip";

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
        const monthInput = screen.getByPlaceholderText(/month/i);
        userEvent.click(monthInput);
        userEvent.type(monthInput, "February 2022");
        userEvent.click(monthInput);
        expect(monthInput).toHaveDisplayValue(/February 2022/i);

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
        fireEvent.click(generateButton);
        screen.debug(generateButton);
        //expect(submitHandler).toHaveBeenCalled();

        const displayedEmployeeName = screen.queryAllByText(/Kalidas/i)[0];
        // screen.debug();
        expect(displayedEmployeeName).toBeInTheDocument();

    })
})