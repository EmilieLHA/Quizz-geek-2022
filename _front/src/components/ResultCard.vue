<template>
  <div class="result-card">

    <div class="card-container">
      <h4>{{titre}}</h4>
      <p>Votre score est de <br> <span id="score">{{score}} / 5</span></p>
      <p v-html="message"></p>
        <router-link to="/">
          <div class="button">
            <img src="../assets/quizz-images/Logo.svg" alt="image"> 
          </div>
        </router-link>
    </div>

  </div>

</template>

<script>
export default {
    name: 'ResultCard',
    props:{
      score: Number
    },
    computed: {
      titre(){
        if (this.score==0) {
          return "DESOLE!"
        } else if (this.score >0 && this.score < 5) {
          return "PAS MAL!"
        } else {
          return "BRAVO!"
        }
      },
      message(){
        if (this.score==0) {
          return "On ne peut pas exceller dans tous les domaines. </br> N'hésitez pas à tenter un autre quiz!"
        } else if (this.score >0 && this.score < 5) {
          return "On tente une autre catégorie pour voir si vous pouvez faire mieux?"
        } else {
          return "Vous êtes un expert. </br> On tente une autre catégorie?"
        }
      }
    }
}
</script>

<style scoped>

  .card-container{
    background-color: #ffff;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    border-radius: 15px;
      -webkit-border-radius: 15;
      -moz-border-radius: 15;
    height: 350px;
    width: 700px;
    margin: 3% auto;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
  }

  h4 {
    color: #d88c85;
    margin-bottom: 5%;
  }

  p {
    margin: auto;
  }

  img{
    width: 15%;
    transition: transform 0.2s ease-in-out;
  }

  img:hover {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transition: transform 0.2s ease-in-out;
  }

  #score {
    color: #d88c85;
    font-size: 3em;
  }

</style>