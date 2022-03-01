<template>
  <div class="question-card">

    <div class="card-container">

      <div class="card-image">
        <img :src="require(`../assets/${question.image}`)" alt="image">
      </div>


      <div class="card-body">

        <h4 class="card-title"> VRAI OU FAUX?</h4>
        <p class="question">{{question.question}}</p>

        <div class="buttons">
          <button id="vrai">Vrai</button>
          <button id="faux">Faux</button>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      question: {
        question_id: 1,
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente aut beatae nam, non aperiam. Ut non possimus harum laudantium expedita ratione natus at quos nulla vel assumenda, ab accusamus aliquam consequuntur rerum. Perferendis ducimus quae mollitia quisquam sint, molestias eius quidem amet veritatis nulla eaque nemo tempore maxime voluptate reiciendis quaerat voluptatem minus cum ipsam enim? Totamciendis molestiae, provident possimus.",
        image: "pyramide.jpg",
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .question-card {
    background-color: #ffff;
    height: 40vh;
    width: 40vw;
    margin: 20px auto;
    border-radius: 15px;
  }

  .card-container{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 3%;
    padding: 3%;
  }

  .card-image {
    flex-basis: 150%;
  }

  .card-image img {
    width: 100%;
    max-height: 100%;
    border-radius: 15px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  .card-body h4 {
    font-size: 1.5vw;
    color: #1fc1c3; 
  }

  .card-body p {
    font-size: 0.8vw;
    text-align: justify;
  }

  .buttons button {
    -webkit-border-radius: 11;
    -moz-border-radius: 11;
    width: 20%;
    margin: 2%;
    border-radius: 11px;
    border: none;
    font-family: Arial;
    color: #ffffff;
    font-size: 20px;
    background: #1fc1c3;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
  }

  .buttons button:hover {
    background: #162f45;
    text-decoration: none;
  }

</style>
