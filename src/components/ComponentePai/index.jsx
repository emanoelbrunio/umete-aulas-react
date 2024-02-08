import ComponenteFilho from "../ComponenteFilho";
import * as S from "./styles";

export default function ComponentePai() {
  return (
    <S.Container>
      <ComponenteFilho nome="OI" />
      <ComponenteFilho nome="Mensinho Rei Dela" />
    </S.Container>
  );
}
