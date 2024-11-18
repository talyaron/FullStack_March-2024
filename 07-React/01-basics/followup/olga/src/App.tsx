import userPic from './assets/upic.jpg'
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <div className="business-card">
      <img
        src={userPic}
        alt="Olga Larin"
        className="business-card__image"
      />
      <h1 className="business-card__name">Olga Larin</h1>
      <p className="business-card__title">Frontend Developer</p>
      <p className="business-card__description">
        Passionate about building user-friendly web applications. Let's connect!
      </p>
      <div className="business-card__buttons">
        <a href="https://www.linkedin.com/in/olga-v-larina/" target="_blank" className="business-card__button" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/21apr" target="_blank" className="business-card__button" rel="noreferrer">GitHub</a>
        <a href="mailto:21apr88@gmail.com" className="business-card__button">Email Me</a>
      </div>
    </div>

  )
}

export default App
