<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <QuestionCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionCard from '@/components/QuestionCard.vue'

export default {
  name: 'Home',
  components: {
    QuestionCard
  }
}
</script>
