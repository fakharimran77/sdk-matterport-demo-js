const url = new URL(document.URL)
let userType = url.searchParams.get('user-type');
let userName = url.searchParams.get('user-name');
let roomId = url.searchParams.get('roomId')

document.addEventListener('DOMContentLoaded', () => {
  validateMeetingUrl();
})

document.getElementById("next")?.addEventListener("click", (event) => { 
    userName = document.getElementById('username').value ?? undefined;

    userType = url.searchParams.get('user-type') ? url.searchParams.get('user-type') : 'host';
    roomId = url.searchParams.get('roomId') ? url.searchParams.get('roomId') : generateUniqueId()  

    url.searchParams.set('roomId', roomId)
    url.searchParams.set('user-type', userType)

    location.href = `${location.protocol + '//' + location.host}/invite.html?roomId=${roomId}&user-type=${userType}&user-name=${userName}`
});

document.getElementById("join")?.addEventListener('click', event => { 
  if(userName){
    location.href = `${location.protocol + '//' + location.host}/ready.html?roomId=${roomId}&user-type=${userType}&user-name=${userName}`
  } else {
    location.href = `${location.protocol + '//' + location.host}/ready.html?roomId=${roomId}&user-type=${userType}`
  }
})

document.getElementById("invite-url-button")?.addEventListener("click", (event) => { 
    const roomIdInput = document.getElementById('room-id')

    if(!roomIdInput) return
    navigator.clipboard.writeText(roomIdInput.value); 
    const checkboxState = document.getElementById("check-copy").checked
    if (checkboxState) {
      document.getElementById("check-copy").checked = false;
      return
    }
  
    document.getElementById("check-copy").checked = true;
    setTimeout(function () {
      document.getElementById("check-copy").checked = false;
    }, 3000);
});

function validateMeetingUrl() { 
  const roomIdInput = document.getElementById('room-id')
  const url = new URL(document.URL)

  if(url.searchParams.get('user-type') === 'guest' && location.href.includes('ready.html')) return;

  if(url.searchParams.get('user-type') === 'guest' && !location.href.includes('guest.html')) {
    location.href = `${location.protocol + '//' + location.host}/guest.html?roomId=${roomId}&user-type=${userType}`
  }

  if(roomIdInput) { 
    roomIdInput.value = `${location.protocol + '//' + location.host}/guest.html?roomId=${roomId}&user-type=guest`
  }

  if(url.searchParams.get('roomId') && url.searchParams.get('user-type')) return;
}

function generateUniqueId() {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}