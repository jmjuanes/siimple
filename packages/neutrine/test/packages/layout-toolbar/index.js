Neutrine.ready(function () {
    let ToolbarTest = function (props) { 
        return (
            <Neutrine.ToolbarContainer collapsed={false}>
                <Neutrine.Toolbar>
                    <Neutrine.ToolbarGroup>Group 1</Neutrine.ToolbarGroup>
                    <Neutrine.ToolbarItem active={true}>Item 1</Neutrine.ToolbarItem>
                    <Neutrine.ToolbarItem active={false}>Item 2</Neutrine.ToolbarItem>
                    <Neutrine.ToolbarToggle />
                </Neutrine.Toolbar>
                Hello world
            </Neutrine.ToolbarContainer>
        );
    };
    //Mount toolbar test component
    ReactDOM.render(<ToolbarTest />, document.getElementById("root"));
});


