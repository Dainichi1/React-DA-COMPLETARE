import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTION from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );

  const skippedAnswerShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswersShare;

  return (
    <div id="summary">
      <div id="summary">
        <img src={quizCompleteImg} alt="quizCompleted" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
          <p>
            <span className="number">{skippedAnswerShare}%</span>
            <span className="text">skipped</span>
          </p>
          <p>
            <span className="number">{correctAnswers}%</span>
            <span className="text">answered correctly</span>
          </p>
          <p>
            <span className="number">{wrongAnswerShare}%</span>
            <span className="text">answered incorrectly</span>
          </p>
        </div>
        <ol>
          {userAnswers.map((answer, index) => {
            let cssClass = "user-answer";

            if (answer === null) {
              cssClass += " skipped";
            } else if (answer === QUESTION[index].answers[0]) {
              cssClass += " correct";
            } else {
              cssClass += " wrong";
            }

            return (
              <li key={answer}>
                <h3>{index + 1}</h3>
                <p className="question">{QUESTION[index].text}</p>
                <p className={cssClass}>{answer ?? "Skipped"}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
