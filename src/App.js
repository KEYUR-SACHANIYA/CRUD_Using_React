import React, { createContext, useState } from "react";
import FormSection from "./FormSection";
import ModalBox from "./ModalBox";
import TableSection from "./TableSection";

export let flightContext = createContext();

let App = () => {
    let [rows, setRows] = useState([]);

    let getFormElements = () => {
        let id = document.getElementById("flightId");
        let destination = document.getElementById("flightDestination");
        let date = document.getElementById("flightDate");
        let time = document.getElementById("flightTime");
        let name = document.getElementById("flightPilotName");
        return { id, destination, date, time, name };
    }
 
    let resetFormElements = () => {
        let { id, destination, date, time, name } = getFormElements();
        id.value = "";
        destination.value = '';
        date.value = "";
        time.value = "";
        name.value = "";
    }

    let getFlightSchedulesColumns = (rowId) => {
        let row = document.getElementById(rowId);
        let flightId = row.querySelector(".flight-id");
        let flightDestination = row.querySelector(".flight-destination");
        let flightDate = row.querySelector(".flight-date");
        let flightTime = row.querySelector(".flight-time");
        let flightPilotName = row.querySelector(".flight-pilot-name");
        return { flightId, flightDestination, flightDate, flightTime, flightPilotName }
    }

    let removeAllValidationError = () => {
        let obj = getFormElements();
        for (let ele in obj) {
            removeValidationError(obj[ele]);
        }
    }

    let removeValidationError = (element) => {
        if (element.parentElement.querySelector(".error-message") != null) {
            element.style.borderColor = "#ced4da";
            if (element.getAttribute("id") === "flightTime") {
                document.querySelector(".row.mt-2 label[for='flightDate']").style.color = "#154094";
            }
            else {
                document.querySelector(`.row.mt-2 label[for=${element.getAttribute("id")}]`).style.color = "#154094";
            }
            element.nextElementSibling.remove();
        }
    }

    let showAddButton = () => {
        document.getElementById("flightAddButton").classList.remove("d-none");
        document.getElementById("flightUpdateButton").classList.add("d-none");
    }

    let deleteFooter = <div className="modal-footer justify-content-around">
                            <button type="button" className="btn btn-outline-danger align-self-start modal-delete-button col-4 col-md-2 col-sm-3"                            data-bs-dismiss="modal">Delete</button>
                            <button type="button" className="btn btn-outline-success col-4 col-sm-3 col-md-2" data-bs-dismiss="modal">Close</button>
                        </div>;

    let viewFooter = <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                     </div>;

    let allFunctions = { rows, setRows, getFormElements, resetFormElements, showAddButton, removeValidationError, getFlightSchedulesColumns, removeAllValidationError };

    return <>
        <flightContext.Provider value={allFunctions}>
            <FormSection />
            <TableSection />
        </flightContext.Provider>

        <ModalBox type="view" footer={viewFooter} />

        <ModalBox type="delete" footer={deleteFooter} />
    </>;
}

export default App;
