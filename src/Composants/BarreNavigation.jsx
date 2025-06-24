import { NavLink } from "react-router-dom"

const BarreNavigation = ({ props }) => {
  return (
    <section>
      <div className="Container-BarreNavigation-1">
        {props.Container.map((item, index) => (
          <NavLink
            to={item.navlink}
            key={index}
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            <h1>{item.texte}</h1>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default BarreNavigation