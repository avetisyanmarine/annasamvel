import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div className="mt-15 text-[#e0dbdb] maintext">
            <p>Հավերժ Միասին</p>
            <h3>Սամվել և Աննա</h3>
            <p>26.06.2026</p>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
