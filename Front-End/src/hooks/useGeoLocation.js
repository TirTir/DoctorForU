import { useState, useEffect } from "react";

export const useGeoLocation = (options) => {
  const [location, setLocation] = useState();
  const [error, setError] = useState('');

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  }

  const handleError = (err) => {
    setError(err.message)
  }

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options)
  }, [options])

  return { location, error };
}

// 카카오맵 -> 최초 위치 잡기 ( 병원 검색 기능 할 때 )