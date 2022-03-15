<template>
  <nav class="nav">

      <router-link id="logo" to="/"><img src="@/assets/quizz-images/quiz.svg" alt="logo"></router-link>

      <div class="links">

        <div class="link-bloc">
          <span class="link">
            <router-link to="/">Accueil</router-link>
          </span>
        </div>
        
        <span class="pipe"> | </span>

        <div class="link-bloc">
          <span class="link">
            <router-link to="/about">About</router-link>
          </span>
        </div>

      </div>

    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>