import Link from 'next/link';
import styles from "../styles/People.module.css"

const Species = ({ results }) => {
  return (
    <div>
      <h1 className={styles.header}>Star wars Species</h1>
      {results.results.map(result => (
        <div className="cards" key={result.name}>
          <Link href={`${result.url}`}>
          <h3 className={styles.links}>{result.name}</h3>
        </Link>
        <h6>Classification: {result.classification}</h6>
        <p>Average LifeTime: {result.average_lifespan}</p>
        <p>Average Height: {result.average_height}</p>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async() => {
  const results = await fetch(`https://swapi.dev/api/species/`).then(res => res.json());
  if (!results) return { notFound: true }
  return {
    props: {
      results,
    }
  }
}

export default Species;