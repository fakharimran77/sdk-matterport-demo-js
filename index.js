import { supervizSdk } from "./modules/superviz/supervizSdk.js"
import { changeContent, matterportSdk } from './modules/matterport/matterportSdk.js'
const CONTENT_SYNC_PROPERTY = "content";
let changedContent = false;
let matterportAdapterInstance = null;

const MATTERPORT_MODELS = [ // example models
    "pCtbBSaDwgQ",
    "bwbf2Tj3Ap4",
    "DCzzcm4Zgng"
];
let currentContentIndex = 0;

// load first model
changeContent(MATTERPORT_MODELS[0]);

function connectAdapter () {
    const adapter = new window.MatterportAdapter(matterportSdk);
    matterportAdapterInstance = supervizSdk.connectAdapter(adapter, {
        avatarConfig: {
            height: 0,
            scale: 1
        },
        isAvatarsEnabled: true,
        isPointersEnabled: true
    });
}

// joined meeting
supervizSdk.subscribe(SuperVizSdk.MeetingEvent.MY_USER_JOINED, () => {
    connectAdapter();
});

// send change content sync
const sendSyncCommand = function (index) {
    supervizSdk.setSyncProperty(CONTENT_SYNC_PROPERTY, MATTERPORT_MODELS[index]);
}

// receive change content sync
supervizSdk.subscribe(CONTENT_SYNC_PROPERTY, function (newModelSid) {
    if (matterportAdapterInstance) { // disconnect from adapter if there is one
        supervizSdk.disconnectAdapter();
        matterportAdapterInstance = null;
        changedContent = true;
    }
    changeContent(newModelSid) // send change content to matterport // see modules/matterport/matterportSdk.js
});

// interface buttons to change content
document.getElementById('previousButton').onclick = function () {
    currentContentIndex--;
    const index = Math.abs(currentContentIndex % MATTERPORT_MODELS.length);
    sendSyncCommand(index)
};

// interface buttons to change content
document.getElementById('nextButton').onclick = function () {
    currentContentIndex++;
    const index = Math.abs(currentContentIndex % MATTERPORT_MODELS.length);
    sendSyncCommand(index)
};

// received matterport loaded new content
export const onContentChanged = () => {
    if (changedContent) {
        connectAdapter(); // reconnect adapter
    }
}