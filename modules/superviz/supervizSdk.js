const DEVELOPER_KEY = "<SUPERVIZ_DEVELOPER_KEY>";

const url = new URL(document.URL);
let userName = url.searchParams.get('user-name');
let roomId = url.searchParams.get('roomId');
let userType = url.searchParams.get('user-type');

export const supervizSdk = await SuperVizSdk.init(DEVELOPER_KEY, {
    userGroup: {
        id: "<GROUP-ID>",
        name: "<GROUP-NAME>"
    },
    user: {
        id: Math.random().toFixed(1), 
        name: userName ? userName : undefined,
        isHostCandidate: userType === 'host',
    },
    roomId: roomId,
    defaultAvatars: true,
    enableFollow: true,
    debug: true
});