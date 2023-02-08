const DEVELOPER_KEY = "i7w15mfdvlq611xunai5m3gzxwvg2x";

const url = new URL(document.URL);
let userName = url.searchParams.get('user-name');
let roomId = url.searchParams.get('roomId');
let userType = url.searchParams.get('user-type');

export const supervizSdk = await SuperVizSdk.init(DEVELOPER_KEY, {
    group: {
        id: "<GROUP-ID>",
        name: "<GROUP-NAME>"
    },
    participant: {
        id: Math.random().toFixed(1),
        name: userName ? userName : undefined,
        type: userType,
    },
    roomId: roomId,
    defaultAvatars: true,
    enableFollow: true,
    debug: true
});
