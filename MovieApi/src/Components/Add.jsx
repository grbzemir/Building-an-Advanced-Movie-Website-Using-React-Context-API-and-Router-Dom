import React, { useState, useCallback } from "react";
import ResultCart from "./ResultCart";
import debounce from 'lodash.debounce'; // `lodash.debounce`'i içe aktarın

const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const fetchMovies = useCallback(debounce((query) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b4eaeb31c16ae3a7865fab6842bade54&language=en-US&page=1&include_adult=false&query=${query}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('Search results:', data);
                if (data.results) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                setResults([]);
            });
    }, 500), []); // 500ms gecikme

    function onChange(e) {
        const value = e.target.value;
        setQuery(value);
        if (value.trim() === "") {
            setResults([]);
            return;
        }
        fetchMovies(value);
    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
                    <div className="titles">
                        <h1>Hoş Geldiniz.</h1>
                        <h2>
                            Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
                        </h2>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            value={query}
                            onChange={onChange}
                            placeholder="Film, dizi, kişi ara..."
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCart movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Add;
