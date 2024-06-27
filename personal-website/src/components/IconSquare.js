import './IconSquare.css'
import programmingIcon from '../images/programming-icon.png'
import racecarIcon from '../images/racecar-icon.png'
import bookIcon from '../images/book-icon.png'
import smilyIcon from '../images/smily-icon.png'

function IconSquare() {
    
    return (
        <div className="home-second">
            <img src={programmingIcon} alt="Programming Icon" />
            <img src={racecarIcon} alt="Racecar" />
            <img src={bookIcon} alt="Book" />
            <img src={smilyIcon} alt="Smily Face" />
        </div>

    );
}

export default IconSquare