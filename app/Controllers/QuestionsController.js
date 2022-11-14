import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestions() {
  let questions = appState.questions
  let template = ''
  questions.forEach(q => template += q.QuestionTemplate)
  setHTML('question-area', template)
}

export class QuestionsController {
  constructor() {
    console.log('controller working');
    this.getTrivia()
    _drawQuestions()
    appState.on('questions', _drawQuestions)
  }

  async getTrivia() {
    console.log('getting trivia');
    await questionsService.getTrivia()
    console.log('got trivia');
  }

  answerQuestion(answer) {
    questionsService.answerQuestion(answer)
  }
}

