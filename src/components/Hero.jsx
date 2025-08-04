import './compStyles.css'
import Button from '@mui/material/Button';


export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-text">
                <h1>Welcome To Tech Hub</h1>
                <h3>Best Learning Platform Ever</h3>
            </div>
            <Button onClick={()=>{
                alert("clicked")
            }} variant="contained" color="primary" size='large'>Join Tech Hub</Button>
        </div>
    )
}