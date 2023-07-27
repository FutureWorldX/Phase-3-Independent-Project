import { ChangeEvent, FormEvent, useState } from 'react';
import './index.css';

function CustomerForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone_no: '',
    id_number: '',
    email_address: '',
    po_box: '',
    local_address: '',
    county: '',
    city: '',
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
      <label htmlFor="name">Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="phone_no">Phone Number:
        <input type="text" name="phone_no" value={formData.phone_no} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="id_number">ID Number:
        <input type="text" name="id_number" value={formData.id_number} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="email_address">Email Address:
        <input type="email" name="email_address" value={formData.email_address} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="po_box">PO Box:
        <input type="text" name="po_box" value={formData.po_box} onChange={handleChange} />
      </label>
      <br />

      <label htmlFor="local_address">Local Address:
        <input type="text" name="local_address" value={formData.local_address} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="county">County:
        <input type="text" name="county" value={formData.county} onChange={handleChange} required />
      </label>
      <br />

      <label htmlFor="city">City:
      <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default CustomerForm;
