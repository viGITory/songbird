import QuizScore from './components/quizScore/quizScore';
import QuizCategories from './components/quizCategories/quizCategories';
import QuizQuestion from './components/quizQuestion/quizQuestion';
import QuizAnswers from './components/quizAnswers/quizAnswers';
import BirdCard from './components/birdCard/birdCard';
import NextQuestionButton from './components/nextQuestionButton/nextQuestionButton';

import createElement from '../../../utils/createElement';

class QuizPage {
  container;

  quizScore;

  quizCategories;

  quizQuestion;

  quizAnswers;

  birdCard;

  nextQuestionButton;

  constructor() {
    this.container = createElement({ tagName: 'div', attributes: { class: 'quiz-page' } });

    this.quizScore = new QuizScore();
    this.quizCategories = new QuizCategories();
    this.quizQuestion = new QuizQuestion();
    this.quizAnswers = new QuizAnswers();
    this.birdCard = new BirdCard();
    this.nextQuestionButton = new NextQuestionButton();

    this.container.append(
      this.quizScore.container,
      this.quizCategories.container,
      this.quizQuestion.container,
      this.quizAnswers.container,
      this.birdCard.container,
      this.nextQuestionButton.container
    );
  }

  get() {
    return this.container;
  }
}

export default QuizPage;
