import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  /*
  answerState: Memorizza lo stato della risposta attuale. Può assumere valori come:
"" (nessuna risposta data)
"answered" (l'utente ha dato una risposta)
"correct" (risposta corretta)
"wrong" (risposta sbagliata)
  */

  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  /*
 Determina l'indice della domanda attuale:
Se answerState è "" (nessuna risposta attuale in corso), il numero di risposte date (userAnswers.length) corrisponde all'indice della domanda attuale.
Se è in fase di elaborazione (answered, correct o wrong), si sottrae 1 per visualizzare la domanda attuale correttamente.
 */

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  // Controlla se il quiz è completato. Il quiz è finito quando tutte le domande sono state risposte (activeQuestionIndex === QUESTIONS.length).

  /*---------------------------------------------------------------------------------*/
  //                                GESTIONE DELLA RISPOSTA
  /*-------------------------------------------------------------------------------------*/
  const handleSelectAnswer = useCallback(
    /*
    useCallback è un hook di React che memorizza la funzione tra i render, evitando che venga ricreata ad ogni aggiornamento del componente.
Qui lo usiamo per evitare che handleSelectAnswer venga rigenerata ad ogni render, migliorando le performance.
L'array delle dipendenze [activeQuestionIndex] specifica che la funzione deve essere ricreata solo quando activeQuestionIndex cambia.
*/

    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      /*
      Aggiorna lo stato answerState a "answered" per segnalare che l'utente ha selezionato una risposta.
Questo stato viene utilizzato nel rendering per applicare effetti visivi (ad esempio, evidenziare la risposta selezionata).
      */
      setUserAnswers((previousUserAnswers) => {
        return [...previousUserAnswers, selectedAnswer];
      });
      /*
      Aggiorna lo stato userAnswers aggiungendo la nuova risposta selezionata.
setUserAnswers utilizza una funzione di aggiornamento basata sul valore precedente (previousUserAnswers).
return [...previousUserAnswers, selectedAnswer]; crea un nuovo array copiando il precedente e aggiungendo selectedAnswer.
*/

      setTimeout(() => {
        /*
        Avvia un ritardo di 1 secondo (1000ms) prima di verificare se la risposta è corretta.
Questo ritardo consente di mostrare visivamente l'effetto della selezione prima di passare alla valutazione.
*/
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        /*
        QUESTIONS[activeQuestionIndex].answers[0] rappresenta la risposta corretta (per convenzione, la prima risposta nell'array è quella giusta).
Se la risposta selezionata (selectedAnswer) corrisponde alla risposta corretta, imposta answerState su "correct".
Altrimenti, imposta answerState su "wrong".
        */

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
      /*
      Dopo 2 secondi, resetta lo stato answerState riportandolo a "".
Questo consente alla prossima domanda di apparire senza che lo stato della risposta precedente interferisca con il nuovo rendering.
Chiusura del primo setTimeout: l'intero blocco di valutazione della risposta avviene con un ritardo di 1 secondo.
      */
    },
    [activeQuestionIndex]
    /*
    La funzione handleSelectAnswer viene ricreata solo quando cambia activeQuestionIndex.
Questo garantisce che la funzione utilizzi sempre l'indice corretto della domanda attuale.
    */
  );
  /*
L'utente clicca su una risposta, attivando handleSelectAnswer.
answerState viene impostato a "answered", e la risposta viene aggiunta a userAnswers.
Dopo 1 secondo:
Se la risposta è corretta, answerState diventa "correct".
Se la risposta è errata, answerState diventa "wrong".
Dopo altri 2 secondi, answerState viene resettato a "", permettendo di passare alla domanda successiva.
*/

  /*---------------------------------------------------------------------------------*/
  //                                GESTIONE DELLo SKIP (quando non rispondiamo entro un tot di tempo)
  /*-------------------------------------------------------------------------------------*/
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    /*
    Definiamo la funzione come una arrow function (() =>), che non accetta parametri.
Quando handleSkipAnswer viene chiamata, esegue handleSelectAnswer(null), cioè passa null come risposta selezionata.
*/
    [handleSelectAnswer]
    /*
    L'array delle dipendenze contiene handleSelectAnswer, il che significa che questa funzione verrà ricreata solo se handleSelectAnswer cambia.
Siccome handleSelectAnswer è memorizzata con useCallback e dipende da activeQuestionIndex, handleSkipAnswer si aggiornerà solo quando necessario.
*/
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="quizCompleted" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    /*
    Se quizIsComplete è false, questa sezione del codice viene eseguita.
Se quizIsComplete fosse true, il codice non verrebbe eseguito a causa dell'early return precedente.
*/
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        /*
        React usa key per identificare in modo univoco gli elementi in una lista o durante il re-render.
Qui key è activeQuestionIndex, cioè l'indice della domanda attuale.
🔹 Vantaggi:

Se activeQuestionIndex cambia, React ricrea completamente il componente Question, forzando il suo stato a ripartire da zero.
Se non ci fosse key, il componente potrebbe riutilizzare lo stato precedente, causando problemi di rendering.
*/
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        /*
        userAnswers è l'array delle risposte date dall'utente.
userAnswers[userAnswers.length - 1] restituisce l'ultima risposta selezionata.
Se l'utente ha risposto a 4 domande, userAnswers potrebbe essere:
json
Copia
Modifica
["Parigi", "5", "Gatto", "Blu"]
Se l'utente sta rispondendo alla quinta domanda, userAnswers.length - 1 restituisce la quarta risposta ("Blu").
Questo valore verrà usato in Question per evidenziare la risposta selezionata.
*/
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
