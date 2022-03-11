<template>
    
    <router-link :to="{ name: 'Quiz', params: {theme_id: theme.theme_id}}">
        <div class="theme-card">
        
            <img :src="require(`../assets/quizz-images/${theme.theme_image}`)" alt="image"> 

        </div>
    </router-link>

</template>

<script>
export default {
    name: 'ThemeCard',
    props: {
        theme: Object
    }
}
</script>

<style scoped>

img {
    width: 350px;
    border-radius: 15px;
    margin: 15px;
    cursor: pointer;
    transition: transform 0.3s ease-out;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

img:hover {
    transform: translateY(-5px);
}

/* ------------- Mediaqueries ---------------- */
@media screen and (max-width: 768px ) {
    img {
        width: 250px;
        margin: 5px;
    }
}
</style>