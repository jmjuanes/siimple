const sandboxTemplate = `
<div class="has-p-12">
    <div class="title is-1 has-d-flex has-items-center">
        <i class="icon is-siimple has-pr-3"></i>
        Welcome!
    </div>
    <div class="title is-3">What is this tool?</div>
    <div class="paragraph">
        This tiny tool allows you to try <strong>siimple</strong> in your browser,
        without installing anything in your computer. Great for learning or
        prototyping using the <strong>siimple toolkit</strong>.
    </div>
    <div class="paragraph">
        For example, you can use this tool to design a notification using the 
        <strong>Alert</strong> component: 
    </div>
    <div class="alert is-secondary has-d-flex">
        <div class="has-mr-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="close has-ml-auto"></div>
    </div>
    <div class="title is-3">How to get started?</div>
    <div class="paragraph">
        Feel free to edit and play with this code! And remember that you can 
        use the <strong>Share</strong> button to generate a link for sharing your 
        current code or saving it.
    </div>
</div>
`;

// Generate a sandbox template
export const getSandboxTemplate = () => sandboxTemplate;
