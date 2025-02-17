import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LiveLocationMap = () => {
  // Initial state with multiple people (Naman, Alex, Sarah)
  const [locations, setLocations] = useState([
    { id: 1, name: 'Samyak', lat: null, long: null, lastUpdate: null },
    { id: 2, name: 'Alex', lat: null, long: null, lastUpdate: null },
    { id: 3, name: 'Sarah', lat: null, long: null, lastUpdate: null },
  ]);

  // Function to check if the location has changed since the last refresh
  const checkLocationChange = (person) => {
    const storedLocation = localStorage.getItem(person.name);
    if (storedLocation) {
      const { lat, long, lastUpdate } = JSON.parse(storedLocation);
      // If the current location differs from the stored location, it means it has changed
      if (lat !== person.lat || long !== person.long) {
        return { isChanged: true, lastUpdate };
      }
    }
    return { isChanged: false };
  };

  // Simulating different people's locations with the Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      // Watch for Naman's location updates (just as an example)
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // Update Naman's location and check if it has changed
          setLocations((prevLocations) => {
            const updatedLocations = prevLocations.map((person) => {
              if (person.id === 1) {
                const newLastUpdate = new Date().toLocaleTimeString();
                // Save updated location to localStorage
                localStorage.setItem(
                  person.name,
                  JSON.stringify({ lat: latitude, long: longitude, lastUpdate: newLastUpdate })
                );
                return {
                  ...person,
                  lat: latitude,
                  long: longitude,
                  lastUpdate: newLastUpdate,
                };
              }
              return person;
            });
            return updatedLocations;
          });
        },
        (error) => {
          console.error('Error getting location: ', error);
        }
      );
      
      // Simulate Alex's and Sarah's locations (this would be dynamically updated in real-life applications)
      setTimeout(() => {
        setLocations((prevLocations) => [
          ...prevLocations.slice(0, 1),
          {
            id: 2,
            name: 'Alex',
            lat: 40.7128, // Example coordinates for Alex
            long: -74.0060,
            lastUpdate: new Date().toLocaleTimeString(), // Simulate update time
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
            lastUpdate: new Date().toLocaleTimeString(), // Simulate update time
          },
        ]);
      }, 5000); // Simulate location update for Sarah after 5 seconds
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  // Check on page load if the location of any person has changed
  useEffect(() => {
    locations.forEach((person) => {
      const locationChange = checkLocationChange(person);
      if (locationChange.isChanged) {
        alert(`${person.name}'s location has changed since the last refresh! Last updated at: ${locationChange.lastUpdate}`);
      }
    });
  }, [locations]); // Runs when locations change or page reloads

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
                  Longitude: {person.long} <br />
                  {person.lastUpdate && <span>Last updated at: {person.lastUpdate}</span>}
                  <br />
                  <strong>Location updated!</strong> {/* This is the message */}
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>
    </div>
  );
};

export default LiveLocationMap;
