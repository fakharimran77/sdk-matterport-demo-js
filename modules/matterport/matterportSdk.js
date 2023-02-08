const MATTERPORT_KEY = "xqsh9qz29p3nn5y9ya36eezfa";
const showcase = document.getElementById("showcase");
const showcaseWindow = showcase.contentWindow;
import { onContentChanged } from './../../index.js'

export let matterportSdk;
showcase.addEventListener("load", async () => {
    matterportSdk = await showcaseWindow.MP_SDK.connect(showcaseWindow, MATTERPORT_KEY);
    onContentChanged();
})

export const changeContent = (content) => {
    const source = `modules/matterport/matterport_bundle/showcase.html?&play=1&applicationKey=${MATTERPORT_KEY}&m=${content}&search=0&title=0`;
    showcase.setAttribute("src", source);
}
