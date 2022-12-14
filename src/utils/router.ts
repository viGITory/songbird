import clearContainer from './clearContainer';

const router = (routes: { [key: string]: HTMLElement }) => {
  const root = document.getElementById('root');
  const path = window.location.hash.slice(1).toLowerCase() || '/';
  const page = routes[path] || routes['/404'] || '';

  if (root) {
    clearContainer(root);
    root.append(page);
  }
};

export default router;
