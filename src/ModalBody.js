let ModalBody = ({type}) => {
    return <>
        <div className="modal-body">
            <div id={`${type}ModalId`} className="row">
                <div className="col-sm-3 col-5 offset-1 fw-bold text-color">Id</div>
                <span className="w-auto fw-bold text-color">:</span>
                <div className="mx-sm-3 mx-1 w-auto data secondary-color"></div>
            </div>
            <div id={`${type}ModalDestination`} className="row">
                <div className="col-sm-3 col-5 offset-1 fw-bold text-color">Destination</div>
                <span className="w-auto fw-bold text-color">:</span>
                <div className="mx-sm-3 mx-1 w-auto data secondary-color"></div>
            </div>
            <div id={`${type}ModalDate`} className="row">
                <div className="col-sm-3 col-5 offset-1 fw-bold text-color">Date</div>
                <span className="w-auto fw-bold text-color">:</span>
                <div className="mx-sm-3 mx-1 w-auto data secondary-color"></div>
            </div>
            <div id={`${type}ModalTime`} className="row">
                <div className="col-sm-3 col-5 offset-1 fw-bold text-color">Time</div>
                <span className="w-auto fw-bold text-color">:</span>
                <div className="mx-sm-3 mx-1 w-auto data secondary-color"></div>
            </div>
            <div id={`${type}ModalPilotName`} className="row">
                <div className="col-sm-3 col-5 offset-1 fw-bold text-color">Pilot</div>
                <span className="w-auto fw-bold text-color">:</span>
                <div className="mx-sm-3 mx-1 w-auto data secondary-color"></div>
            </div>
        </div>
    </>
}

export default ModalBody;