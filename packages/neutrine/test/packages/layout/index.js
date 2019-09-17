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
                <Neutrine.AppSideWrapper collapsed={this.state.collapsed}>
                    <Neutrine.AppSide>
                        <Neutrine.AppSideGroup text="Group 1" />
                        <Neutrine.AppSideItem text="Home" icon="home" active={true} />
                        <Neutrine.AppSideItem text="Profile" icon="user" />
                        <Neutrine.AppSideSeparator />
                        <Neutrine.AppSideItem text="Admin" icon="gear" />
                        <Neutrine.AppSideToggle onClick={this.handleToggleClick} />
                    </Neutrine.AppSide>
                    <div>
                        Hello world!
                    </div>
                </Neutrine.AppSideWrapper>
            );
        }
    };
    //Mount layout test component
    ReactDOM.render(<LayoutTest />, document.getElementById("root"));
});


