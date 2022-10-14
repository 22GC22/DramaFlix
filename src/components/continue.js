// import './continue.css';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
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

import './continue.css';

function Continue() {
  return (<div className='container' id='Continue'>
  <h1>Continue Watching</h1>
  <CardGroup>
<Card >
<Card.Img variant="top" src={Card1} />
<ProgressBar variant="danger" now={40} />
</Card>
<Card >
<Card.Img variant="top" src={Card2} />
<ProgressBar variant="danger" now={20} />
</Card>
<Card >
<Card.Img variant="top" src={Card3} />
<ProgressBar variant="danger" now={60} />
</Card>
<Card >
<Card.Img variant="top" src={Card4} />
<ProgressBar variant="danger" now={80} />
</Card>
<Card >
<Card.Img variant="top" src={Card9} />
<ProgressBar variant="danger" now={40} />
</Card>
<Card>
<Card.Img variant="top" src={Card5} />
<ProgressBar variant="danger" now={65} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card6} />
      <ProgressBar variant="danger" now={40} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card7} />
      <ProgressBar variant="danger" now={35} />
    </Card>
    <Card >
      <Card.Img variant="top" src={Card8} />
      <ProgressBar variant="danger" now={20} />
    </Card>
</CardGroup>
</div>);
}

export default Continue;