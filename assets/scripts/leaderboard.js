 const getLeaderboardData = () => {
    const data = [
        {
            id:1,
            user: "ahmed",
            score: 100
        },
        {
            id:2,
            user: "ali",
            score: 95
        },
        {
            id:3,
            user: "mohamed",
            score: 92
        },
        {
            id:4,
            user: "ashraf",
            score: 90
        },
        {
            id:5,
            user: "ebrahim",
            score: 80
        },
        {
            id:6,
            user: "said",
            score: 75
        },
        {
            id:7,
            user: "magdy",
            score: 60
        },
        {
            id:8,
            user: "lorem",
            score: 50
        },
        {
            id:9,
            user: "hi",
            score: 25
        },
       
        {
            id:10,
            user: "hello",
            score: 10
        },
        
    ]
    return data;
  
 }
 let dataUsers = getLeaderboardData();

function showScore (){


    dataUsers.map((i)=>{


    
//  const infoContainer= document.querySelector('.info-container');
// const iduser= document.querySelector('.iduser');
// const nameuser= document.querySelector('.nameuser');
// const scoreuser= document.querySelector('.scoreuser');

// iduser.innerHTML+=i.id;
// nameuser.innerHTML+=i.user;
// scoreuser.innerHTML+=i.score;

// const info =document.querySelector('.info');
// const left =document.querySelector('.left');
// const right =document.querySelector('.right');
// left.appendChild(iduser.innerHTML);
// left.appendChild(nameuser.innerHTML);
// right.appendChild(scoreuser.innerHTML);
// info.appendChild(left);
// info.appendChild(right)
// infoContainer.appendChild(info);






const infoContainer= document.querySelector('.info-container');

const userIdContainer = document.createElement("p");
const userId = document.createTextNode(i.id);
userIdContainer.appendChild(userId);

const userNameContainer = document.createElement("p");
const userName = document.createTextNode(i.user);
userNameContainer.appendChild(userName);

const userScoreContainer = document.createElement("p");
const userScore = document.createTextNode(i.score);
userScoreContainer.appendChild(userScore);

const left = document.createElement("div");
left.classList.add("left");
const right = document.createElement("div");
right.classList.add("right");
const info = document.createElement("div");
info.classList.add("info");

left.appendChild(userIdContainer);
left.appendChild(userNameContainer);
right.appendChild(userScoreContainer);
info.appendChild(left);
info.appendChild(right);
infoContainer.appendChild(info);

    })
     
    }
  
showScore();