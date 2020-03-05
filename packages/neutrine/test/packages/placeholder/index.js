Neutrine.ready(function () {
    function PlaceholderTest (props) {
        return (
            <div style={{"padding":"50px"}}>
                {/* Basic example */}
                <Neutrine.Placeholder hover>
                    <Neutrine.Icon icon="plus" style={{"fontSize":"24px"}} />
                    <div className="siimple--text-bold">
                        Add more content
                    </div>
                </Neutrine.Placeholder>
                {/* Solid border example */}
                <Neutrine.Placeholder hover border="solid">
                    <Neutrine.Icon icon="plus" style={{"fontSize":"24px"}} />
                    <div className="siimple--text-bold">
                        Add more content
                    </div>
                </Neutrine.Placeholder>
                {/* Placeholder state */}
                <Neutrine.Placeholder fill style={{"padding":"50px"}}>
                    <Neutrine.Icon icon="archive" size="50px" />
                    <div className="siimple--mt-2">
                        <Neutrine.Heading type="h5" className="siimple--mb-1">
                            No files available
                        </Neutrine.Heading>
                        <div className="siimple--mb-0">
                            Click on <strong>create a new file</strong> to get started!
                        </div>
                    </div>
                </Neutrine.Placeholder>
            </div>
        );
    };
    //Mount Placeholder test component
    ReactDOM.render(<PlaceholderTest />, document.getElementById("root"));
});

