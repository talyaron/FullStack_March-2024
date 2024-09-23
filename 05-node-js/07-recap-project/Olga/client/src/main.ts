import { getDataFromDB } from './controllers/asyncFunctions';
import './style.scss'
import { renderPage } from './views/pagesView';

document.addEventListener('DOMContentLoaded', async () => {
  await getDataFromDB();
  renderPage("home");
})