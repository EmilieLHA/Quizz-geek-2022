<template>
  <div class="about">

      <div class="about-image">
        <img src="@/assets/quizz-images/avatar.png" alt="image">
      </div>

      <div class="about-body">

        <h4>SALUT! MOI C'EST EMILIE!</h4>

        <div class="about-text">
          <p>Je suis développeuse Web Javascript basée à Chambery. Je travaille avec <strong>VueJS</strong> et <strong>NodeJS</strong>.</p>
          <p>Avec ce quiz, j'ai développé:</p>

          <ul>
            <li>Une app Express avec une API REST</li>
            <li>Une base de données PostgreSQL</li>
            <li>Une SPA VueJS</li>
          </ul>

          <p>Mise en production via Heroku.</p>
          
        </div>

        <a href="https://emilielharidon.com" class="button" target="blank">Venez me rendre visite</a>
        
      </div>

  </div>

</template>

<style scoped>

.about{
  background-color: #ffff;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  border-radius: 15px;
    -webkit-border-radius: 15;
    -moz-border-radius: 15;
  height: 350px;
  width: 700px;
  margin: 3% auto;

  overflow: hidden;

  display: grid;
  grid-auto-rows: 1fr; 
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 
  "about-image about-body"; 
}


  .about-image {
    justify-self: center; 
    align-self: center; 
    grid-area: about-image; 
    width: 80%; 
    height: 80%; 
  }

  .about-image img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
      -webkit-border-radius: 15;
      -moz-border-radius: 15;
  }

  .about-body {
    justify-self: left; 
    align-self: center; 
    grid-area: about-body; 
    width: 90%; 
    height: 90%; 
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    overflow: hidden;
  }

  .about-body h4 {
    font-size: 1.2vw;
    padding-bottom: 10px;
    color: #d88c85; 
  }

  .about-body p {
    font-size: 16px;
    margin-bottom: 10px;
    text-align: justify;
  }

  ul {
    font-size: 16px;
    margin: 10px;
    text-align: justify;
    list-style-type: square;
    list-style-position: inside;
  }

 li {
    font-size: 16px;
    text-align: justify;
  }

.button {
    display: flex;
    justify-content: space-evenly;
    margin: 2%;
    border-radius: 10px;
      -webkit-border-radius: 10;
      -moz-border-radius: 10;
    border: none;
    color: #ffffff;
    font-size: 18px;
    background: #f1b150;
    padding: 10px 10px 10px 10px;
    text-decoration: none;
    cursor: pointer;

    -webkit-animation: shake-bottom 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    animation: shake-bottom 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;

  }

.button:hover {
    background: #c74d35;
    text-decoration: none;
  }

  /* -------------Mediaqueries Question card-------------------------- */
  @media screen and (max-width: 768px ) {
    
    .about{
      height: 500px;
      width: 400px;
      margin: 5% auto;
      padding: 15px;

      overflow: hidden;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

    .about-image {
        width: 30%; 
        height: auto; 
      }

      
    .about-body p, ul, li{
      font-size: 12px;
      margin-bottom: 10px;
      text-align: justify;
    }

    .about-body h4 {
      font-size: 2vw;
    }

    .button {
      font-size: 12px;
    }
}


 @media screen and (max-width: 425px ) {

  .card-body h4 {
      font-size: 4vw;
  }
  
  .about{
    height: 400px;
    width: 300px;
  }
}
/*------------Animation--------------*/

@-webkit-keyframes shake-bottom {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  10% {
    -webkit-transform: rotate(1deg);
            transform: rotate(1deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  80% {
    -webkit-transform: rotate(-1deg);
            transform: rotate(-1deg);
  }
  90% {
    -webkit-transform: rotate(1deg);
            transform: rotate(1deg);
  }
}
@keyframes shake-bottom {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  10% {
    -webkit-transform: rotate(1deg);
            transform: rotate(1deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  80% {
    -webkit-transform: rotate(-1deg);
            transform: rotate(-1deg);
  }
  90% {
    -webkit-transform: rotate(1deg);
            transform: rotate(1deg);
  }
}

</style>