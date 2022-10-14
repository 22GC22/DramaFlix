import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Card1 from '../images/card/card1.jpg';
import Card2 from '../images/card/card2.jpg';
import Card3 from '../images/card/card3.jpg';
import Card4 from '../images/card/card4.jpg';
import Card5 from '../images/release/banner2.jpg';
import Card6 from '../images/release/banner3.jpg';
import Card7 from '../images/release/banner4.jpg';
import Card8 from '../images/release/banner5.jpg';
import Card9 from '../images/release/banner6.jpg';
import Card10 from '../images/release/banner7.jpg';

import './watchnow.css';

function WatchNow() {
  return (
    <div className='container' id='watchNow'>
        <h1>Watch Now</h1>
        <CardGroup>
    <Card >
      <Card.Img variant="top" src={Card1} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card2} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card3} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card4} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card9} />
    </Card>
    </CardGroup>
    <CardGroup>
    <Card>
      <Card.Img variant="top" src={Card5} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card6} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card7} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card8} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card10} />
    </Card>
    </CardGroup>
    </div>
  );
}

export default WatchNow;