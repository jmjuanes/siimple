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
                    <Neutrine.Toolbar>
                        <Neutrine.ToolbarItem text="Home" icon="home" active={true} />
                        <Neutrine.ToolbarItem text="Profile" icon="user" />
                        <Neutrine.ToolbarSeparator />
                        <Neutrine.ToolbarItem text="Admin" icon="gear" />
                        <Neutrine.ToolbarToggle onClick={this.handleToggleClick} />
                    </Neutrine.Toolbar>
                    <div>
                        Hello world!
                    </div>
                </Neutrine.ToolbarWrapper>
            );
        }
    };
    //Mount layout test component
    ReactDOM.render(<LayoutTest />, document.getElementById("root"));
});


