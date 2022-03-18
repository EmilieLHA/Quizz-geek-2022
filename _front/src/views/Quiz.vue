<template>
  <transition name="fade" mode="out-in">
  <div class="home" v-if="questions">

      <div v-show="!showResultComponent" class="questionCard-header">
        <h4>Question {{currentPage}} sur 5 </h4>
      </div>

      <div v-show="showResultComponent" class="questionCard-header">
        <h4>Resultats </h4>
      </div>

      <question-card v-if="!showResultComponent"
      :question="questionToDisplay" :checkPageTurn="checkPageTurn" :endOfQuiz="endOfQuiz" 
      @load-next-question="loadNextQuestion"
      @send-results="getScore"
      ></question-card>

      <result-card v-if="showResultComponent" :score="score"></result-card>


  </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import QuestionCard from '@/components/QuestionCard.vue'
import ResultCard from '@/components/ResultCard.vue'
import {getQuestions} from '@/services/EventService'

export default {
  props: ['theme_id'],
  name: 'Quiz',
  components: {
    "question-card": QuestionCard,
    "result-card": ResultCard
  },
  data() {
    return {
      questions: null,
      questionToDisplay: null,
      currentPage: 1,
      checkPageTurn: false,
      showResultComponent: false,
      score: 0
    }
  },
  computed: {
    endOfQuiz() {
      return this.currentPage >= 5 ? true : false;
    }
  },
  methods: {
    loadNextQuestion() {
        this.currentPage ++;
        this.questionToDisplay = this.questions[this.currentPage -1];
        this.checkPageTurn = !this.checkPageTurn;
        },
    getScore(score){
      this.showResultComponent = true,
      this.score = score;
    }
  },
  created() {
    getQuestions(this.theme_id)
    .then(response => {
      this.questions = response.data.rows;
      this.questionToDisplay = this.questions[this.currentPage -1];
    })
    .catch(err => {console.log(err.message)})
  }
}
</script>

<style scoped>

  .home {
    width: 100%;
    height: 100%;
  }

  .questionCard-header {
    text-align: center;
    margin-top: 2%;
    margin-bottom: 0;
    color: #d88c85;
  }

</style>
