import QuizPage from './components/pages/quizPage/quizPage';

const root = document.getElementById('root');

if (root) {
  root.append(new QuizPage().container);
}
