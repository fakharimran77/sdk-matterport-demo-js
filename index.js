import { supervizSdk } from "./modules/superviz/supervizSdk.js"
import { changeContent, matterportSdk } from './modules/matterport/matterportSdk.js'
const CONTENT_SYNC_PROPERTY = "content";
let changedContent = false;
let matterportAdapterInstance = null;

// load first model
changeContent("v4LWLiLDm3s");

function connectAdapter() {
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
    document.getElementById("wrapper").style.display = "none";
    // interface buttons to change content
    document.getElementById('v4LWLiLDm3s').onclick = function () {
        sendSyncCommand('v4LWLiLDm3s')
        document.getElementsByClassName('project-name')[0].classList.remove('active')
        document.getElementsByClassName('project-name')[1].classList.remove('active')
        document.getElementsByClassName('project-name')[2].classList.remove('active')
        document.getElementsByClassName('project-name')[3].classList.remove('active')
        document.getElementById('v4LWLiLDm3s').getElementsByClassName('project-name')[0].classList.add('active')
    };
    document.getElementById('zWpt6DAXDJw').onclick = function () {
        sendSyncCommand('zWpt6DAXDJw')
        document.getElementsByClassName('project-name')[0].classList.remove('active')
        document.getElementsByClassName('project-name')[1].classList.remove('active')
        document.getElementsByClassName('project-name')[2].classList.remove('active')
        document.getElementsByClassName('project-name')[3].classList.remove('active')
        document.getElementById('zWpt6DAXDJw').getElementsByClassName('project-name')[0].classList.add('active')
    };
    document.getElementById('KSParQVSEKy').onclick = function () {
        sendSyncCommand('KSParQVSEKy')
        document.getElementsByClassName('project-name')[0].classList.remove('active')
        document.getElementsByClassName('project-name')[1].classList.remove('active')
        document.getElementsByClassName('project-name')[2].classList.remove('active')
        document.getElementsByClassName('project-name')[3].classList.remove('active')
        document.getElementById('KSParQVSEKy').getElementsByClassName('project-name')[0].classList.add('active')
    };
    document.getElementById('toTRYzoAMdT').onclick = function () {
        sendSyncCommand('toTRYzoAMdT')
        document.getElementsByClassName('project-name')[0].classList.remove('active')
        document.getElementsByClassName('project-name')[1].classList.remove('active')
        document.getElementsByClassName('project-name')[2].classList.remove('active')
        document.getElementsByClassName('project-name')[3].classList.remove('active')
        document.getElementById('toTRYzoAMdT').getElementsByClassName('project-name')[0].classList.add('active')
    };
    connectAdapter();
});
// interface buttons to open close
document.getElementById('collapsedButton').onclick = function () {
    if (document.getElementById('sectionReady').classList.contains('hidden')) {
        return document.getElementById('sectionReady').classList.toggle('hidden')
    }
    document.getElementById('sectionReady').classList.add('hidden')
};
// send change content sync
const sendSyncCommand = function (index) {
    supervizSdk.setSyncProperty(CONTENT_SYNC_PROPERTY, index);
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

// received matterport loaded new content
export const onContentChanged = () => {
    if (changedContent) {
        connectAdapter(); // reconnect adapter
    }
}