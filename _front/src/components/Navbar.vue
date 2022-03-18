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
            <router-link to="/About">A propos</router-link>
          </span>
        </div>
        
        <span class="pipe"> | </span>

        <div class="link-bloc">
          <span class="link">
            <a href="https://emilielharidon.com/" target="_blank"> Mon Portfolio</a>
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

<style scoped>

.nav {
  padding-right: 30px;
  padding-left: 30px;
  width: 100%;
  background-color: #d88c85;
  border-bottom: 1px dotted #f4e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
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
  font-size: 20px;
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
  #logo img {
    width: 200px;
  }
}

@media screen and (max-width: 425px ) {
  #logo img {
    width: 150px;
  }
}

</style>