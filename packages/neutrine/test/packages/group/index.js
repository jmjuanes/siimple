Neutrine.ready(function () {
    //Group test component
    let GroupTest = function () {
        let items = [1, 2, 3, 4].map(function (index) {
            return (
                <Neutrine.GroupRow border key={index}>
                    <Neutrine.GroupColumn>
                        <Neutrine.Check checked={true} />
                    </Neutrine.GroupColumn>
                    <Neutrine.GroupColumn align="left" style={{"width":"50px"}}>
                        <Neutrine.GroupIcon icon="rocket" />
                    </Neutrine.GroupColumn>
                    <Neutrine.GroupColumn primary>
                        <Neutrine.GroupTitle>Test group 1</Neutrine.GroupTitle>
                        <Neutrine.GroupDescription>Test group 1 description goes here</Neutrine.GroupDescription>
                    </Neutrine.GroupColumn>
                    <Neutrine.GroupColumn align="center">
                        <Neutrine.GroupText>
                            Text <strong>example</strong>
                        </Neutrine.GroupText>
                    </Neutrine.GroupColumn>
                    <Neutrine.GroupColumn align="center" style={{"width":"100px"}}>
                        <Neutrine.GroupLabel color="primary" text="Test label" />
                    </Neutrine.GroupColumn>
                    <Neutrine.GroupColumn visibleOnlyOnHover>
                        <Neutrine.GroupAction icon="pen" />
                        <Neutrine.GroupAction icon="settings" />
                        <Neutrine.GroupAction icon="trash" />
                    </Neutrine.GroupColumn>
                </Neutrine.GroupRow>
            );
        });
        //Render all element
        let renderAddGroup = function () {
            return (
                <Neutrine.GroupRow border dashed>
                    <Neutrine.GroupColumn primary align="center">
                        <Neutrine.GroupAdd />
                    </Neutrine.GroupColumn>
                </Neutrine.GroupRow>
            );
        };
        //Return the group container
        return (
            <Neutrine.Group style={{"margin":"40px"}}>
                {renderAddGroup()}
                {items}
            </Neutrine.Group>
        );
    };
    //Mount group test component
    ReactDOM.render(<GroupTest />, document.getElementById("root"));
});

