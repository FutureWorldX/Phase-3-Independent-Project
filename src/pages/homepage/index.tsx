import { useEffect, useState } from 'react';
import http from '@utils/request';
import './index.css';

interface Space {
  id: number | null;
  space_type: string;
  size: string;
  style: string;
  price_per_unit: number;
  length: number;
  width: number;
  height: number;
  location: string;
  description: string;
  created_at: string;
  updated_at: string;
  space_id: number | null;
}

function HomePage() {

  const [spaces, setSpaces] = useState<Space[]>([]);

  const loadSpaces = (): void => {
    http.get('/spaces')
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        } 
        throw new Error('Network response was not ok.');
      })
      .then((data: Space[]) => {
        // Check if the data is an array before setting the state
        if (Array.isArray(data)) {
          setSpaces(data);
        } else {
          /* eslint-disable-next-line no-console */
          console.error('Invalid data received from the server.');
        }
      })
      .catch((error) => {
        /* eslint-disable-next-line no-console */
        console.error('Error making GET request:', error);
        /* eslint-disable-next-line no-console */
        console.error('Error making GET request:', error.message);
        /* eslint-disable-next-line no-console */
        console.error('Error name:', error.name);
        /* eslint-disable-next-line no-console */
        console.error('Error stack:', error.stack);
      });
  };

  useEffect(() => {
    // Load data when the component mounts
    loadSpaces();
  }, []);

  return <div className="style">
    
    <h1>Welcome to the Home page</h1>
   {/* Render the data */}
   <ul>
      {spaces.length > 0 ? (
          spaces.map((space) => (
            <li key={space.id}>{space.space_type}</li>
          ))
        ) : (
          <li>No Spaces available</li>
        )}
      </ul>
  </div>;
}

export default HomePage;
