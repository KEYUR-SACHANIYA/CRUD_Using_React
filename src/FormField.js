import React from "react";

let FormField = ({id,type,text,eventfunction}) => {
    return (
        <>
            <div className="row mt-2 mt-sm-3">
                <label htmlFor={id} className="text-color col-lg-2 col-sm-3 offset-lg-2 offset-sm-1">
                    {text}
                </label>
                <div className=" col-lg-6 col-sm-7">
                    <input type={type} className="text-color form-control form-control-sm" onBlur={eventfunction} id={id} autoComplete="off" />
                </div>
            </div>
        </>
    );
}

export default FormField;