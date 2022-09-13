import React from "react";

// Share modal
export const ShareModal = props => {
    const [copied, setCopied] = React.useState(false);
    const handleCopyClick = () => {
        navigator.clipboard.writeText(props.url).then(() => {
            setCopied(true);
        });
    };

    return (
        <div className="scrim">
            <div className="modal is-medium has-text-dark has-ml-6-mobile has-mr-6-mobile">
                <div className="is-flex has-items-center has-mb-4">
                    <h3 className="has-mb-none">Share</h3>
                    <div className="close has-ml-auto" onClick={props.onClose} />
                </div>
                <p>You can use the following URL for sharing your code:</p>
                <div className="has-mb-6">
                    <textarea
                        className="textarea has-size-0"
                        rows="5"
                        readOnly
                        defaultValue={props.url}
                    />
                </div>
                <button
                    className="button has-w-full is-flex has-items-center has-justify-center"
                    onClick={() => handleCopyClick()}
                >
                    <i className="si-copy has-pr-1 has-size-2" />
                    <strong>{copied ? "Copied!" : "Copy to clipboard"}</strong>
                </button>
            </div>
        </div>
    );
};
