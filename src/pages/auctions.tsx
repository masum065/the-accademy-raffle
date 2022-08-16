import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { PublicLayout } from '../layout/PublicLayout';
const CardData = [
  {
    title: 'Stoned Ape Crew',
    image: './assets/auction1.png',
    sold: '1832',
    winner: '80',
    status: false,
  },
  {
    title: 'LabMonke #651',
    image: './assets/auction3.gif',
    sold: '1832',
    winner: '80',
    status: true,
  },
  {
    title: 'DeGods',
    image: './assets/auction2.gif',
    sold: '1832',
    winner: '80',
    status: false,
  },
  {
    title: 'Great Goats',
    image: './assets/nft2.png',
    sold: '1832',
    winner: '80',
    status: true,
  },
  {
    title: 'Oak Paradise',
    image: './assets/nft2.png',
    sold: '1832',
    winner: '80',
    status: false,
  },
  {
    title: 'Oasis Civilization ',
    image: './assets/nft3.png',
    sold: '1832',
    winner: '80',
    status: false,
  },
];

const RaffleCards = () => {
  const navigate = useNavigate();
  const die = () => 'tou are good to die';
  console.log(Date.now());
  return (
    <PublicLayout>
      <h2 className='big-heading'>RAFFLES &amp; AUCTIONS</h2>

      <div className='btn-gourp'>
        <button onClick={() => navigate('/')}>RAFFLES</button>
        <button className='active'>AUCTIONS</button>
      </div>
      <div className='raffles'>
        <Container>
          {/* <Countdown date={Date.now() + 10000} /> */}
          <Row>
            {CardData.map((data, index) => {
              return (
                <Col md={6} lg={4} key={index}>
                  <Card className={!data.status ? 'disable-filter' : ''}>
                    <div className='topper'>
                      <Link to='/raffle/details' className='poligon'>
                        <Card.Img
                          variant='top'
                          className='ntf'
                          src={data.image}
                        />
                      </Link>
                      <div className='timmer'>
                        {data.status ? '00 : 13 : 11' : 'ENDED'}
                      </div>
                    </div>
                    <Card.Body>
                      <Link to='/raffle/details'>
                        <Card.Title>{data.title}</Card.Title>
                      </Link>
                      <Card.Text className='auction-bid-box'>
                        <div className='flex justify-content-center mb-2'>
                          <p className='text-center mx-2 '>
                            Starting bid : {data.sold}
                          </p>
                        </div>
                        <div className='flex justify-content-center'>
                          <span className=' h-3 w-3 rounded-full bg-danger'></span>
                          <p className='text-center mx-2 '>
                            {data.status
                              ? 'Auction Availible'
                              : ' Auction Closed!'}
                          </p>
                        </div>
                      </Card.Text>
                      <Link to='/raffle/details'>
                        <button className='card-button'>
                          {data.status ? 'Join Auction' : 'View Winners'}
                        </button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </PublicLayout>
  );
};
export default RaffleCards;
