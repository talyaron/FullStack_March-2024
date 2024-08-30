import { renderLogin } from './controllers/Authentication/login';
import './styles/main.scss'
import { renderFooter } from './views/FooterView';
import { renderHeader } from './views/HeaderView';
import { renderHomePage } from './views/HomeView';

const app = document.querySelector<HTMLDivElement>('#app')! as HTMLDivElement;
if (app) renderLogin(app);

// renderHeader();
// renderHomePage();
// renderFooter();

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     Hello World!
//   </div>
// `
