import logo from '../assets/images/logo.png';
import './compStyles.css'


export default function Navbar(){
    return(

        <nav className='navbar'>
            <img src={logo} alt=""  width={"100px"}/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/posts">Posts</a></li>
                <li><a href="/users">Users</a></li>
                <li><a href="/learn">Learn</a></li>
            </ul>

        </nav>
    )
}