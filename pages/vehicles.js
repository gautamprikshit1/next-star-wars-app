import Link from 'next/link';
import styles from "../styles/People.module.css"

const Vehicles = ({ results }) => {
  console.log(results);
  return (
    <div>
      <h1 className={styles.header}>Star wars Vehicles</h1>
      {results.results.map(result => (
        <div className="cards" key={result.name}>
          <Link href={`${result.url}`}>
          <h3 className={styles.links}>{result.name}</h3>
        </Link>
        <h6>Manufactured by: {result.manufacturer}</h6>
        <p>Model: {result.model}</p>
        <p>Passengers: {result.passengers}</p>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async() => {
  const results = await fetch(`https://swapi.dev/api/vehicles/`).then(res => res.json());
  if (!results) return { notFound: true }
  return {
    props: {
      results,
    }
  }
}

export default Vehicles