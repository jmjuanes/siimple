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
            <div className="modal is-medium has-text-gray-700 has-mx-6-mobile">
                <div className="is-flex has-items-center has-mb-4">
                    <div className="title is-3 has-mb-0">Share</div>
                    <div className="close has-ml-auto" onClick={props.onClose} />
                </div>
                <div className="paragraph">
                    You can use the following URL for sharing your code:
                </div>
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
