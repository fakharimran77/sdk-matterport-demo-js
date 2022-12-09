import { supervizSdk } from "./modules/superviz/supervizSdk.js"
import { changeContent, matterportSdk } from './modules/matterport/matterportSdk.js'
const CONTENT_SYNC_PROPERTY = "content";

const MATTERPORT_MODELS = [ // example models
    "pCtbBSaDwgQ",
    "NARFMvjQ3wq",
    "piqHj4JP6Fp"
];
let currentContentIndex = 0;

changeContent(MATTERPORT_MODELS[0]);

supervizSdk.subscribe(CONTENT_SYNC_PROPERTY, function (newModelSid) {
    changeContent(newModelSid)
});

supervizSdk.subscribe(CONTENT_SYNC_PROPERTY, function (newModelSid) {
    changeContent(newModelSid)
});

supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_USER_JOINED, () => {
    const adapter = new window.MatterportAdapter(matterportSdk);
    const matterportAdapterInstance = supervizSdk.connectAdapter(adapter, {
        avatarConfig: {
            height: 0,
            scale: 1
        },
        isAvatarsEnabled: true,
        isPointersEnabled: true
    });
});

const sendSyncCommand = function (index) {
    supervizSdk.setSyncProperty(CONTENT_SYNC_PROPERTY, MATTERPORT_MODELS[index]);
}

document.getElementById('previousButton').onclick = function () {
    currentContentIndex--;
    const index = Math.abs(currentContentIndex % MATTERPORT_MODELS.length);
    sendSyncCommand(index)
};

document.getElementById('nextButton').onclick = function () {
    currentContentIndex++;
    const index = Math.abs(currentContentIndex % MATTERPORT_MODELS.length);
    sendSyncCommand(index)
};
