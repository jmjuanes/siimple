Neutrine.ready(function () {
    class StepperTest extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                "step": 0
            };
            //Bind methods
            this.handleNext = this.handleNext.bind(this);
        }
        //Next item
        handleNext() {
            return this.setState({
                "step": this.state.step + 1
            });
        }
        //Render the side test
        render () {
            return (
                <div className="siimple--px-5 siimple--py-5">
                    <Neutrine.Stepper current={this.state.step}>
                        <Neutrine.StepperItem title="Step 1">
                            <div>This is the content of the step 1</div>
                        </Neutrine.StepperItem>
                        <Neutrine.StepperItem title="Step 2">
                            <div>This is the content of the step 2</div>
                        </Neutrine.StepperItem>
                        <Neutrine.StepperItem title="Step 3">
                            <div>This is the content of the step 3</div>
                        </Neutrine.StepperItem>
                        <Neutrine.StepperItem title="Step 4">
                            <div>This is the content of the step 4</div>
                        </Neutrine.StepperItem>
                    </Neutrine.Stepper>
                </div>
            );
        }
    };
    ReactDOM.render(<StepperTest />, document.getElementById("root"));
});

