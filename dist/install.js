const installButton=document.getElementById('install-app');
const installHelp=document.getElementById('install-help');
let installPrompt=null;
const standalone=()=>window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
function syncInstall(){installButton.hidden=standalone();if(standalone())installHelp.hidden=true;}
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;syncInstall();});
window.addEventListener('appinstalled',()=>{installPrompt=null;installButton.hidden=true;installHelp.hidden=true;});
installButton.addEventListener('click',async()=>{if(installPrompt){const prompt=installPrompt;installPrompt=null;try{await prompt.prompt();await prompt.userChoice;}catch{installHelp.hidden=false;}}else{installHelp.hidden=!installHelp.hidden;}});
syncInstall();
if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js').then(async registration=>{const ready=await navigator.serviceWorker.ready;if(ready.active)document.getElementById('offline-status').textContent='离线使用已准备好；填写的信息不会保存。';}).catch(()=>{document.getElementById('offline-status').textContent='离线功能暂不可用，联网时仍可正常使用。';});});}
