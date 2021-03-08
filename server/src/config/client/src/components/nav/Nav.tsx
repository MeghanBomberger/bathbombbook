import { Link } from 'react-router-dom'

import './Nav.scss'
import bathbombsIcon from '../../assets/icons/050-gums.svg'
import designerIcon from '../../assets/icons/056-computer.svg'
import ingredientsIcon from '../../assets/icons/067-chemistry-1.svg'
import recipeTemplates from '../../assets/icons/024-notebook.svg'

const navIcons = [
  {
    icon: bathbombsIcon,
    name: "Bath Bombs",
    path: "/bathbombs"
  },
  {
    icon: designerIcon,
    name: "Bath Bomb Designer",
    path: "/designer"
  },
  {
    icon: recipeTemplates,
    name: "Recipe Templates",
    path: "/recipe-templates"
  },
  {
    icon: ingredientsIcon,
    name: "Ingredients",
    path: "/ingredients"
  }
]

export default function Nav() {
  return (
    <nav className="nav">
      {navIcons.map((icon, i) => (
        <Link
          key={icon.name.split(" ").join("")}
          to={icon.path}
        >
          <img
            alt={icon.name}
            className={i % 3 === 0 ? "nav-icon one" : i % 3 === 1 ? "nav-icon two" : "nav-icon three"}
            src={icon.icon}
            title={icon.name}
            style={{
              marginTop: i % 2 === 0 ? 0 : '3rem'
            }}
          />
        </Link>
      ))}
    </nav>
  )
}