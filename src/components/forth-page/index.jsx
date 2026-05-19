import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/churchl.png";
import Restaurant from "../../assets/image/restaurant.jpg";
import HeartLine from "../../assets/image/heartline.png";
import Photo3 from "../../assets/image/examp2.jpg";
import LastPhoto from "../../assets/image/lastPhoto.jpg";
import AttendanceGuests from "../AttendanceGuests/index";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սաղմոսավանք"}
            mapSrc={"https://maps.app.goo.gl/e3TN9G1C3Gvphtoh8"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Family and friends house"}
            mapSrc={"https://maps.app.goo.gl/tjw6ET1v4bZNSky58"}
          />
        </ForthPagePartContext>
        <div className="relative mt-10">
          <img
            src={Photo3}
            alt="Restaurant"
            className="w-full rounded-[15px]"
          />
        </div>

        <div className="text-center my-14">
          <h2 className="text-[30px]!">Նուրբ հիշեցումներ</h2>
          <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
          <Flexible
            className=" font-[600] px-5"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Այս առանձնահատուկ օրը սիրով խնդրում ենք հագուստը ընտրել տոնական ոճի։
            <br />
            <br />
            Ընտրությունը կարող է լինել ցանկացած գույնի բացառությամբ սպիտակի, որը
            պահպանված է հարսնացուի կերպարի համար՝ որպես մաքրության և սիրո
            խորհրդանիշ։
          </Flexible>
          <hr className="mx-auto my-8 w-[300px]" />
        </div>
        <img src={LastPhoto} className="rounded-[15px]" alt="" />
        <div className="text-center my-14">
          <h2 className="text-[30px]!">RSVP</h2>
          <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
          <Flexible
            className=" font-[600] px-5"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Ձեր ներկայությունը մեզ համար կլինի ամենաթանկ նվերը, քանի որ միասին
            կանցկացնենք սիրով, ուրախությամբ և անմոռանալի պահերով լի օր։ <br />
            <br /> Խնդրում ենք մեր կարևոր օրվան Ձեր ներկայությունը հաստատել
            մինչև 15.06.2026։
          </Flexible>
          <hr className="mx-auto my-8 w-[300px]" />
        </div>
        <AttendanceGuests />
        <h2 className="text-[25px]! text-center my-[30px]">
          Սիրով՝ Սամվել և Աննա
        </h2>
      </Container>
    </ForthPagePart>
  );
};
