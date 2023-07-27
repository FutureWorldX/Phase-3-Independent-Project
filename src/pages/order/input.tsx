import { ChangeEvent, FormEvent, useState } from 'react';
import './index.css';

function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    quantity: '',
    price: '',
    description: ''
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can use 'formData' to submit the data to the server
    // For example, you can make a POST request using Axios to create a new customer
    // After the successful response, you can clear the form data or show a success message.
    /* eslint-disable-next-line no-console */
    console.log('Form data:', formData);
    // Add your API call here
  };

  return (
    <form id="mainForm" className="style" onSubmit={handleSubmit}>
      <label htmlFor="name">Shelf Space type:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="status">Shelf Space size:
        <input type="text" name="status" value={formData.status} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="quantity">Shelf Space style:
        <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="price">Price in the Order:
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="description">Order description:
        <input type="text" name="length" value={formData.description} onChange={handleChange} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;
