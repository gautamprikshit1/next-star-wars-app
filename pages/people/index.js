import Link from "next/link";
import styles from "../../styles/People.module.css";

const People = ({ results }) => {
  return (
    <div>
      <h1 className={styles.header}>Star wars people</h1>
      {results.results.map((result) => (
        <div className="cards">
          <Link href={`${result.url}`}>
            <h3 className={styles.links}>{result.name}</h3>
          </Link>
          <h6>Height: {result.height}</h6>
          <p>Weight: {result.mass}</p>
          <p>Gender: {result.gender.toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const results = await fetch(`https://swapi.dev/api/people/`).then((res) =>
    res.json()
  );
  if (!results) return { notFound: true };
  return {
    props: {
      results,
    },
  };
};

export default People;
