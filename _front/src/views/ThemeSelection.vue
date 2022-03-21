<template>

    <div class="themeSelection">

      <loader v-if="isLoading" color="#f1b150"></loader>
    
      <div class="theme-cards" v-if="!isLoading">
        <theme-card v-for="theme in themes" :key="theme.theme_id" :theme="theme"></theme-card>
      </div>

    </div>
  
</template>

<script>
import {getThemes} from '@/services/EventService'
import ThemeCard from '../components/ThemeCard.vue'
import Loader from '../components/Loader.vue'

export default {
  name: 'ThemeSelection',
  components: {
    "theme-card": ThemeCard,
    "loader": Loader
  },
  data() {
    return {
      themes: null,
      isLoading: true
    }
  },
  created() {
    getThemes()
    .then(response => {
      this.themes = response.data.rows;
      this.isLoading = false;
    })
    .catch(err => {console.log(err.message)})
  }
}
</script>



<style scoped>

.themeSelection {
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
  .themeSelection {
    width: 425px;
    margin: 50px auto;
  }
}

@media screen and (max-width: 425px ) {
  .themeSelection {
    width: 375px;
    margin: 30px auto;
  }
}

@media screen and (max-width: 320px ) {
  .themeSelection {
    width: 320px;
    margin: 30px auto;
  }
}

</style>
