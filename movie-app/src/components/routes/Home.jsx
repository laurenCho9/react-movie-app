import { useEffect, useState } from "react";
import Movies from "../movie/Movies";
import styled from "styled-components";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Section>
          {movies.map((movie) => (
            <Movies
              id={movie.id}
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </Section>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  max-width: 1200px;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  max-width: 100%;
`;

export default Home;
