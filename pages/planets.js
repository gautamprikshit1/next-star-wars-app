import Link from "next/link";
import styles from "../styles/People.module.css";

const Planets = ({ results }) => {
  return (
    <div>
      <h1 className={styles.header}>Star wars Planets</h1>
      {results.results.map((result) => (
        <div className="cards" key={result.name}>
          <Link href={`${result.url}`}>
            <h3 className={styles.links}>{result.name}</h3>
          </Link>
          <h6>Population: {result.population}</h6>
          <p>Climate: {result.climate}</p>
          <p>Orbital Period: {result.orbital_period}</p>
          <p>Rotation Period: {result.rotation_period}</p>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const results = await fetch(`https://swapi.dev/api/planets/`).then((res) =>
    res.json()
  );
  if (!results) return { notFound: true };
  return {
    props: {
      results,
    },
  };
};

export default Planets;
