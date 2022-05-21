import React from "react";
import TableRow from "./TableRow";
import {flightContext} from "./App";
import { useContext } from "react/cjs/react.development";

let TableSection = () => {
    let {rows} = useContext(flightContext);

    return (
        <>
            <div className="container-lg  mt-5 overflow-auto">
                <table className="container-fluid table table-responsive table-hover border" id="flightData">
                    <thead className="">
                        <tr className=" border-secondary">
                            <th className="col-1 text-center secondary-color">Id</th>
                            <th className="col-3 text-center secondary-color">Destination</th>
                            <th className="col-2 text-center secondary-color">Date</th>
                            <th className="col-1 text-center secondary-color">Time</th>
                            <th className="col-2 text-center secondary-color">Pilot</th>
                            <th className="last-table-column-data col-3 text-center secondary-color">Action</th>
                        </tr>
                    </thead>
                    <tbody id="flightSchedulesData">
                        {rows.map(({ identity, id, name, destination, date, time }, index) => {
                            return <TableRow key={index}
                            identity={identity} 
                            id={id} 
                            destination={destination} 
                            date={date} 
                            time={time} 
                            name={name} 
                           />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableSection;