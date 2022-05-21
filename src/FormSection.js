import React,{useContext} from "react";
import FormField from "./FormField";
import {flightContext} from "./App";

let FormSection = () => {

    let  {rows, setRows ,getFormElements,resetFormElements,showAddButton,removeValidationError,removeAllValidationError} = useContext(flightContext);

    let addValidationError = (element) => {
        if (element.parentElement.querySelector(".error-message") == null) {

            element.style.borderColor = "red";

            if (element.getAttribute("id") === "flightTime") {
                document.querySelector(".row.mt-2 label[for='flightDate']").style.color = "red";
            }
            else {
                document.querySelector(`.row.mt-2 label[for=${element.getAttribute("id")}]`).style.color = "red";
            }

            let errorTag = document.createElement("span");
            let errorMessage = document.createTextNode("Please fill the data");
            errorTag.appendChild(errorMessage);
            element.parentElement.appendChild(errorTag);
            errorTag.setAttribute("class", "error-message");

        }
    }

    let addFlightSchedule = () => {
        console.log("onclick event");
        let obj = getFormElements();
        let { id, destination, date, time, name } = obj;

        if (id.value && destination.value && date.value && time.value && name.value) {
            let uniqueID = new Date().getTime();
            let singleRow = { identity: uniqueID, id: id.value, destination: destination.value, date: date.value, time: time.value, name: name.value };

            setRows((prev) => {
                return [...prev, singleRow];
            });

            setTimeout(resetFormElements, 0);
        }
        else {
            for (let ele in obj) {
                if (obj[ele].value === "") {
                    addValidationError(obj[ele]);
                }
            }
        }
    }

    let updateFlightSchedule = ({ target }) => {
        let { id, destination, date, time, name } = getFormElements();
        let rowId = target.getAttribute("data-id");

        if (id.value && destination.value && date.value && time.value && name.value) {
           
            let UpdateRows = rows.map((ele) => {
                let { identity } = ele;
                if (identity == rowId) {
                    return { identity: rowId, id: id.value, date: date.value, destination: destination.value, time: time.value, name: name.value };
                }
                return ele;
            });
            setRows(UpdateRows);

            setTimeout(resetFormElements, 0);
            showAddButton();
            document.getElementById("flightId").removeAttribute("disabled");
        }
    }

    let resetFlightSchedule = () => {
        document.getElementById("flightId").removeAttribute("disabled");
        showAddButton();
        removeAllValidationError();
    }

    let validateInput = ({ target }) => {
        console.log("onfocusout event");
        if (target.value === "") {
            addValidationError(target);
        }
        else {
            removeValidationError(target);
        }
    }

    return (<>
        <div className="container-lg">
            <div className="container-fluid mt-4 py-4 border rounded bg-white">
                <form>
                   
                    <FormField type="number" text="Flight Id" id="flightId" eventfunction={validateInput}/>

                    <FormField type="text" text="Destination" id="flightDestination" eventfunction={validateInput}/>

                    <div className="row mt-2 mt-sm-3">
                        <label htmlFor="flightDate" className="text-color col-lg-2 col-sm-3 offset-lg-2 offset-sm-1">
                            Date & Time
                        </label>
                        <div className="col-lg-6 col-sm-7">
                            <div className="row d-flex justify-content-between">
                                <div className="col-sm-6">
                                    <input type="date" onBlur={validateInput} id="flightDate" className="text-color form-control form-control-sm" />
                                </div>
                                <div className="col-sm-6 mt-2 mt-sm-0">
                                    <input type="time" onBlur={validateInput} id="flightTime" className="text-color form-control form-control-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <FormField type="text" id="flightPilotName" text="Pilot Name" eventfunction={validateInput}/>

                    <div className="row mt-4 mb-3 form-button justify-content-center">
                        <button type="button" id="flightAddButton"
                            className="col-3 col-sm-2 col-lg-1 btn button-style px-0 fw-bold"
                            onMouseDown={addFlightSchedule}>Add</button>
                        <button type="button" id="flightUpdateButton"
                            className="d-none col-3 col-sm-2 col-lg-1 btn button-style fw-bold" onMouseDown={updateFlightSchedule}>Update</button>
                        <button type="reset" id="flightResetButton"
                            className="col-3 col-sm-2 col-lg-1 btn mx-3 fw-bold" onMouseDown={resetFlightSchedule}>Reset</button>
                    </div>

                </form>
            </div>
        </div>
    </>)
}

export default FormSection;