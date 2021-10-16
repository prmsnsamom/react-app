import "./navbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://image.shutterstock.com/image-vector/abstract-connect-data-logo-technology-600w-1088735303.jpg" width="100" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    < NotificationsIcon />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
