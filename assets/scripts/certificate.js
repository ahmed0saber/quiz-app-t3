const sharingText = "I'm excited to share that I have passed HTML exam and got certified at Quiz App."
const sharingUrl = "https://github.com/"

function shareToFacebook(){
    window.open('http://facebook.com/sharer/sharer.php?quote='+sharingText+'&u='+encodeURIComponent(sharingUrl), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
}

function shareToWhatsApp(){
    window.open('https://api.whatsapp.com/send?text='+sharingText+' Test your skills now '+sharingUrl, '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
}

function shareToLinkedIn(){
    window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(sharingUrl), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
}

function shareToTwitter(){
    window.open('https://twitter.com/intent/tweet?text='+sharingText+' Test your skills now &url='+sharingUrl+'&hashtags=quiz_app,html', '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
}

function shareToTelegram(){
    window.open('https://t.me/share/url?url='+sharingUrl+'&text='+sharingText, '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
}