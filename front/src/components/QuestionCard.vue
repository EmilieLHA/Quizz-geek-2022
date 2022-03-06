<template>
  <div class="question-card">

    <div class="card-container">

      <div class="card-image">
        <img :src="require(`../assets/quizz-images/${questions.image}`)" alt="image">
      </div>

      <div class="card-body">

        <h4 class="card-title"> VRAI OU FAUX?</h4>
        <p class="question">{{questions.question}}</p>
        
        <div class="buttons">
          <button id="vrai">Vrai</button>
          <button id="faux">Faux</button>
        </div>

      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'QuestionCard',
  props: {
    questions: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .card-container{
    background-color: #ffff;
    border-radius: 15px;
      -webkit-border-radius: 15;
      -moz-border-radius: 15;
    height: 350px;
    width: 700px;
    margin: 5% auto;

    overflow: hidden;

    display: grid;
    grid-auto-rows: 1fr; 
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: 
    "card-image card-body"; 
  }

  .card-image {
    justify-self: center; 
    align-self: center; 
    grid-area: card-image; 
    width: 80%; 
    height: 80%; 
  }

  .card-image img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
      -webkit-border-radius: 15;
      -moz-border-radius: 15;
  }

  .card-body {
    justify-self: left; 
    align-self: center; 
    grid-area: card-body; 
    width: 90%; 
    height: 90%; 
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: hidden;
  }

  .card-body h4 {
    font-size: 1.5vw;
    padding-bottom: 10px;
    color: #1fc1c3; 
  }

  .card-body p {
    font-size: 14px;
    color: #0a253b;
    text-align: justify;
    flex: none;
  }

  .buttons button {

    width: 20%;
    margin: 2%;
    border-radius: 10px;
      -webkit-border-radius: 10;
      -moz-border-radius: 10;
    border: none;
    font-family: Arial;
    color: #ffffff;
    font-size: 18px;
    background: #1fc1c3;
    padding: 10px 10px 10px 10px;
    text-decoration: none;
  }

  .buttons button:hover {
    background: #162f45;
    text-decoration: none;
  }

/* -------------Mediaqueries Question card-------------------------- */
  @media screen and (max-width: 768px ) {
    
    .card-container{
      height: 500px;
      width: 400px;
      margin: 5% auto;
      padding: 15px;

      overflow: hidden;

      display: flex;
      flex-direction: column;
  }

    .card-image {
        width: 40%; 
        height: auto; 
      }

    .card-body {
      height: 100%; 
      padding-top: 30px;
      font-size: 3vw;
    }

    .card-body h4 {
      font-size: 2vw;
    }
  }

  
</style>
