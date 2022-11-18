import QuizScore from './components/quizScore/quizScore';
import QuizCategories from './components/quizCategories/quizCategories';
import QuizQuestion from './components/quizQuestion/quizQuestion';
import QuizAnswers from './components/quizAnswers/quizAnswers';
import BirdCard from './components/birdCard/birdCard';
import NextQuestionButton from './components/nextQuestionButton/nextQuestionButton';

import createElement from '../../../utils/createElement';

class QuizPage {
  container;

  components;

  constructor() {
    this.container = createElement({ tagName: 'div', attributes: { class: 'quiz-page' } });
    this.components = {
      quizScore: new QuizScore(),
      quizCategories: new QuizCategories(),
      quizQuestion: new QuizQuestion(),
      quizAnswers: new QuizAnswers(),
      birdCard: new BirdCard(),
      nextQuestionButton: new NextQuestionButton(),
    };

    this.container.append(
      this.components.quizScore.container,
      this.components.quizCategories.container,
      this.components.quizQuestion.container,
      this.components.quizAnswers.container,
      this.components.birdCard.container,
      this.components.nextQuestionButton.container
    );
  }

  get() {
    return this.container;
  }
}

export default QuizPage;
