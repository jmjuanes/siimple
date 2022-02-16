const sandboxTemplate = `
<div class="has-p-8">
    <div class="has-mb-6 has-bg-coolgray-200 has-radius has-p-8">
        <div class="has-d-flex has-items-center has-justify-center">
            <i class="icon is-siimple has-text-5xl"></i>
            <div class="has-pl-4 has-text-4xl has-weight-bold">Sandbox</div>
        </div>
    </div>
    <div class="paragraph">
        The <strong>Siimple Sandbox</strong> application is an online 
        editor that you can use for prototyping and trying the 
        <strong>siimple CSS toolkit</strong> before adding it to your 
        project.
    </div>
    <div class="paragraph">
        To get started, just edit this page using the code editor on the left 
        side of this view. In the toolbar you can find the following buttons:
    </div>
    <div class="has-d-flex has-items-center has-mt-2">
        <div class="has-radius-full has-p-2 has-bg-blue-200 has-text-blue-600">
            <i class="icon is-play has-text-large"></i>
        </div>
        <div class="has-flex-grow has-ml-4">
            <strong>Run</strong>: click on this button to preview your code.
        </div>
    </div>
    <div class="has-d-flex has-items-center has-mt-2">
        <div class="has-radius-full has-p-2 has-bg-blue-200 has-text-blue-600">
            <i class="icon is-link has-text-large"></i>
        </div>
        <div class="has-flex-grow has-ml-4">
            <strong>Share</strong>: generate an URL that you can use to share 
            your current code.
        </div>
    </div>
    <div class="has-d-flex has-items-center has-mt-2">
        <div class="has-radius-full has-p-2 has-bg-blue-200 has-text-blue-600">
            <i class="icon is-book has-text-large"></i>
        </div>
        <div class="has-flex-grow has-ml-4">
            <strong>Docs</strong>: navigate to the documentation of siimple. 
        </div>
    </div>
</div>
`;

// Generate a sandbox template
export const getSandboxTemplate = () => sandboxTemplate;
