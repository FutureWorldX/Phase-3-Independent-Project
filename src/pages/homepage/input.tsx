import { ChangeEvent, FormEvent, useState } from 'react';
import './index.css';

function SpaceForm() {
  const [formData, setFormData] = useState({
    space_type: '',
    size: '',
    style: '',
    price_per_unit: '',
    length: '',
    width: '',
    height: '',
    location: '',
    description: '',
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
      <label htmlFor="space_type">Shelf Space type:
        <input type="text" name="space_type" value={formData.space_type} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="size">Shelf Space size:
        <input type="text" name="size" value={formData.size} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="style">Shelf Space style:
        <input type="text" name="style" value={formData.style} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="price_per_unit">Price Per Unit:
        <input type="email" name="price_per_unit" value={formData.price_per_unit} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="length">Shelf length:
        <input type="text" name="length" value={formData.length} onChange={handleChange} />
      </label>
      <br />

      <label htmlFor="width">Shelf width:
        <input type="text" name="width" value={formData.width} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="height">Shelf height:
        <input type="text" name="height" value={formData.height} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="location">Shelf location:
      <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="description">Shelf description:
      <input type="text" name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default SpaceForm;
