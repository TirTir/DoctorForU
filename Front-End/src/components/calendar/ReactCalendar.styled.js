import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import styled from "styled-components";

export const StyledCalendar = styled(Calendar)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  max-width: 100%;
  border: none;
  margin: 10px 0;

  /* 달력 배경색 및 기본 스타일 제거 */
  .react-calendar {
    display: flex;
    width: 100%;
    max-width: 100%;
    background-color: white;
    text-align: center;
  }

  /* 년-월 */
  .react-calendar__navigation__label > span {
    color: #808c99;
    font-size: 18px;
    font-family: SUIT Variable;
    font-weight: bold;
    line-height: 140%;
  }

  /* 네비게이션 버튼 */
  .react-calendar__navigation button {
    color: #6cc6e5;
  }

  .react-calendar__navigation button:enabled:hover {
    background-color: white;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: none;
  }

  /* 요일 */
  .react-calendar__month-view__weekdays__weekday {
    color: #b5b5b5;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }

  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__decade-view__years__year--neighboringDecade,
  .react-calendar__century-view__decades__decade--neighboringCentury {
    color: #75b7e5;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 5px;
  }

  /* 이번 달 일자 (높이 조정 가능)*/
  .react-calendar__tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 23px;
    height: 50px;
    color: #808c99;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }

  /* 저번 달 & 다음 달 일자 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #e9edf0;
    font-size: 15px;
    font-weight: bold;
    line-height: 23px;
    height: 50px;
  }

  /* 오늘 날짜 */
  .react-calendar__tile--now {
    background-color: #c6f7d9;
    color: #808c99;
    height: 50px;
    line-height: 23px;
    height: 50px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 50%;
    text-align: center;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #c6f7d9;
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    font-size: 15px;
    height: 50px;
    background-color: none;
    border-radius: 50%;
  }

  /* 선택된 날짜의 배경색 변경 */
  .react-calendar__tile--active {
    background-color: #319dff;
    color: white;
    line-height: 23px;
    height: 50px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 50%;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    line-height: 23px;
    height: 50px;
    background: #319dff;
    border: 1px solid #435cc8;
  }

  /* 일정 있는 날 표시 점 */
  .dot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #d4eaff;
    margin: 2px 0 0 0;
  }
`;
