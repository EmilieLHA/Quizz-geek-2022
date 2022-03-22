<template>
  <div class="question-card">


    <div class="card-container">

      <div class="card-image">
        <img :src="getImgUrl(question.image)" alt="image">
      </div>


      <transition name="fade" mode="out-in">
        
        <div class="card-body" v-if="!showComment">
          <h4 class="card-title"> VRAI OU FAUX?</h4>
          <div class="card-text">
            <p class="question">{{question.question}}</p>
          </div>
          <div class="buttons">
            <input class="selection" type="button" id="vrai" @click="checkScore" value="Vrai">
            <input class="selection" type="button" id="faux" @click="checkScore" value="Faux">
          </div>
        </div>

        <div class="card-body" v-else>
          <h4 class="card-title"> {{ (this.correctAnswer == true) ? "BRAVO, bonne réponse!" : "Mauvaise réponse!" }} </h4>
          <div class="card-text">
            <p class="question">C'est {{(question.answer == true) ? "VRAI" : "FAUX"}}</p>
            <p>{{question.comment}}</p>
          </div>
          <div class="buttons">
            <input v-if="!endOfQuiz" type="button" class="next" @click="callNextQuestion" value="Next">
            <input v-else type="button" class="next" value="Résultats" @click="sendResults"> 
          </div>
        </div>

      </transition>
    </div>

  </div>

</template>

<script>

export default {
  name: 'QuestionCard',
  props: {
    question: Object,
    checkPageTurn: Boolean,
    currentPage: Number,
    endOfQuiz: Boolean
  },

  data() {
    return {
      showComment: false,
      icon: null,
      correctAnswer: undefined,
      score:0
    }
  },

  //Boolean parameters thats changes each time you go to next question in order to change content
  watch: {
    checkPageTurn() {
      this.showComment = false;
      this.correctAnswer = undefined;
    }
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
      if (this.convertAnswer(event.target.value) == this.question.answer) {
        this.correctAnswer = true;
        this.score++;
      } else {
        this.correctAnswer = false;
      }
      this.showComment = true;
    },
    callNextQuestion() {
      this.$emit('load-next-question')
    },
    sendResults() {
      this.$emit('send-results', this.score)
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
    margin: 3% auto;

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
    color: #d88c85; 
  }

  .card-body p {
    font-size: 16px;
    text-align: justify;
    flex: none;
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
  }

  .buttons input {
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
  }

  .buttons input:hover {
    background: #c74d35;
    text-decoration: none;
  }

  .selection {
    width: 50%;
  }

  .next {
    width: 100%;
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
      font-size: 12px;
    }

    .card-body h4 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 425px ) {

  .card-body h4 {
      font-size: 16px;
  }
  
  .card-container{
    height: 400px;
    width: 300px;
  }

  .card-body {
    height: 100%; 
    padding-top: 10px;
  }

  .card-body p {
    font-size: 12px;
    text-align: justify;
    flex: none;
  }
}

/* ------------- Transitions ---------------- */

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
/*
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
