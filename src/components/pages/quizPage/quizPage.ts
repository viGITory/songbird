import './quizPage.scss';

import Header from '../../common/header/header';
import QuizCategories from './components/quizCategories/quizCategories';
import QuizQuestion from './components/quizQuestion/quizQuestion';
import QuizAnswers from './components/quizAnswers/quizAnswers';
import BirdCard from '../../common/birdCard/birdCard';
import NextQuestionButton from './components/nextQuestionButton/nextQuestionButton';

import createElement from '../../../utils/createElement';
import QuizScore from './components/quizScore/quizScore';

class QuizPage {
  container;

  components;

  constructor() {
    this.container = createElement({ tagName: 'div', attributes: { class: 'quiz-page' } });
    this.components = {
      header: new Header(new QuizScore()),
      quizCategories: new QuizCategories(),
      quizQuestion: new QuizQuestion(),
      quizAnswers: new QuizAnswers(),
      birdCard: new BirdCard(),
      nextQuestionButton: new NextQuestionButton(),
    };

    this.render();
  }

  stopAudio = () => {
    this.components.quizQuestion.audioPlayer.stopAudio();
    this.components.birdCard.audioPlayer.stopAudio();
  };

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
}

export default QuizPage;
