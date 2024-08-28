import './styles/main.scss'
import { renderFooter } from './views/FooterView';
import { renderHeader } from './views/HeaderView';
import { renderHomePage } from './views/HomeView';

renderHeader();
renderHomePage();
renderFooter();

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     Hello World!
//   </div>
// `
