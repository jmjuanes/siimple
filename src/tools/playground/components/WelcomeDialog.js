import React from "react";
import {ForEach} from "siimple-react";
import {Modal, ModalBody, ModalFooter} from "siimple-react";
import {Title, Paragraph} from "siimple-react";
import {Btn, Rule} from "siimple-react";
import {Icon} from "siimple-react";
import {Navigation, NavigationItem} from "siimple-react";
import {Placeholder} from "siimple-react";

//Feature block
const Feature = function (props) {
    return (
        <div className="siimple-media has-mb-4 has-text-large">
            <div className="siimple-media-start">
                <div className="has-rounded-full has-p-2 has-bg-white has-bg-opacity-20">
                    <Icon icon={props.icon} className="has-text-large" />
                </div>
            </div>
            <div className="siimple-media-content">{props.children}</div>
        </div>
    );
};

//Export welcome dialog
export function WelcomeDialog (props) {
    const style = {
        //"maxWidth": "500px",
        "maxHeight": "90vh"
    }
    //Render the welcome dialog component
    return (
        <Modal size="small">
            <ModalBody className="has-bg-dark has-text-white has-p-10" style={style}>
                {/* Playground title */}
                <div align="center" className="has-py-10">
                    <Icon icon="siimple" style={{"fontSize":"5rem"}} />
                    <div className="has-text-huge has-pt-3">
                        Welcome to <strong>Sandbox</strong>!
                    </div>
                </div>
                {/* Features */}
                <Feature icon="star">Try the latest features of the <strong>Siimple</strong> toolkit.</Feature>
                <Feature icon="box">Load external stuff from a CDN (like styles or scripts form other toolkits).</Feature>
                <Feature icon="share">Export sandboxes or generate a shareable url.</Feature>
            </ModalBody>
            <ModalFooter className="has-bg-dark">
                <Btn full color="primary" onClick={props.onClose}>
                    <strong>Let's get started!</strong>
                </Btn>
            </ModalFooter>
        </Modal>
    );
}


