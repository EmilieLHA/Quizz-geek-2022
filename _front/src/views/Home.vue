<template>
  <div class="home">
    <question-card :questions="questions"></question-card>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionCard from '@/components/QuestionCard.vue'
import {getQuestions} from '@/services/EventService'

export default {
  name: 'Home',
  components: {
    "question-card": QuestionCard
  },
  data() {
    return {
      questions: {
       answer: "",
       comment: "",
       image: "default.jpg",
       question_id: "",
       theme_id: ""
      }
    }
  },
  created() {
    getQuestions()
    .then(response => {
      this.questions = response.data.rows[0];
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

</style>
