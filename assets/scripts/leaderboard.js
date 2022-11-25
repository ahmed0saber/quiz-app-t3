 const getLeaderboardData = () => {
    const data = [
        {
            
            user: "ahmed",
            score: 100
        },
        {
          
            user: "ali",
            score: 95
        },
        {
          
            user: "mohamed",
            score: 92
        },
        {
           
            user: "ashraf",
            score: 90
        },
        {
           
            user: "ebrahim",
            score: 80
        },
        {
           
            user: "said",
            score: 75
        },
        {
           
            user: "magdy",
            score: 60
        },
        {
            
            user: "lorem",
            score: 50
        },
        {
            
            user: "hi",
            score: 25
        },
       
        {
            
            user: "hello",
            score: 10
        },
       
        
        
    ]
    return data;
  
 }


 let dataUsers = getLeaderboardData();
 const infoContainer= document.querySelector('.info-container');
 let j = 0;


function showScore (){
    dataUsers.map((i)=>{
      let content ='';
 
    content += `
    <div class="info">
    <div class="left">
      <p class="iduser"> ${ ++j}</p>
      <p class="nameuser">${i.user}</p>
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