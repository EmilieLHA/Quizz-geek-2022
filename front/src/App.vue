<template>
  <div class="application">

    <div id="nav">

      <h1 id="titre"><img src="@/assets/quizz-images/quiz.svg" alt="logo"></h1>

      <div id="links">
        <router-link to="/Accueil">Accueil</router-link><span class="pipe"> | </span>
        <router-link to="/about">About</router-link>
      </div>

    </div>
    <router-view/>
  </div>    
</template>

<style>

*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  overflow: hidden;
  font-size: 20px;
}

#app {
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #414447;
  background: #f0f0f0;
}

#nav {
  padding-right: 30px;
  background-color: #d88c85;
  border-bottom: 1px dotted #f4e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#titre img {
 width: 300px;
}

#nav a {
  
  font-weight: bold;
  color: #f9f5f2;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #c74d35;
}

#nav span {
  color: #f6d9dd;
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
