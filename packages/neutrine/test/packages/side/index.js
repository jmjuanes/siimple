Neutrine.ready(function () {
    //Side testing component
    class SideTest extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                "visible": true,
                "position": "right",
                "width": "400px"
            };
            //Bind methods
            this.handleClose = this.handleClose.bind(this);
        }
        //Handle close click
        handleClose() {
            return this.setState({
                "visible": false
            });
        }
        //Render the side test
        render () {
            return (
                <Neutrine.Side visible={this.state.visible}>
                    <Neutrine.SideBackground onClick={this.handleClose} />
                    <Neutrine.SideContent position={this.state.position} width={this.state.width}>
                        <Neutrine.SideHeader>
                            Title
                            <Neutrine.SideClose onClick={this.handleClose} />
                        </Neutrine.SideHeader>
                        <Neutrine.SideBody>
                            Content of the side component 1
                        </Neutrine.SideBody>
                        <Neutrine.SideBody>
                            Content of the side component 2
                        </Neutrine.SideBody>
                        <Neutrine.SideBody>
                            Content of the side component 3
                        </Neutrine.SideBody>
                    </Neutrine.SideContent>
                </Neutrine.Side>
            );
        }
    };
    //Mount side test component
    ReactDOM.render(<SideTest />, document.getElementById("root"));
});

