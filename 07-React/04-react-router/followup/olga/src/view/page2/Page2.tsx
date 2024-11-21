import { Link } from "react-router-dom"

const Page2 = () => {
    return (
        <div className='page'>
            <Link to="/">Back to home</Link>
            <h1>Page2</h1>
            <Link to="/page1">Page1</Link>
        </div>
    )
}

export default Page2