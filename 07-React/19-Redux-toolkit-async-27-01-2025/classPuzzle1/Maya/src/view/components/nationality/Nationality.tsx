import { Link, useParams } from 'react-router-dom';
import { useGetNationalityByNameQuery } from '../../../services/nationality';

const Nationality = () => {
    const { name = "nathaniel" } = useParams<{ name: string }>(); // Default to "nathaniel"
    const { data, error, isLoading } = useGetNationalityByNameQuery(name); // Fixed hook name

    console.log(data, error, isLoading);

    return (
        <div className="App">
            <div>
                <Link to="/nationality/John">John</Link>
                <Link to="/nationality/nathaniel">Nathaniel</Link>
            </div>
            {error ? (
                <p>Oh no, there was an error!</p>
            ) : isLoading ? (
                <p>Loading...</p>
            ) : data ? (
                <>
                    <h3>{data.name}</h3>
                    <p>Count: {data.count}</p>
                    <h4>Countries:</h4>
                    <ul>
                        {data.countries.map((country) => (
                            <li key={country.country_id}>
                                {country.country_id} - Probability: {country.probability.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </>
            ) : null}
        </div>
    );
};

export default Nationality;
