import './style.css'

import { renderForm } from '../src/view/studentView'

document.querySelector<HTMLDivElement>('#studentCrp')!.innerHTML = renderForm()
