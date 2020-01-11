Neutrine.ready(function () {
    class ConfirmTest extends React.Component { 
        constructor(props) {
            super(props);
            this.state = {
                "visible": false
            };
            this.handleToggle = this.handleToggle.bind(this);
        }
        handleToggle(event) {
            return this.setState({
                "visible": !this.state.visible
            });
        }
        render(props) {
            let self = this;
            return (
                <Neutrine.Content size="medium">
                    <Neutrine.Btn color="primary" onClick={this.handleToggle}>Show confirm</Neutrine.Btn>
                    <Neutrine.Renderer render={function () {
                        return React.createElement(Neutrine.Confirm, {
                            "title": "Are you sure?",
                            "content": "This is the content of the confirm",
                            "visible": self.state.visible,
                            "onCancel": self.handleToggle,
                            "onConfirm": self.handleToggle
                        });
                    }} />
                </Neutrine.Content>
            );
        }
    };
    ReactDOM.render(<ConfirmTest />, document.getElementById("root"));
});


