import React from "react";
import { useContext } from "react/cjs/react.development";
import { flightContext } from "./App";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

let TableRow = ({ identity, id, destination, date, time, name }) => {
    let { rows, setRows, getFormElements, resetFormElements, showAddButton, getFlightSchedulesColumns, removeAllValidationError } = useContext(flightContext);

    function viewFlightSchedule(rowId) {
        let { flightId, flightDestination, flightDate, flightTime, flightPilotName } = getFlightSchedulesColumns(rowId);

        document.querySelector("#viewModalId .data").innerHTML = flightId.innerHTML;
        document.querySelector("#viewModalDestination .data").innerHTML = flightDestination.innerHTML;
        document.querySelector("#viewModalDate .data").innerHTML = flightDate.innerHTML;
        document.querySelector("#viewModalTime .data").innerHTML = flightTime.innerHTML;
        document.querySelector("#viewModalPilotName .data").innerHTML = flightPilotName.innerHTML;
    }

    let editFlightSchedule = (rowId) => {  
        let { id, destination, date, time, name } = getFormElements();
        let { flightId, flightDestination, flightDate, flightTime, flightPilotName } = getFlightSchedulesColumns(rowId);
        removeAllValidationError();

        id.value = flightId.innerHTML;
        destination.value = flightDestination.innerHTML;
        date.value = flightDate.innerHTML;
        time.value = flightTime.innerHTML;
        name.value = flightPilotName.innerHTML;

        document.getElementById("flightId").setAttribute("disabled", true);
        document.getElementById("flightAddButton").classList.add("d-none");
        let updateButton = document.getElementById("flightUpdateButton");
        updateButton.classList.remove("d-none");
        updateButton.setAttribute("data-id", rowId);
    }

    let deleteFlightSchedule = (rowId) => {
        let { flightId, flightDestination, flightDate, flightTime, flightPilotName } = getFlightSchedulesColumns(rowId);

        document.getElementById("deleteModalId").querySelector(".data").innerHTML = flightId.innerHTML;
        document.getElementById("deleteModalDestination").querySelector(".data").innerHTML = flightDestination.innerHTML;
        document.getElementById("deleteModalDate").querySelector(".data").innerHTML = flightDate.innerHTML;
        document.getElementById("deleteModalTime").querySelector(".data").innerHTML = flightTime.innerHTML;
        document.getElementById("deleteModalPilotName").querySelector(".data").innerHTML = flightPilotName.innerHTML;

        let updateButtonId = document.getElementById("flightUpdateButton").getAttribute("data-id");

        function deleteRow() {
            let filterRows = rows.filter((ele) => {
                let {identity} = ele;

                if(identity == rowId){
                    if (updateButtonId == rowId) {
                        document.getElementById("flightId").removeAttribute("disabled");
                        resetFormElements();
                        showAddButton();
                    }
                    return false;
                }

                return ele;
            });
            setRows(filterRows);
        }
        document.querySelector(".modal-footer .modal-delete-button").onclick = deleteRow;
    }

    return (
        <>
            <tr id={identity} className="align-middle">
                <td className="flight-id col-1 text-break text-center secondary-color px-1 px-sm-2">{id}</td >
                <td className="flight-destination text-break col-3 text-center secondary-color px-1 px-sm-2">{destination}</td>
                <td className="flight-date col-2 text-break text-center secondary-color px-1 px-sm-2">{date}</td>
                <td className="flight-time col-1 text-break text-center secondary-color px-1 px-sm-2">{time}</td>
                <td className="flight-pilot-name  text-break col-3 text-center secondary-color px-1 px-sm-2">{name}</td>
                <td className="col-2 last-table-column-data">
                    <div className="row justify-content-evenly  px-1">
                        <button className="btn rounded-circle w-auto p-1 view-button" data-bs-toggle="modal" data-bs-target="#modalViewSection" onClick={() => viewFlightSchedule(identity)}>
                            <VisibilityIcon id="view-icon"/>
                        </button>
                        <button className="btn rounded-circle w-auto p-1 edit-button" onClick={() => editFlightSchedule(identity)}>
                            <EditIcon id="edit-icon"/>
                        </button>
                        <button className="btn rounded-circle w-auto p-1 delete-button" data-bs-toggle="modal" data-bs-target="#modalDeleteSection"
                            onClick={() => deleteFlightSchedule(identity)}>
                            <DeleteForeverIcon id="delete-icon"/>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default TableRow;
