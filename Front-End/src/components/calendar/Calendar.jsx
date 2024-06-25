import { useState, useEffect } from "react";
import { postToGetReservation } from "../../api";
import dayjs from "dayjs";

import * as R from "./ReactCalendar.styled";

// 날짜 리스트 데이터
const exampleData = [
  "2024-06-10",
  "2024-06-21",
  "2024-06-02",
  "2024-06-14",
  "2024-06-27",
];

export function Calendar({ setSelectedDay }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    handleReservationData();
    handleChange();
  }, []);

  const handleReservationData = async () => {
    const userId = sessionStorage.getItem("userId");
    const data = {
      userId: userId,
    };
    const res = await postToGetReservation(data);
    console.log(res);

    if (res) {
      setData(res);
    }
  };

  const handleChange = (date) => {
    setSelectedDate(date);
    console.log(dayjs(date).format("YYYY-MM-DD")); // 날짜를 포맷하여 출력

    setSelectedDay(date);
  };

  const reservedDates = data.map((item) =>
    dayjs(item.reserveDate).format("YYYY-MM-DD")
  );

  return (
    <R.StyledCalendar
      onChange={handleChange}
      value={selectedDate}
      showNeighboringMonth={false}
      tileContent={({ date, view }) => {
        if (view === "month") {
          const formattedDate = dayjs(date).format("YYYY-MM-DD");
          if (reservedDates.includes(formattedDate)) {
            return <div className="dot"></div>;
          }
        }
        return null;
      }}
      formatDay={(locale, date) =>
        date.toLocaleString("en", { day: "numeric" })
      }
    />
  );
}
