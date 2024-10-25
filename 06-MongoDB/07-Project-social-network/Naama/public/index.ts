import { handelAddUserToDB, renderRegistretion } from './pageRenders/userRegistration';
import './dist/styles.css'
import { handelLogin, renderLogin } from './pageRenders/userLogin';
import { handelAddBookToDB, renderBookCreation1 } from './pageRenders/bookCreation';
import { renderChapterCreation } from './pageRenders/chapterCreation';
//client routing for site
class Router {
  private routes: { [key: string]: string } = {};

  constructor() {
    window.addEventListener('popstate', () => this.route());
    document.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('data-link') !== null) {
        e.preventDefault();
        this.navigate(target.getAttribute('href')!);
      }
    });
  }

  addRoute(path: string, view: string) {
    this.routes[path] = view;
  }

  navigate(path: string) {
    history.pushState(null, '', path);
    this.route();
  }

  route() {
    const path = window.location.pathname || '/';
    const view = this.routes[path] || '<h1>404 - Page Not Found</h1>';
    document.getElementById('app')!.innerHTML = view;
  }
}

const router = new Router();
router.addRoute('/', 'home' );
router.addRoute('/register', renderRegistretion());
router.addRoute('/login', renderLogin());
router.addRoute('/add-book', renderBookCreation1());
router.addRoute('/add-chapter',renderChapterCreation());
router.addRoute('/my-books',"");

router.route();

const regform = document.getElementById('registerForm') as HTMLFormElement;
if(regform){regform.addEventListener('submit',(event: Event)=>handelAddUserToDB(event));}

const logform = document.getElementById('loginForm') as HTMLFormElement;
if(logform){logform.addEventListener('submit',(event: Event)=>handelLogin(event));}

const bookform1 = document.getElementById('bookCreationForm') as HTMLFormElement;
if(bookform1){logform.addEventListener('submit',(event: Event)=>handelAddBookToDB(event));}
