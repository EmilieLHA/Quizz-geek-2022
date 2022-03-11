<template>
  <form class="question-card">

    <div class="card-container">

      <div class="card-image">
        <img :src="getImgUrl(question.image)" alt="image">
      </div>

      <div class="card-body">

        <h4 class="card-title"> VRAI OU FAUX?</h4>
        <p class="question">{{question.question}}</p>
        
        <div class="buttons">
          <input type="button" id="vrai" @click="checkScore" value="Vrai">
          <input type="button" id="faux" @click="checkScore" value="faux">
        </div>

      </div>

    </div>

  </form>
</template>

<script>

export default {
  name: 'QuestionCard',
  props: {
    question: Object
  },
  methods: {
    getImgUrl(img) {
      return this.question.image == null
      ? require ('../assets/quizz-images/default.jpg')
      : require ('../assets/quizz-images/'+ img)
    },
    convertAnswer(buttonValue) {
      return ((buttonValue == "Vrai") ? true : false);
    },
    checkScore(event) {
      console.log(event.target.value);
      if (this.convertAnswer(event.target.value) == this.questions.answer) {
        console.log("Correct answer")
      } else {
        console.log("WRONG!!")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .card-container{
    background-color: #ffff;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
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
    color: #c74d35; 
  }

  .card-body p {
    font-size: 16px;
    text-align: justify;
    flex: none;
  }

  .buttons input {

    width: 20%;
    margin: 2%;
    border-radius: 10px;
      -webkit-border-radius: 10;
      -moz-border-radius: 10;
    border: none;
    font-family: Arial;
    color: #ffffff;
    font-size: 18px;
    background: #f1b150;
    padding: 10px 10px 10px 10px;
    text-decoration: none;
  }

  .buttons input:hover {
    background: #c74d35;
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

  /* Colors 
HEX
main rose foncÃ© #d88c85
main rose clair #f6d9dd
accent jaune #f1b150
accent brique #c74d35
neutral #f4e5e5
neutral clair #f9f5f2
blanc accueil: #f0f0f0
*/
</style>
