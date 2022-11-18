import QuizPage from './components/pages/quizPage/quizPage';

class AppView {
  root;

  quizPage;

  constructor() {
    this.root = document.getElementById('root') as HTMLElement;

    this.quizPage = new QuizPage();

    this.root.append(this.quizPage.container);
  }

  renderCategories = (handler: () => string[]) => {
    this.quizPage.components.quizCategories.render(handler());
  };
}

export default AppView;
