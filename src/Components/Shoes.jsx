import { useEffect, useState } from 'react';
import { fetchData } from '../mockApi';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Shoes = () => {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setShoes(data);
      setIsLoading(false);
    };

    setTimeout(() => {
      getData();
    }, 4000);
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <div>Getting data, please wait...</div>
        </div>
      ) : (
        <>
          <h1 className="my-4">Shoes</h1>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
            {shoes.map((shoe) => (
              <Col key={shoe.id} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={shoe.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{shoe.name}</Card.Title>
                    <Card.Text>{shoe.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted">Price: ${shoe.price}</small>
                    <Link to={`/shoes/${shoe.id}`} className="text-right">Edit</Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Shoes;
