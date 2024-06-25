import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceArea,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import { useState, useEffect } from "react";
import * as S from "./HealthCare.styled";
import { Modal } from "./HealthCareModal";
import { getHealthCareData } from "../../api";
import { transformHealthData } from "../../services";

export function HealthCare() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const latestBloodPressure = data.length
    ? `${data[data.length - 1].systolic}/${data[data.length - 1].diastolic}`
    : "0";
  const latestWeight = data.length ? data[data.length - 1].weight : "0";

  useEffect(() => {
    handleHealthData();
  }, [isOpen]);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setIsOpen(false);
  };

  const handleHealthData = async () => {
    const userId = sessionStorage.getItem("userId");
    const res = await getHealthCareData(userId);
    console.log(res);
    if (res) {
      const transformedData = transformHealthData(res);
      setData(transformedData.slice(-7)); // 최신 데이터 7개만 저장
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal} />
      <S.Container onClick={openModal}>
        <S.Chart>
          <S.Title>
            <span style={{ fontWeight: "bold" }}>Blood Pressure</span>
            <S.Value>{latestBloodPressure}mmHg</S.Value>
          </S.Title>
          <S.Content>
            <LineChart
              width={350}
              height={200}
              data={data ? data : [{}]}
              margin={{ top: 10, right: 40, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <XAxis
                dataKey="createdAt"
                fontSize={12}
                tickMargin={10}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                fontSize={12}
                tickMargin={10}
                axisLine={false}
                tickLine={false}
                domain={[50, 175]}
                tickCount={6}
                interval="preserveStartEnd"
              />
              <ReferenceArea y1={150} y2={175} fill="pink" fillOpacity={0.3} />
              <ReferenceArea y1={50} y2={80} fill="pink" fillOpacity={0.3} />
              <Line type="monotone" dataKey="systolic" stroke="#FF3B51" />
              <Line type="monotone" dataKey="diastolic" stroke="#5FA1D3" />
            </LineChart>
          </S.Content>
        </S.Chart>
        <S.Chart>
          <S.Title>
            <span style={{ fontWeight: "bold" }}>Weight</span>
            <S.Value>{latestWeight}kg</S.Value>
          </S.Title>
          <S.Content>
            <AreaChart
              width={350}
              height={200}
              data={data.length ? data : [{}]}
              margin={{ top: 10, right: 40, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <XAxis
                dataKey="createdAt"
                fontSize={12}
                tickMargin={10}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                fontSize={12}
                tickMargin={10}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                tickCount={5}
                interval="preserveStartEnd"
              />
              <ReferenceArea
                y1={0}
                y2={50}
                fill="#b4a6f1"
                fillOpacity={data.length ? 0 : 0.3}
              />
              <Area
                type="monotone"
                dataKey="weight"
                stroke="#6640FF"
                fill="#b4a6f1"
              />
            </AreaChart>
          </S.Content>
        </S.Chart>
      </S.Container>
    </>
  );
}
