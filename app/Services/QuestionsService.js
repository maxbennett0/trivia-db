import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";

class QuestionsService {
  answerQuestion(answer) {
    let correctQuestion = appState.questions.find(a => a.correct_answer == answer)
    if (correctQuestion) {
      console.log(answer);
      Pop.toast('u got it dawg good job', "success", "center")
    } else {
      console.log('wrong');
      Pop.toast('not it loser', "error", "center")
    }
  }
  async getTrivia() {
    const response = await axios.get('https://opentdb.com/api.php?amount=50&category=12&difficulty=hard&type=multiple')
    console.log('trivia data', response.data.results);
    appState.questions = response.data.results.map(questionData => new Question(questionData))
  }

}

export const questionsService = new QuestionsService()