import { defaultGradient } from "../assets/gradients/gradients"
import { Link } from "react-router-dom"

const MenuButton = ({bgcolor=defaultGradient, logo, title, navref=null, clickAction=null}) => {
  const ButtonContent = (
    <>
      <img src={logo} alt={title} className="w-32 absolute -top-8 right-3" />
      <p className="text-white absolute bottom-5 left-8 text-2xl capitalize">
        {title}
      </p>
    </>
  )

    if(clickAction){ return(
      <button onClick={clickAction} id={title} className={'btn btn-ghost border-none w-80 h-32 drop-shadow-lg rounded-2xl mt-8 ' + bgcolor}>
        {ButtonContent}
      </button>
    )}

  return (
    <Link to={navref} id={title} className={'btn btn-ghost border-none w-80 h-32 drop-shadow-lg rounded-2xl mt-8 ' + bgcolor}>
      {ButtonContent}
    </Link>
  )
}

export default MenuButton