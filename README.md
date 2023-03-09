# Gitlab Sentinel

Gitlab Sentinel is a Chrome extension that helps you keep track of merge requests in your Gitlab projects. With this extension, you can easily see which merge requests are open, closed, or merged, and quickly navigate to them from your browser.

## Installation

To install Gitlab Sentinel, follow these steps:

1.  Clone the repository or download the ZIP file and extract it
2.  Open a terminal window and navigate to the root folder of the project.
    3.Run npm install to install the dependencies.
    4.Run npm run build to build the extension.
    5.Open Google Chrome and go to chrome://extensions.
    6.Turn on "Developer mode" in the top right corner of the page.
    7.Click on "Load unpacked" and select the dist folder in the project folder.

The extension should now be installed and ready to use.

## Usage

To use Gitlab Sentinel, simply click on the extension icon in your browser's toolbar. This will open a popup window that shows you a list of merge requests in your Gitlab projects.

The merge requests are grouped by their status (open, closed, or merged) and sorted by their creation date (newest first). You can click on a merge request to open it in Gitlab, or you can click on the project name to go to the project's homepage.

You can also search for a specific merge request by typing its title or ID in the search box at the top of the popup window. The list of merge requests will be filtered as you type.

## Configuration

Gitlab Sentinel requires you to provide the URL of your Gitlab instance and an access token with the api scope. To configure the extension, follow these steps:

1.Go to your Gitlab profile settings and generate a new personal access token with the api scope.
2.Copy the access token to your clipboard.
3.Click on the extension icon in your browser's toolbar and select "Options".
4.Paste the access token into the "Access Token" field.
5.Enter the URL of your Gitlab instance in the "Gitlab URL" field.
6.Click "Save".

The extension will now use your Gitlab access token to retrieve merge requests from your Gitlab projects.

## Support

If you have any questions, comments, or feature requests, please create an issue in the repository or contact me directly. I'll do my best to respond as soon as possible.

## License

Gitlab Sentinel is released under the MIT License. See LICENSE.md for details.
