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
                <Neutrine.AppToolbarWrapper collapsed={this.state.collapsed}>
                    <Neutrine.AppToolbar theme="dark">
                        <Neutrine.AppLogo>
                            Dashboard
                        </Neutrine.AppLogo>
                        <Neutrine.AppToolbarGroup text="Group 1" />
                        <Neutrine.AppToolbarItem text="Home" icon="home" active={true} />
                        <Neutrine.AppToolbarItem text="Profile" icon="user" />
                        <Neutrine.AppToolbarSeparator />
                        <Neutrine.AppToolbarItem text="Admin" icon="gear" />
                        <Neutrine.AppToolbarToggle onClick={this.handleToggleClick} />
                    </Neutrine.AppToolbar>
                    <div>
                        <Neutrine.AppMain fluid={false}>
                            Hello world!
                        </Neutrine.AppMain>
                    </div>
                </Neutrine.AppToolbarWrapper>
            );
        }
    };
    //Mount layout test component
    ReactDOM.render(<LayoutTest />, document.getElementById("root"));
});


