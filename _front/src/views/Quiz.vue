<template>
  <div class="home" v-if="questions">
    <question-card :questions="questions"></question-card>
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
      questions: null
    }
  },
  created() {
    getQuestions(this.theme_id)
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
