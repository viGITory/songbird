import './quizPage.scss';

import Header from '../../common/header/header';
import QuizCategories from './components/quizCategories/quizCategories';
import QuizQuestion from './components/quizQuestion/quizQuestion';
import QuizAnswers from './components/quizAnswers/quizAnswers';
import BirdCard from './components/birdCard/birdCard';
import NextQuestionButton from './components/nextQuestionButton/nextQuestionButton';

import createElement from '../../../utils/createElement';
import QuizScore from './components/quizScore/quizScore';

class QuizPage {
  container;

  components;

  constructor() {
    this.container = createElement({ tagName: 'div', attributes: { class: 'quiz-page' } });
    this.components = {
      header: new Header(),
      score: new QuizScore(),
      quizCategories: new QuizCategories(),
      quizQuestion: new QuizQuestion(),
      quizAnswers: new QuizAnswers(),
      birdCard: new BirdCard(),
      nextQuestionButton: new NextQuestionButton(),
    };

    this.components.header.container.append(this.components.score.container);

    this.render();
  }

  render = () => {
    this.container.append(
      this.components.header.container,
      createElement({
        tagName: 'main',
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
