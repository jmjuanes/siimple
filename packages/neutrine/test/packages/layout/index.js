Neutrine.ready(function () {
    class LayoutTest extends React.Component { 
        constructor(props) {
            super(props);
            this.state = {
                "collapsed": true
            };
            //Bind toggle click
            this.handleToggleClick = this.handleToggleClick.bind(this);
        }
        //On header toggle click
        handleToggleClick(event) {
            return this.setState({
                "collapsed": !this.state.collapsed
            });
        }
        render(props) {
            return (
                <Neutrine.ToolbarWrapper collapsed={this.state.collapsed}>
                    <Neutrine.Toolbar theme="dark">
                        <Neutrine.ToolbarLogo>
                            Dashboard
                        </Neutrine.ToolbarLogo>
                        <Neutrine.ToolbarGroup text="Group 1" />
                        <Neutrine.ToolbarItem text="Home" icon="home" active={true} />
                        <Neutrine.ToolbarItem text="Profile" icon="user" />
                        <Neutrine.ToolbarSeparator />
                        <Neutrine.ToolbarItem text="Admin" icon="gear" />
                        <Neutrine.ToolbarToggle onClick={this.handleToggleClick} />
                    </Neutrine.Toolbar>
                    <div>
                        <Neutrine.Appbar theme="dark">
                            <Neutrine.AppbarLogo>
                                Dashboard
                            </Neutrine.AppbarLogo>
                            <Neutrine.AppbarItem icon="home">
                                Go to <strong>home</strong>
                            </Neutrine.AppbarItem>
                            <Neutrine.AppbarItem icon="save">
                                Save <strong>session</strong>
                            </Neutrine.AppbarItem>
                        </Neutrine.Appbar>
                        <div style={{"minHeight":"2000px"}}>
                            Hello world!
                        </div>
                    </div>
                </Neutrine.ToolbarWrapper>
            );
        }
    };
    //Mount layout test component
    ReactDOM.render(<LayoutTest />, document.getElementById("root"));
});


