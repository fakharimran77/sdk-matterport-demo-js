import { supervizSdk } from "./modules/superviz/supervizSdk.js"
import { changeContent } from './modules/matterport/matterportSdk.js'

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
