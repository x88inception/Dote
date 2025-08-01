import logo from '../assets/images/logo.png';
import './compStyles.css'


export default function Navbar(){
    return(

        <nav className='navbar'>
            <img src={logo} alt=""  width={"100px"}/>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Posts</a></li>
                <li><a href="">Users</a></li>
                <li><a href="">Learn</a></li>
            </ul>

        </nav>
    )
}