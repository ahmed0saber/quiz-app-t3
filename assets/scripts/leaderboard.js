function getLeaderboardDataFromLocalStorage(){
    if(localStorage.getItem("leaderboard")){
        return JSON.parse(localStorage.getItem("leaderboard"))
    }
    return []
}


let dataUsers = getLeaderboardDataFromLocalStorage();
const infoContainer = document.querySelector('.info-container');
let j = 0;


function showScore() {
    dataUsers.map((i) => {
        let content = '';
        content += `
            <div class="info">
                <div class="left">
                <p class="iduser"> ${++j}</p>
                <p class="nameuser">${i.username}</p>
                </div>
                <div class="right">
                <p class="scoreuser">${i.score}</p>
                </div>
            </div>
        `
        infoContainer.innerHTML += content
    })
}

showScore();