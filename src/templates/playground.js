const playgroundTemplate = `
<!-- 
    Welcome to Siimple Sandbox!
    Here you can try siimple before you add it to your project.
    
    Found a bug? Tell us at https://github.com/jmjuanes/siimple/issues
    Any problem? Join https://github.com/jmjuanes/siimple/discussions
    Follow us on twitter: @siimplecss
-->

<div class="has-p-8">
    <div class="siimple-card">
        <div class="has-mb-6" align="center">
            <i class="siimple-icon is-siimple" style="font-size:80px;"></i>
        </div>
        <div class="siimple-paragraph">
            The <strong>siimple playground</strong> application is an online editor for 
            the <strong>siimple CSS toolkit</strong>, that supports amazing things like:
        </div>
        <div class="has-d-flex has-items-center has-mt-2">
            <div class="has-radius has-p-1 has-bg-blue-200 has-text-blue-600">
                <i class="siimple-icon is-star has-text-large"></i>
            </div>
            <div class="has-flex-grow has-ml-4">
                Trying the latest features of the CSS toolkit.
            </div>
        </div>
        <div class="has-d-flex has-items-center has-mt-2">
            <div class="has-radius has-p-1 has-bg-blue-200 has-text-blue-600">
                <i class="siimple-icon is-box has-text-large"></i>
            </div>
            <div class="has-flex-grow has-ml-4">
                <strong class="siimple-badge">Future</strong> 
                Loading external stuff from a CDN (like styles or scripts form other toolkits).
            </div>
        </div>
        <div class="has-d-flex has-items-center has-mt-2">
            <div class="has-radius has-p-1 has-bg-blue-200 has-text-blue-600">
                <i class="siimple-icon is-share has-text-large"></i>
            </div>
            <div class="has-flex-grow has-ml-4">
                <strong class="siimple-badge">Future</strong> 
                Exporting sandboxes to a local file or generating a shareable url.
            </div>
        </div>
    </div>
</div>
`;

// Generate a playground template
export const getPlaygroundTemplate = () => playgroundTemplate;
