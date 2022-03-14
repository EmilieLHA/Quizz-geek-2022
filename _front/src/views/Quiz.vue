<template>
  <div class="home" v-if="questions">
    <div class="questionCard-header">
      <h4>Question {{currentPage}} / 5 </h4>
    </div>
    <question-card :question="questionToDisplay" :checkPageTurn="checkPageTurn" @load-next-question="loadNextQuestion" :endOfQuiz="endOfQuiz"></question-card>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionCard from '@/components/QuestionCard.vue'
import {getQuestions} from '@/services/EventService'

export default {
  props: ['theme_id'],
  name: 'Quiz',
  components: {
    "question-card": QuestionCard
  },
  data() {
    return {
      questions: null,
      questionToDisplay: null,
      currentPage: 1,
      checkPageTurn: false
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

  .questionCard-footer button {

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

  .questionCard-footer button:hover {
    background: #c74d35;
    text-decoration: none;
  }

</style>
