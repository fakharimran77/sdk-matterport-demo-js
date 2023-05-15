import { supervizSdk } from "./modules/superviz/supervizSdk.js"
import { changeContent, matterportSdk } from './modules/matterport/matterportSdk.js'

let matterportPluginInstance = null;
const iframeMeetingSettings = document.getElementById("sv-video-frame");



// verify if meeting settings iframe is loaded
iframeMeetingSettings.addEventListener("load", function() {
    document.getElementById("loader-ms").style.display = "none";
    document.querySelector('.sv_video_wrapper').setAttribute('style', 'z-index: 22; position: absolute;');
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
    document.getElementById("collapsedButtonInvite").style.display = "flex";
    amplitude.track("Enter example", {
      exampleName: "matterport-demo-js",
    });
});

// received matterport loaded new content
export const onContentChanged = () => {
    if(matterportPluginInstance) { 
        supervizSdk.unloadPlugin() // disconnect plugin
    }

    loadPlugin(); // reconnect plugin
}


supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MEETING_PARTICIPANT_LEFT, (value) => {
    if (value.isHost) {
        window.location.href = 'https://www.superviz.com'
    }
});

supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_PARTICIPANT_LEFT, () => {
  window.location.href = "https://www.superviz.com";
});
