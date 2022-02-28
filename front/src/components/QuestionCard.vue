<template>
  <div class="question-card">
    <h4>Vrai ou faux?</h4>
    <p>{{question.question}}</p>

  </div>
</template>

<script>
export default {
  name: 'QuestionCard',

  data() {  
    return {
      question: {
        question_id: 1,
        theme_id: 1,
        question: "This is a question from the data.",
        comment: "This is the comment that apears when you validate",
        answer: true
      }
    }
  }
}

</script>


<style scoped>

</style>
