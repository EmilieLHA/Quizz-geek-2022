<template>
  <div class="app">

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

    <router-view/>

  </div>    
</template>

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

.nav {
  padding-right: 30px;
  padding-left: 30px;
  width: 100%;
  background-color: #d88c85;
  border-bottom: 1px dotted #f4e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#logo img {
 width: 300px;
}

.links {
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
}

.link a {
  font-weight: bold;
  color: #f9f5f2;
  text-decoration: none;
}

.link-bloc span::after {
  content: '';
  display: block;
  width: 0px;
  margin: 5px auto 0 auto;
  height: 2px;
  border-radius: 2px;
  background: #f9f5f2;
  transition: width 0.2s ease-out;
}

.link-bloc span:hover::after {
  width: 100%;
}

.nav a.router-link-exact-active {
  color: #c74d35;
}

.pipe {
  color: #f6d9dd;
  margin: 0px 10px;
}

/* ------------- Mediaqueries ---------------- */
@media screen and (max-width: 768px ) {
  #titre img {
    width: 200px;
  }
}

@media screen and (max-width: 425px ) {
  body {
    font-size: 12px;
  }
  #logo img {
    width: 150px;
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
