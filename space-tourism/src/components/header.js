import {Link} from "react-router-dom"
import logo from "../starter-code/assets/shared/logo,svg"

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/"><img src={logo} alt="Space Tourism Logo" title="Space Tourism"/></Link>
            </div>
        </header>
    )
}