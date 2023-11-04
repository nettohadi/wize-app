import * as S from "./styles";
import illustrationImg from "../../assets/images/Illustration.png";
import logoImg from "../../assets/images/Logo.png";
import loadingImg from "../../assets/images/loading_new.gif";

const LoadingScreen = () => {
  return (
    <S.Container>
      <S.BlueBox>
        <S.LoadingContainer>
          <img src={loadingImg} width={200} height={200} />
        </S.LoadingContainer>
      </S.BlueBox>

      <S.WhiteBox>
        <S.Wave />
        <S.LoadingMessage>
          Your weather will be served in no time
        </S.LoadingMessage>
        <img src={illustrationImg} width={128} height={143} />
        <img src={logoImg} width={122} height={39} />
        <S.BrandStatement>We’ve got you weathered.</S.BrandStatement>
      </S.WhiteBox>
    </S.Container>
  );
};

export default LoadingScreen;
