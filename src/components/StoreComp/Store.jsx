import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Store = () => {
    const { id } = useParams();  // Get the store id from the URL
    const location = useLocation();  // Access the location to retrieve the state
    const place = location.state?.store;  // Get the store data from the state

    if (!place) {
        return <p>Store data not found.</p>;
    }

    return (
        <div>
            <h1>{place.properties.name}</h1>
            <p><strong>Category:</strong> {place.properties.category}</p>
            <p><strong>City:</strong> {place.properties.city}</p>
            <p><strong>State:</strong> {place.properties.state}</p>
            <p><strong>Address:</strong> {place.properties.address}</p>
            <p><strong>Contact:</strong> {place.properties.contact}</p>
            <p><strong>Website:</strong> <a href={place.properties.website} target="_blank" rel="noopener noreferrer">{place.properties.website}</a></p>
            <div className="flex">
                <div>
                    <button>All Items</button>
                    <button>Books</button>
                    <button>Apparel</button>
                    <button>Electronic</button>
                    <button>Stationary</button>
                </div>
            </div>
        </div>
    )
}

export default Store;
