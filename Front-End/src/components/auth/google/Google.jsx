import * as S from "../Auth.styled";
import Google_Icon from "./Google_Icon.png";

export function Google() {
  return (
    <S.Container>
      <S.Img src={Google_Icon} alt="Google" />
      <div>Google</div>
    </S.Container>
  );
}
