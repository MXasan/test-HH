import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [type, setType] = useState("trivia");
    const [number, setNumber] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("1");
    const [day, setDay] = useState("1");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/result", {
            state: {
                type,
                number: number || "random",
                year: year || "random",
                month: month || "random",
                day: day || "random",
            }
        });
    };

    const handleRandom = (selectedType) => {
        navigate("/result", {
            state: {
                type: selectedType,
                number: "random",
                year: "random",
                month: "random",
                day: "random",
            }
        });
    };

    return (
        <div>
            <h1>Узнай факт о числе</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Тип:
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="trivia">Trivia</option>
                        <option value="math">Math</option>
                        <option value="year">Year</option>
                        <option value="date">Date</option>
                    </select>
                </label>

                {type === "date" ? (
                    <>
                        <label>
                            Месяц:
                            <input
                                type="number"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                            />
                        </label>
                        <label>
                            День:
                            <input
                                type="number"
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                            />
                        </label>
                    </>
                ) : (
                    <label>
                        Число:
                        <input
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </label>
                )}

                <button type="submit">Получить факт</button>
            </form>

            <div className="random" style={{ marginTop: "20px" }}>
                <h3>Случайный факт:</h3>
                <button type="button" onClick={() => handleRandom("trivia")}>
                    random Trivia
                </button>
                <button type="button" onClick={() => handleRandom("math")}>
                    random Math
                </button>
                <button type="button" onClick={() => handleRandom("year")}>
                    random Year
                </button>
                <button type="button" onClick={() => handleRandom("date")}>
                    random Date
                </button>
            </div>
        </div>
    );
}

export default Home;
