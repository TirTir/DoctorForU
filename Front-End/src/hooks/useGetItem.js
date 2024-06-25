import { useState, useEffect } from "react";

export const useGetItem = () => {
  const sessionSearch = window.sessionStorage.getItem("information");
  const [information, setInformation] = useState(sessionSearch || "");

  useEffect(() => {
    window.sessionStorage.setItem("information", information);
  }, [information]);
}

// ? session 사용하는 것 (토큰 저장용)