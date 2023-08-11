import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function getLocation(address) {
      const response = await fetch(`https://us1.locationiq.com/v1/search.php?key=pk.6e1d0f21a288a046a587e988fdf4e3fb&q=${encodeURIComponent(address)}&format=json`);

      if (!response.ok) {
        console.error('API request failed:', response);
        return;
      }

      const data = await response.json();
      setLocation(data[0]);
    }

    getLocation('22-75 27th Street, New York, NY, United States, 11105');
  }, []);

const mapUrl = location && `https://maps.locationiq.com/v3/staticmap?key=pk.6e1d0f21a288a046a587e988fdf4e3fb&   
    center=${location.lat},${location.lon}&zoom=14&size=500x500&format=png&maptype=roadmap&markers=icon:red|${location.lat},${location.lon}`;

  return (
    <div className="App">
      <h1>Contact</h1>
      {location && (
        <div>
          <img src = { mapUrl } alt = { `Map of ${location.display_name}`} />
            <p>Address: {location.display_name}</p>
            <p>Phone (347) 586-8820</p>
            <p>Email: astoriagroomingholisticspa@gmail.com</p>
            <p>Buisness Hours</p>
            <p>Monday - Sunday: 10am - 7pm</p>

        </div>
      )}
    </div>
  );
};

export default Contact;
