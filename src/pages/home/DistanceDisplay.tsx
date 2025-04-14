import React, { useEffect, useState } from 'react';
import { getDistanceFromLatLonInKm } from '../../utils/helper';

interface DistanceDisplayProps {
    latitude: number;
    longitude: number;
}





const DistanceDisplay: React.FC<DistanceDisplayProps> = ({ latitude, longitude }) => {
    const [distance, setDistance] = useState<number | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLon = position.coords.longitude;

                    const d = getDistanceFromLatLonInKm(
                        userLat,
                        userLon,
                        latitude,
                        longitude
                    );
                    setDistance(d);
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        }
    }, [latitude, longitude]);

    return (
        <div>
            {distance !== null ? (
                <p>{distance} km</p>
            ) : (
                <p></p>
            )}
        </div>
    );
};
export default DistanceDisplay