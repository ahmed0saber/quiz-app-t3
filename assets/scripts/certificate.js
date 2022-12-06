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
const score = sessionStorage.getItem('score')
const nameInput = document.querySelector(".askedName input")

faceBookBtn.addEventListener('click',shareToFacebook);
twitterBtn.addEventListener('click',shareToTwitter);
telegramBtn.addEventListener('click',shareToTelegram);
linkedinBtn.addEventListener('click',shareToLinkedIn);
whatsAppBtn.addEventListener('click',shareToWhatsApp);

certificateBtn.addEventListener('click', () => {
    if(nameInput.value.trim().length < 1){
        alert("Enter username first")
        return
    }

    let leaderboardData = getLeaderboardDataFromLocalStorage()
    leaderboardData = setScoreInSortedPosition(leaderboardData)
    setLeaderboardDataToLocalStorage(leaderboardData)

    const certificateDate = new Date()
    sessionStorage.setItem("username", nameInput.value.trim())
    sessionStorage.setItem("date", formatDate(certificateDate))
    window.location.href = "../get-certificate"
})

function formatDate(givenDate) {
    const yyyy = givenDate.getFullYear()
    let mm = givenDate.getMonth() + 1
    let dd = givenDate.getDate()
    if (dd < 10) dd = '0' + dd
    if (mm < 10) mm = '0' + mm
    const formattedDate = `${dd}/${mm}/${yyyy}`

    return formattedDate
}

function getLeaderboardDataFromLocalStorage(){
    if(localStorage.getItem("leaderboard")){
        return JSON.parse(localStorage.getItem("leaderboard"))
    }
    return []
}

function setLeaderboardDataToLocalStorage(data){
    localStorage.setItem("leaderboard", JSON.stringify(data))
}

function setScoreInSortedPosition(arr){
    let tempArray = [], rightPositionIsFound = false
    for(let i = 0; i < arr.length; ){
        if(arr[i].score >= score || rightPositionIsFound){
            tempArray.push(arr[i])
            i++
        }else{
            tempArray.push({
                username: nameInput.value.trim(),
                score: score
            })
            rightPositionIsFound = true
        }
    }
    if(!rightPositionIsFound){
        tempArray.push({
            username: nameInput.value.trim(),
            score: score
        })
    }

    return tempArray
}