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
                <Neutrine.AppbarWrapper>
                    <Neutrine.Appbar>
                        <Neutrine.AppbarBrand />
                        <Neutrine.AppbarItem icon="menu" />
                        <Neutrine.AppbarDivider />
                        <Neutrine.AppbarItem active icon="gear" />
                        <Neutrine.AppbarAvatar />
                    </Neutrine.Appbar>
                    <Neutrine.ToolbarWrapper collapsed={this.state.collapsed}>
                        <Neutrine.Toolbar theme="dark">
                            <Neutrine.ToolbarBrand>
                                    Dashboard
                            </Neutrine.ToolbarBrand>
                            <Neutrine.ToolbarGroup text="Group 1" />
                            <Neutrine.ToolbarItem text="Home" icon="home" active={true} />
                            <Neutrine.ToolbarItem text="Profile" icon="user" />
                            <Neutrine.ToolbarSeparator />
                            <Neutrine.ToolbarItem text="Admin" icon="gear" />
                        </Neutrine.Toolbar>
                        <Neutrine.ToolbarToggle onClick={this.handleToggleClick} />
                        <div style={{"minHeight":"2000px"}}>
                            Hello world!
                        </div>
                    </Neutrine.ToolbarWrapper>
                </Neutrine.AppbarWrapper>
            );
        }
    };
    //Mount layout test component
    ReactDOM.render(<LayoutTest />, document.getElementById("root"));
});


