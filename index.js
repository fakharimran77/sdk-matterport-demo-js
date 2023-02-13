import { supervizSdk } from "./modules/superviz/supervizSdk.js"
import { changeContent, matterportSdk } from './modules/matterport/matterportSdk.js'

let matterportPluginInstance = null;
const iframeMeetingSettings = document.getElementById("sv-video-frame");


// verify if meeting settings iframe is loaded
iframeMeetingSettings.addEventListener("load", function() {
    document.getElementById("loader-ms").style.display = "none";
});

function loadPlugin() {
    const plugin = new window.MatterportPlugin(matterportSdk);
    matterportPluginInstance = supervizSdk.loadPlugin(plugin, {
        avatarConfig: {
            height: 0,
            scale: 1,
            laserOrigin: { x: 0.2, y: -0.2, z: 0 }
        },
        isAvatarsEnabled: true,
        isLaserEnabled: true,
        isNameEnabled: true
    });
}

// joined meeting
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_PARTICIPANT_JOINED, (participant) => {
    document.getElementById("wrapper").style.display = "none";
    changeContent()
});

// received matterport loaded new content
export const onContentChanged = () => {
    if(matterportPluginInstance) { 
        supervizSdk.unloadPlugin() // disconnect plugin
    }

    loadPlugin(); // reconnect plugin
}
