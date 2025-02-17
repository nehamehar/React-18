import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LiveLocationMap = () => {
  // Initial state with multiple people (Naman, Alex, Sarah)
  const [locations, setLocations] = useState([
    { id: 1, name: 'Naman', lat: null, long: null },
    { id: 2, name: 'Alex', lat: null, long: null },
    { id: 3, name: 'Sarah', lat: null, long: null },
  ]);

  // Simulating different people's locations with the Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      // Watch for Naman's location updates (just as an example)
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // Update Naman's location
          setLocations((prevLocations) => [
            {
              id: 1,
              name: 'Naman',
              lat: latitude,
              long: longitude,
            },
            ...prevLocations.slice(1), // Keep the other people as is
          ]);
        },
        (error) => {
          console.error('Error getting location: ', error);
        }
      );
      
      // Simulate Alex's and Sarah's locations (this would be dynamically updated in real-life applications)
      // Example: Manually update their locations for testing
      setTimeout(() => {
        setLocations((prevLocations) => [
          ...prevLocations.slice(0, 1),
          {
            id: 2,
            name: 'Alex',
            lat: 40.7128, // Example coordinates for Alex
            long: -74.0060,
          },
          prevLocations[2],
        ]);
      }, 3000); // Simulate location update for Alex after 3 seconds

      setTimeout(() => {
        setLocations((prevLocations) => [
          ...prevLocations.slice(0, 2),
          {
            id: 3,
            name: 'Sarah',
            lat: 34.0522, // Example coordinates for Sarah
            long: -118.2437,
          },
        ]);
      }, 5000); // Simulate location update for Sarah after 5 seconds
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <h1>Live Locations of People</h1>
      <MapContainer center={[51.5074, -0.1278]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map(
          (person) =>
            person.lat && person.long && (
              <Marker
                key={person.id}
                position={[person.lat, person.long]}
                icon={L.divIcon({
                  className: 'leaflet-emoji-icon',
                  html: '📍', // Pinbar emoji
                  iconSize: [32, 32], // Size of the emoji
                  iconAnchor: [16, 32], // Anchor the icon correctly
                })}
              >
                <Popup>
                  {person.name}'s Current Location: <br />
                  Latitude: {person.lat} <br />
                  Longitude: {person.long}
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>
    </div>
  );
};

export default LiveLocationMap;
