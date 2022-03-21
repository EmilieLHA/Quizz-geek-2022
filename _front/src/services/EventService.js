import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://quiz-geek.herokuapp.com/api/'
})

export function getQuestions(theme_id) {
        return apiClient.get('/questions/theme/' +theme_id)
}

export function getThemes() {
        return apiClient.get('/themes')
}