import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import burger from "../../images/hamburger.svg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import AuthContext from "../../utilities/AuthContext.jsx"
import { useContext } from "react";




function RecipeLink({id, name}) {
  const [auth, setAuth] = useContext(AuthContext)


  let adminEdit = ""
  if (auth) {
    adminEdit = <Link to={`/recipes/details/${id}/edit-recipe/${id}`} className="edit-btn">
                  {/* <FontAwesomeIcon icon={solid('pen')} className="pen-icon"/> */}
                </Link>
  }


  return (
    <>
      <div className="link-container">
        <Link to={`details/${id}`} className="recipe-list-links">
          <img src={burger} alt="Burger icon" />
          <h4>{name}</h4>
        </Link>
        {adminEdit}
      </div>
    </>
  )
}

RecipeLink.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
}

export default RecipeLink;