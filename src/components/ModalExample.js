import React from "react";

export const ModalExample = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <React.Fragment>
            <div align="center" className="has-mb-4">
                <div className="btn is-full" onClick={() => setVisible(true)}>
                    <strong>Display modal</strong>
                </div>
            </div>
            {visible ? (
                <div className="scrim">
                    <div className="modal">
                        <div className="has-flex has-items-center">
                            <div className="title is-4 has-mb-0">
                                <strong>Modal</strong>
                            </div>
                            <div className="close has-ml-auto" onClick={() => setVisible(false)} />
                        </div>
                        <div className="has-pt-6">
                            Content of the modal
                        </div>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    );
};
