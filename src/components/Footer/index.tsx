import * as S from "./styles";
import CharacterSvg from "./CharacterSvg";
import WizeSvg from "./WizeSvg";

const Footer = () => {
  return (
    <S.Container>
      <S.Wave />
      <S.BrandContainer>
        <CharacterSvg />
        <WizeSvg />
      </S.BrandContainer>
      <S.Wave />
    </S.Container>
  );
};

export default Footer;
