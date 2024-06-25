import {
  Banner,
  ScheduledReservation,
  Health,
  HealthCare,
  Inquiry,
} from "../../../components";
import * as S from "./Dashboard.styled";

export function Dashboard() {
  return (
    <S.Container>
      <S.MainContent>
        <S.Content style={{ width: "64%" }}>
          <Banner />
          <HealthCare />
          <Health />
        </S.Content>
        <S.Content style={{ width: "35%" }}>
          <ScheduledReservation />
          <Inquiry />
        </S.Content>
      </S.MainContent>
    </S.Container>
  );
}
