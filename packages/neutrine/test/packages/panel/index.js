Neutrine.ready(function () {
    //Panel testing component
    class PanelTest extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                "collapsed": true
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
        //Render the panel test
        render () {
            return (
                <div style={{"margin": "40px"}}>
                    <Neutrine.Panel>
                        <Neutrine.PanelHeader>
                            Test panel 
                            <Neutrine.PanelLabel>10+</Neutrine.PanelLabel>
                        </Neutrine.PanelHeader>
                        <Neutrine.PanelBody align="center">
                            <Neutrine.PanelTitle>Panel title</Neutrine.PanelTitle>
                            <Neutrine.PanelDescription>Panel description content</Neutrine.PanelDescription>
                        </Neutrine.PanelBody>
                    </Neutrine.Panel>
                </div>
            );
        }
    };
    //Mount panel test component
    ReactDOM.render(<PanelTest />, document.getElementById("root"));
});

