import React from 'react';
import { useEffect, useState } from'react';

 async function getLocation(address) {
                    const response = await fetch(`https://us1.locationiq.com/v1/search.php?key=pk.6e1d0f21a288a046a587e988fdf4e3fb&q=${encodeURIComponent(address)}&format=json`);

                    return response[0];
                }

const Contact = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        getLocation('22-75 27th Street, New York, NY, United States, 11105').then(console.log)
        .then(data => setLocation(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className="App">
            <h1>Contact</h1>
            {location && (
                <div>
                    <h2>Location</h2>
                    <p>Latitue: {location.lat}</p>
                    <p>Longitude: {location.lon}</p>
                    <p>Address: {location.display_name}</p>
                </div>
                )}
        </div>
    );
};

export default Contact;