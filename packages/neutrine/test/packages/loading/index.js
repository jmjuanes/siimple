Neutrine.ready(function () {
    class LoadingTest extends React.Component { 
        constructor(props) {
            super(props);
            this.loader = React.createRef();
        }
        render(props) {
            let self = this;
            return (
                <Neutrine.Content size="medium">
                    <Neutrine.Loader ref={this.loader} className="siimple--bg-primary" />
                    <Neutrine.Renderer render={function () {
                        return React.createElement(Neutrine.Btn, {
                            "content": "Continuous",
                            "onClick": function () {
                                self.loader.current.continuous();
                            },
                            "color": "primary"
                        });
                    }} />
                    <Neutrine.Renderer render={function () {
                        return React.createElement(Neutrine.Btn, {
                            "content": "Complete",
                            "onClick": function () {
                                self.loader.current.complete();
                            },
                            "color": "primary"
                        });
                    }} />
                    <Neutrine.Renderer render={function () {
                        return React.createElement(Neutrine.Btn, {
                            "content": "Add 10",
                            "onClick": function () {
                                self.loader.current.add(10);
                            },
                            "color": "primary"
                        });
                    }} />
                    <Neutrine.Renderer render={function () {
                        return React.createElement(Neutrine.Btn, {
                            "content": "Remove 10",
                            "onClick": function () {
                                self.loader.current.remove(10);
                            },
                            "color": "primary"
                        });
                    }} />
                    <Neutrine.Renderer render={function () {
                        return React.createElement(Neutrine.Btn, {
                            "content": "Reset",
                            "onClick": function () {
                                self.loader.current.reset();
                            },
                            "color": "primary"
                        });
                    }} />
                </Neutrine.Content>
            );
        }
    };
    ReactDOM.render(<LoadingTest />, document.getElementById("root"));
});


