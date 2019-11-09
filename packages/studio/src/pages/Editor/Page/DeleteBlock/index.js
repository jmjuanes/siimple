import React from "react";
import {Modal, ModalHeader, ModalBody} from "@siimple/neutrine";
import {Btn} from "@siimple/neutrine";

//Export delete block modal component
export function DeleteBlockModal (props) {
    return (
        <Modal size="small">
            <ModalHeader title={props.title} onClose={props.onCancel} />
            <ModalBody>
                {/* Modal content */}
                <div className="siimple--mb-3">
                    Are you sure you want to delete <strong>{props.item}</strong>? This action can not be undone.
                </div>
                {/* Confirmation buttons */}
                <div align="right">
                    <Btn color="" className="siimple--mr-1" onClick={props.onCancel}>
                        <strong>Cancel</strong>
                    </Btn>
                    <Btn color="error" onClick={props.onSubmit}>
                        Yes, <strong>delete</strong>
                    </Btn>
                </div>
            </ModalBody>
        </Modal>
    );
}

DeleteBlockModal.defaultProps = {
    "title": "Delete",
    "onSubmit": null,
    "onCancel": null
};

