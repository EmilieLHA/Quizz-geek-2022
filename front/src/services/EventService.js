import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://quizz-geek-2022.herokuapp.com/api/'
})

export default {
    getQuestions() {
        return apiClient.get('/questions/1')
    }
}