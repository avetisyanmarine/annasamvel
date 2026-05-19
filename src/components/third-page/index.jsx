import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2 style={{ marginBottom: "40px" }}>Օրվա հանդիսավոր ընթացքը</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            imageSize={80}
            ImageSrc={Church}
            number={"15:30"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅԱՆ ԱՐԱՐՈՂՈՒԹՅՈՒՆ"
            smallText="Սաղմոսավանք"
          />
          <ThirdPageBlock
            line={true}
            ImageSrc={Kenac}
            imageSize={80}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Family and Friends House"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          {/* <h3>Սիրով սպասում ենք</h3> */}
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
