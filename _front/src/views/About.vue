<template>
  <div class="about">

      <div class="about-image">
        <img src="@/assets/quizz-images/avatar.png" alt="image">
      </div>

      <div class="about-body">

        <h4>SALUT! MOI C'EST EMILIE!</h4>

        <div class="about-text">
          <p>Je suis développeuse Web Javascript basée à Chambery.<br> Je travaille avec VueJS et NodeJS.<br>
          Avec ce quiz, j'ai développé:</p>

          <ul>
            <li>Une app Express avec une API REST</li>
            <li>Une base de données PostgreSQL</li>
            <li>Une SPA VueJS</li>
          </ul>

          <p>Mise en production via Heroku.</p>
          <p>Merci d'avoir pris le temps de me rendre visite!</p>
          
        </div>

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
    font-size: 1.5vw;
    padding-bottom: 10px;
    color: #d88c85; 
  }

  .about-body p {
    font-size: 16px;
    text-align: justify;
  }

  ul {
    font-size: 16px;
    text-align: justify;
    list-style-type: square;
  }

 li {
    font-size: 16px;
    text-align: justify;
  }

</style>