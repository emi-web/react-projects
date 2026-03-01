import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getPetTypes } from "../../api/petfinder";
import Logo from "../../assets/logo.svg";
import Search from "../search";

const Navigation = () => {
  const [petTypes, setPetTypes] = useState(null); // null = todavía cargando

  useEffect(() => {
    async function getPetTypesData() {
      try {
        const { types } = await getPetTypes();
        setPetTypes(types || []);
      } catch (error) {
        console.error("Error fetching pet types:", error);
        setPetTypes([]); // evita que se rompa la UI
      }
    }

    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Petlover" />
        <Search />
      </div>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            All Pets
          </NavLink>
        </li>

        {petTypes === null ? (
          <li>Loading...</li>
        ) : (
          petTypes.map((type) => {
            const typeId = type?._links?.self?.href?.split("/").pop();
            if (!typeId) return null;

            return (
              <li key={type.name}>
                <NavLink
                  to={`/${typeId}`}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  {type.name}s
                </NavLink>
              </li>
            );
          })
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
