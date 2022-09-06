const MATTERPORT_KEY = "<MATTERPORT_DEVELOPER_KEY>";
const showcase = document.getElementById("showcase");
const showcaseWindow = showcase.contentWindow;
export let matterportSdk;

showcase.addEventListener("load", async () => {
    matterportSdk = await showcaseWindow.MP_SDK.connect(showcaseWindow, MATTERPORT_KEY);
})

export const changeContent = (content) => {
    const source = `modules/matterport/matterport_bundle/showcase.html?&play=1&applicationKey=${MATTERPORT_KEY}&m=${content}`;
    showcase.setAttribute("src", source);
}