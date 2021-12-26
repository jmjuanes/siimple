import React from "react";
import {ModalWrapper, ModalBody, ModalFooter} from "siimple-components";
import {Btn} from "siimple-components";
import {FieldHelper} from "siimple-components";
import {Pre, Paragraph} from "siimple-components";
//import {copyTextToClipboard} from "../../utils/clipboard.js";

//Export share pad dialog
export function ShareDialog (props) {
    let handleCopyClick = function () {
        //return copyTextToClipboard(props.url);
    };
    return (
        <ModalWrapper size="small" title="Share Pad" onClose={props.onCancel}>
            <ModalBody className="siimple--pb-0">
                <Paragraph>
                    Your entire pad content <strong>is stored in the following link</strong>. 
                    Use this link to share this pad with other users. 
                    Anyone with the link will be able to run and edit it. 
                </Paragraph>
                <Pre className="siimple--mb-3">{props.url}</Pre>
                <FieldHelper>
                    Remember that this pad is not stored in our server, so you are the only one who can see this pad until yo share it with with another user.
                </FieldHelper>
            </ModalBody>
            <ModalFooter align="right" className="siimple--bg-light1">
                <Btn onClick={handleCopyClick} fluid color="success">
                    <strong>Copy to clipboard</strong>
                </Btn>
            </ModalFooter>
        </ModalWrapper>
    );
}


