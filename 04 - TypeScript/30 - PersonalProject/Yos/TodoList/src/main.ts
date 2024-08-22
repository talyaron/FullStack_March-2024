import './style.css'
import { renderLogin } from './controllers/login';
import  {showPopUpFinishYourTask} from './controllers/popup';

const app = document.querySelector<HTMLDivElement>('#todo-list')! as HTMLDivElement;
if(app) renderLogin(app);


//run set time interval to run every minute
setInterval(showPopUpFinishYourTask, 10000);