import React from "react";

export const ModalExample = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <React.Fragment>
            <div align="center" className="has-mb-4">
                <div className="button is-full" onClick={() => setVisible(true)}>
                    <strong>Display modal</strong>
                </div>
            </div>
            {visible ? (
                <div className="scrim">
                    <div className="modal">
                        <div className="is-flex has-items-center">
                            <h4 className="has-mb-none">Modal</h4>
                            <div
                                className="close has-ml-auto"
                                onClick={() => setVisible(false)}
                            />
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
