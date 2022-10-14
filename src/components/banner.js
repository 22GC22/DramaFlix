
import './banner.css';
import './text'
import Badge from 'react-bootstrap/Badge';
import banner from '../images/banner.jpg';

function Banner() {
    return (<div>
        <div id = "banner-img">
            <div className="banner-caption" id="cap1">
                <h5 id="cap2">New Release <Badge bg="danger">
        Now Adapted
      </Badge></h5>
            </div>
            <div className = "banner-caption" id="cap2">
                <h1 id="banner-title"></h1>
            </div>
        </div>
    </div>);
}

export default Banner;