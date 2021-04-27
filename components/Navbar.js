import Link from "next/link";

const Navbar = ({ children }) => {
  return (
    <div>
        <ul>
          <li>
            <Link href={`/`}>
              <a className="links">Home</a>
            </Link>
          </li>
          <li>
            <Link href={`/planets`}>
              <a className="links">Planets</a>
            </Link>
          </li>
          <li>
            <Link href={`/vehicles`}>
              <a className="links">Vehicles</a>
            </Link>
          </li>
          <li>
            <Link href={`/people`}>
              <a className="links">People</a>
            </Link>
          </li>
          <li style={{float: "right"}}>
            <Link href={`/species`}>
              <a className="links">Species</a>
            </Link>
          </li>
        </ul>
      {children}
    </div>
  );
};

export default Navbar;
