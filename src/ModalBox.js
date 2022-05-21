import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";

let ModalBox = ({ type, footer }) => {
    let title = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    type = type.toLowerCase();
    return (
        <>
            <div className="modal fade" id={`modal${title}Section`}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <ModalHeader />
                        <ModalBody type={type} />
                        {footer}
                    </div>
                </div>
            </div>
        </>)
}

export default ModalBox;