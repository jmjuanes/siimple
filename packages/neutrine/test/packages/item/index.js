Neutrine.ready(function () {
    let ItemTest = function (props) {
        return (
            <div className="siimple--px-5 siimple--py-5">
                <Neutrine.GridRow>
                    <Neutrine.GridCol size="4">
                        <Neutrine.Item>
                            <Neutrine.ItemBefore>
                                <Neutrine.ItemIcon icon="rocket" className="siimple--color-dark siimple--bg-light" />
                            </Neutrine.ItemBefore>
                            <Neutrine.ItemContent>
                                <Neutrine.Heading type="h6" className="siimple--mb-0">
                                    testing.html
                                </Neutrine.Heading>
                                <div style={{"fontSize":"13px"}} className="siimple-small">
                                    Uploaded by <strong>username</strong> · 2Kb
                                </div>
                            </Neutrine.ItemContent>
                            <Neutrine.ItemAfter className="siimple--py-1">
                                <Neutrine.Icon icon="pen" style={{"fontSize":"20px"}} className="siimple--color-dark" />
                            </Neutrine.ItemAfter>
                            <Neutrine.ItemAfter className="siimple--py-1">
                                <Neutrine.Icon icon="trash" style={{"fontSize":"20px"}} className="siimple--color-dark" />
                            </Neutrine.ItemAfter>
                        </Neutrine.Item>
                    </Neutrine.GridCol>
                </Neutrine.GridRow>
            </div>
        );
    };
    ReactDOM.render(<ItemTest />, document.getElementById("root"));
});

