import ComponenteFilho from "../ComponenteFilho";
import Slides from "../Slides";
import * as S from "./styles";
import { Images } from "./mocks";

export default function ComponentePai() {
  return (
    <S.Container>
      <ComponenteFilho nome="OI" />
      <ComponenteFilho nome="Mensinho Rei Dela" />
      <Slides images={Images} />
    </S.Container>
  );
}
