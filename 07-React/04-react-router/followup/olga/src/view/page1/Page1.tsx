import { Link } from "react-router-dom"

const Page1 = () => {
    return (
        <div className='page'>
            <Link to="/">Back to home</Link>
            <h1>Page1</h1>
            <Link to="/page2">Page2</Link>
        </div>
    )
}

export default Page1