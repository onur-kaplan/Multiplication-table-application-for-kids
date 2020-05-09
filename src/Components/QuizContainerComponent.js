import QuizHeadingComponent from './QuizHeadingComponent';

const template = `<div class="my-3 p-3 bg-white rounded shadow-sm position-relative students-test-panel flipInX" >
      <div class="quiz-container">
        __QUIZ_HEADING__

        <div class="d-flex flex-column align-items-center justify-content-center mt-4">
          <h4 class="alert alert-success count-down-box ">
            <small class="mr-1">Quiz Time</small> <span class="badge badge-dark" id="timer-box">0:10</span>
          </h4>
          <button type="button" class="d-flex align-items-center justify-content-center btn btn-success btn-lg btn-block py-5 start-to-quiz">
            <img class="quiz-start-icon" src="https://image.flaticon.com/icons/svg/1944/1944882.svg">
            <h2 class="quiz-start-text ml-4"> Çarpmaya Başla</h2>
          </button>
        </div>

        <div class="d-none align-items-center justify-content-center quiz-main-box flipInX">
          <div class="number-one"> </div>
          <div class="number-seperator mx-4">X</div>
          <div class="number-two"> </div>
          <div class="number-seperator mx-4"> = </div>
          <input class="quiz-guess  ml-4" type="text" value="" />
          <div class="alert  quiz-guess-result ml-2">

          </div>

        </div>
      </div>
    </div>`;

export default class QuizContainerComponent {
    render () {
        return template.replace('__QUIZ_HEADING__', (new QuizHeadingComponent()).render())
    }
}
