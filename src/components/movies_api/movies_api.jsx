import axios from "axios";
import { useState } from "react";

const Movies_api = () => {
  const [movies, setMovies] = useState([]);
  function getMovies() {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles",
      headers: {
        "X-RapidAPI-Key": "41b4a2065dmshd8617196b5c5b7ap1d88bajsn9a58018f65d9",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((data) => {
        console.log("data: ", data.data.results);
        setMovies(data.data.results);
      })
      .catch((err) => console.log("err: ", err));
  }

  return (
    <div className="movies">
      <div className="feature-box ">
        <ul className="massage-box">
          <h3>Received movies</h3>
          {movies.map((movie, index) => (
            <li key={index} className="massage-sub-box">
              {movie.titleText.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="form__group msg_btn">
        <button type="submit" className="btn btn--white" onClick={getMovies}>
          Show Movies List
        </button>
      </div>
    </div>
  );
};

export default Movies_api;
