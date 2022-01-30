const playgroundTemplate = `
<!-- 
    Welcome to Siimple Playground!
    Here you can try siimple before you add it to your project.
    
    Found a bug? Tell us at https://github.com/jmjuanes/siimple/issues
    Any problem? Join https://github.com/jmjuanes/siimple/discussions
    Follow us on twitter: @siimplecss
-->

<div class="has-p-8">
    <div class="has-mb-6">
        <i class="siimple-icon is-siimple" style="font-size:80px;"></i>
    </div>
    <div class="siimple-paragraph">
        The <strong>siimple playground</strong> application is an online 
        editor that you can use for prototyping and trying the 
        <strong>siimple CSS toolkit</strong> before adding it to your 
        project.
    </div>
    <div class="siimple-paragraph">
        To get started, just edit this page using the code editor on the left 
        side of this view. In the toolbar you can find the following buttons:
    </div>
    <div class="has-d-flex has-items-center has-mt-2">
        <div class="has-radius-full has-p-2 has-bg-blue-200 has-text-blue-600">
            <i class="siimple-icon is-play has-text-large"></i>
        </div>
        <div class="has-flex-grow has-ml-4">
            <strong>Run</strong>: click on this button to preview your code.
        </div>
    </div>
    <div class="has-d-flex has-items-center has-mt-2">
        <div class="has-radius-full has-p-2 has-bg-blue-200 has-text-blue-600">
            <i class="siimple-icon is-link has-text-large"></i>
        </div>
        <div class="has-flex-grow has-ml-4">
            <strong>Share</strong>: generate an URL that you can use to share 
            your current code.
        </div>
    </div>
    <div class="has-d-flex has-items-center has-mt-2">
        <div class="has-radius-full has-p-2 has-bg-blue-200 has-text-blue-600">
            <i class="siimple-icon is-book has-text-large"></i>
        </div>
        <div class="has-flex-grow has-ml-4">
            <strong>Docs</strong>: navigate to the documentation of siimple. 
        </div>
    </div>
</div>
`;

// Generate a playground template
export const getPlaygroundTemplate = () => playgroundTemplate;
