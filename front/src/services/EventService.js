import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://quizz-geek-2022.herokuapp.com/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getQuestions() {
        return apiClient.get('/questions')
    }
}