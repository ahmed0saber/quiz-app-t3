const sharingText = "I'm excited to share that I have passed HTML exam and got certified at Quiz App."
const sharingUrl = "https://github.com/"


function shareToFacebook(){
    window.open(`http://facebook.com/sharer/sharer.php?quote=${sharingText} &u= ${(sharingUrl)}`)
}

function shareToWhatsApp(){
    window.open(`https://api.whatsapp.com/send?text=${sharingText} Test your skills now ${sharingUrl}`)
}

function shareToLinkedIn(){
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${(sharingUrl)} &text=${sharingText} `)
}

function shareToTwitter(){
    window.open(`https://twitter.com/intent/tweet?text=${sharingText} Test your skills now &url=${sharingUrl}`)
}

function shareToTelegram(){
    window.open(`https://t.me/share/url?url=${sharingUrl} &text=${sharingText}`)
}



const certificateBtn =document.querySelector('.certificateBtn');
const backBtn =document.querySelector('.backBtn');
const faceBookBtn =document.querySelector('.faceBookBtn');
const whatsAppBtn =document.querySelector('.whatsAppBtn');
const linkedinBtn =document.querySelector('.linkedinBtn');
const twitterBtn =document.querySelector('.twitterBtn');
const telegramBtn =document.querySelector('.telegramBtn');

faceBookBtn.addEventListener('click',shareToFacebook);
twitterBtn.addEventListener('click',shareToTwitter);
telegramBtn.addEventListener('click',shareToTelegram);
linkedinBtn.addEventListener('click',shareToLinkedIn);
whatsAppBtn.addEventListener('click',shareToWhatsApp);
