import { Link } from 'react-router-dom'

const Page1 = () => {
    return (
        <div className="page" style={{backgroundColor:"pink"}}>
            <h1>Page 1</h1>
            <Link to="/page2">Go to Page 2</Link>
        </div>
    )
}

export default Page1;