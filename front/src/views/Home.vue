<template>
  <div class="home">
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

<style scoped>

.home {
  width: 100%;
  height: 100%;
}

</style>
