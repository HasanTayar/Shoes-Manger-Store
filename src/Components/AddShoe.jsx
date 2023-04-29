import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postData } from '../mockApi';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';

const AddShoe = () => {
  const [shoe, setShoe] = useState({ name: '', description: '', price: '', imageUrl: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (!shoe.name || !shoe.description || !shoe.price || !shoe.imageUrl) {
      setError('All fields are required');
      setIsLoading(false);
      return;
    }

    try {
      await postData(shoe);
      setSuccess('Shoe added successfully!');
      navigate('/shoes');
    } catch (error) {
      setError('Failed to add shoe');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Add New Shoe</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={shoe.name}
            onChange={(e) => setShoe({ ...shoe, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={shoe.description}
            onChange={(e) => setShoe({ ...shoe, description: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={shoe.price}
            onChange={(e) => setShoe({ ...shoe, price: parseFloat(e.target.value) })}
          />
        </Form.Group>
        <Form.Group controlId="imageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={shoe.imageUrl}
            onChange={(e) => setShoe({ ...shoe, imageUrl: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" /> Please Wait...
            </>
          ) : (
            'Add Shoe'
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default AddShoe;
