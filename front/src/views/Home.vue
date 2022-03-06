<template>
  <div class="home">
    <question-card :questions="questions"></question-card>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionCard from '@/components/QuestionCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'Home',
  components: {
    "question-card": QuestionCard
  },
  data() {
    return {
      questions: null
    }
  },
  created() {
    EventService.getQuestions()
    .then(response => {
      this.questions = response.data.rows[1];
    })
    .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>

.home {
  width: 100%;
  height: 100%;
}

</style>
