<template>
    
    <div class="accueil">
      <div class="theme-cards">
        <theme-card v-for="theme in themes" :key="theme.theme_id" :theme="theme"></theme-card>
      </div>

    </div>

</template>

<script>
import {getThemes} from '@/services/EventService'
import ThemeCard from '../components/ThemeCard.vue'

export default {
  name: 'Accueil',
  components: {
    "theme-card": ThemeCard
  },
  data() {
    return {
      themes: null
    }
  },
  created() {
    getThemes()
    .then(response => {
      this.themes = response.data.rows;
      console.log(response.data.rows)
    })
    .catch(err => {console.log(err.message)})
  }
}
</script>



<style scoped>
.accueil {
  width: 760px;
  margin: 100px auto;
}

.theme-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}


/* ------------- Mediaqueries ---------------- */
@media screen and (max-width: 768px ) {
  .accueil {
    width: 425px;
    margin: 50px auto;
  }
}

@media screen and (max-width: 425px ) {
  .accueil {
    width: 375px;
    margin: 30px auto;
  }
}

@media screen and (max-width: 320px ) {
  .accueil {
    width: 320px;
    margin: 30px auto;
  }
}
</style>
