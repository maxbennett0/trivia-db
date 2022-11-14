export class Question {

  constructor(data) {
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = [...data.incorrect_answers, this.correct_answer]
    this.incorrect_answers.sort(() => Math.random() - 0.5)
  }
  get QuestionTemplate() {
    return `
    <div class="col-8 card text-center m-3">
          <h4 class="p-2">${this.question}</h4>
          <button class="btn btn-success m-2 p-2" onclick="app.questionsController.answerQuestion('${this.incorrect_answers[0]}')">${this.incorrect_answers[0]}</button>
          <button class=" btn btn-success m-2 p-2" onclick="app.questionsController.answerQuestion('${this.incorrect_answers[1]}')">${this.incorrect_answers[1]}</button>
          <button class=" btn btn-success m-2 p-2" onclick="app.questionsController.answerQuestion('${this.incorrect_answers[2]}')">${this.incorrect_answers[2]}</button>
          <button class=" btn btn-success m-2 p-2" onclick="app.questionsController.answerQuestion('${this.incorrect_answers[3]}')">${this.incorrect_answers[3]}</button>
        </div>
    `
  }
}
