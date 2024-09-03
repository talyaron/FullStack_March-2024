import './styles/main.scss';
import { renderLogin } from './controllers/Authentication/login';
import { renderPage } from './views/PagesView';
import { homePage, loginPage } from './models/Pages';


// const app = document.querySelector<HTMLDivElement>('#app')! as HTMLDivElement;
// if (app) renderLogin(app);

renderPage(homePage);
// renderPage(loginPage)