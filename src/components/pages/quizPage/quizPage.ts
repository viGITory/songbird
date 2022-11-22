import './quizPage.scss';

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

    this.render();
  }

  render = () => {
    this.container.append(
      this.components.quizScore.container,
      createElement({
        tagName: 'main',
        attributes: { class: 'quiz-page__main' },
        children: [
          this.components.quizCategories.container,
          createElement({
            tagName: 'div',
            attributes: { class: 'quiz-page__center' },
            children: [
              createElement({
                tagName: 'div',
                attributes: { class: 'quiz-page__wrapper' },
                children: [
                  this.components.quizQuestion.container,
                  this.components.quizAnswers.container,
                ],
              }),
              createElement({
                tagName: 'div',
                attributes: { class: 'quiz-page__card-wrapper' },
                children: [this.components.birdCard.container],
              }),
            ],
          }),
          createElement({
            tagName: 'div',
            attributes: { class: 'quiz-page__bottom' },
            children: [this.components.nextQuestionButton.container],
          }),
        ],
      })
    );
  };

  get() {
    return this.container;
  }
}

export default QuizPage;
