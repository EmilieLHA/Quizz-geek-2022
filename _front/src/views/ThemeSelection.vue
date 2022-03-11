<template>
    
    <div class="themeSelection">

      <div class="theme-cards">
        <theme-card v-for="theme in themes" :key="theme.theme_id" :theme="theme"></theme-card>
      </div>

    </div>

</template>

<script>
import {getThemes} from '@/services/EventService'
import ThemeCard from '../components/ThemeCard.vue'

export default {
  name: 'ThemeSelection',
  components: {
    "theme-card": ThemeCard
  },
  data() {
    return {
      themes: null,
      selectedTheme: undefined
    }
  },
  created() {
    getThemes()
    .then(response => {
      this.themes = response.data.rows;
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
