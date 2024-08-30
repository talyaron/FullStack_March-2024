import { renderLogin } from './controllers/Authentication/login';
import './styles/main.scss'

const app = document.querySelector<HTMLDivElement>('#app')! as HTMLDivElement;
if (app) renderLogin(app);

