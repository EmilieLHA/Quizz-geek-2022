<template>
  <div class="app">
    <navbar></navbar>
    <router-view/>
  </div>    
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    'navbar': Navbar
  }
}


</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
}

.app {
  width: 100%;
  height: 100%;
  margin: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #414447;
  background: #fff;
}

/* ------------- Mediaqueries ---------------- */

@media screen and (max-width: 425px ) {
  body {
    font-size: 12px;
  }
}

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
