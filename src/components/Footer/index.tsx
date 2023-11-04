import * as S from "./styles";
import CharacterSvg from "./CharacterSvg";
import WizeSvg from "./WizeSvg";

const Footer = () => {
  return (
    <S.BrandContainer>
      <CharacterSvg />
      <WizeSvg />
      {/* <S.Wave /> */}
    </S.BrandContainer>
  );
};

export default Footer;
