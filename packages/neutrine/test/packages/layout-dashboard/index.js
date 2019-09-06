Neutrine.ready(function () {
    class DashboardTest extends React.Component { 
        constructor(props) {
            super(props);
            this.state = {
                "sidebarVisible": true
            };
            //Bind toggle click
            this.handleToggleClick = this.handleToggleClick.bind(this);
        }
        //On header toggle click
        handleToggleClick(event) {
            return this.setState({
                "sidebarVisible": !this.state.sidebarVisible
            });
        }
        render(props) {
            return (
                <Neutrine.Dashboard light collapseSidebar={!this.state.sidebarVisible}>
                    <Neutrine.DashboardHeader>
                        <Neutrine.DashboardHeaderToggle onClick={this.handleToggleClick} />
                        <Neutrine.DashboardHeaderTitle>
                            Dashboard
                        </Neutrine.DashboardHeaderTitle>
                        <Neutrine.DashboardHeaderSubtitle style={{"marginLeft": "5px"}}>
                            Testing dashboard page
                        </Neutrine.DashboardHeaderSubtitle>
                    </Neutrine.DashboardHeader>
                    <Neutrine.DashboardSidebar>
                        <Neutrine.DashboardSidebarItem text="Home" icon="home" active={true} />
                        <Neutrine.DashboardSidebarItem text="Profile" icon="user" />
                        <Neutrine.DashboardSidebarSeparator />
                        <Neutrine.DashboardSidebarItem text="Admin" icon="settings" />
                    </Neutrine.DashboardSidebar>
                    <Neutrine.DashboardContent fluid={true}>
                        Hello world!
                    </Neutrine.DashboardContent>
                </Neutrine.Dashboard>
            );
        }
    };
    //Mount dashboard test component
    ReactDOM.render(<DashboardTest />, document.getElementById("root"));
});


