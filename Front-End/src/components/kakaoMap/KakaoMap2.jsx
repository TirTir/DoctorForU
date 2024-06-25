import React, { useEffect, useState } from "react";

const { kakao } = window;

export function KakaoMap2({ data }) {
  const [location, setLocation] = useState({
    x: data ? data.wgs84Lon : 127.027621,
    y: data ? data.wgs84Lat : 37.497942,
  });

  useEffect(() => {
    if (data) {
      setLocation({
        x: data.wgs84Lon,
        y: data.wgs84Lat,
      });
    }
  }, [data]);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(location.y, location.x),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    if (data) {
      const coords = new kakao.maps.LatLng(data.wgs84Lat, data.wgs84Lon);
      const marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });

      const hospitalName = data.dutyName; // 병원명 가져오기
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:10px; background-color:white; color:black; font-size:16px; border-radius:15px;">${hospitalName}</div>`,
      });

      infowindow.open(map, marker);
    }
  }, [data, location]);

  return <div id="map" style={{ width: "50%", height: "900px" }}></div>;
}
