import { useEffect, useState } from "react";
import { useLocation , Link} from "react-router-dom";

function Result() {
    const location = useLocation()
    const { type, number, year, month, day } = location.state || {}

    const [fact, setFact] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        if (!type) return;
        let url = "http://numbersapi.com/";

        if (type === "date") {
            url += `${month}/${day}/date`;
        } else {
            url += `${number}/${type}`;
        }

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Ошибка при получении данных");
                }
                return res.text();
            })
            .then((data) => {
                setFact(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [type, number, year, day]);

    return (
        <>

            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
            <h1>Результат запроса</h1>

            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && (
                <div>
                    <p><strong>Тип:</strong> {type}</p>
                    {type === "date" ? (
                        <p><strong>Дата:</strong> {month}/{day}</p>
                    ) : (
                        <p><strong>Число:</strong> {number}</p>
                    )}
                    <p><strong>Факт:</strong> {fact}</p>
                </div>
            )}
        </>
    )
}

export default Result;
