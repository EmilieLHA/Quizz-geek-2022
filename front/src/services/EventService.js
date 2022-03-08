import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://quizz-geek-2022.herokuapp.com/api/'
})

export function getQuestions() {
        return apiClient.get('/questions/1')
}

export function getThemes() {
        return apiClient.get('/themes')
}