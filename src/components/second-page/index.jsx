import { SecondPagePart, GridDiv } from "./styled";
import { Container, Flexible } from "../../GlobalStyle";
import { useEffect, useState } from "react";
import Photo2 from "../../assets/image/serliqyser.png";
import BlockImage from "../../assets/image/blockimage.jpg";
import PhotoF1 from "../../assets/image/photof1.jpg";
import LineAes from "../../assets/image/lineaes.png";
import { ThirdPagePartCalendar } from "../third-page/styled";

export const SecondPage = () => {
  const weddingDate = new Date(2026, 5, 26, 0, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <SecondPagePart className="my-10">
      <Container>
        <div>
          <h2 className="mb-10" data-aos="zoom-in">
            Հարսանիքին մնաց
          </h2>
          <GridDiv>
            <Flexible data-aos="flip-up">
              <h2>{formatNumber(timeLeft.days)}</h2>
              <p>Օր</p>
            </Flexible>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="450"
            >
              <h2>{formatNumber(timeLeft.hours)}</h2>
              <p>Ժամ</p>
            </Flexible>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              <h2>{formatNumber(timeLeft.minutes)}</h2>
              <p>Րոպե</p>
            </Flexible>
            <Flexible
              className="uniqueBorder"
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="750"
            >
              <h2>{formatNumber(timeLeft.seconds)}</h2>
              <p>Վրկ</p>
            </Flexible>
          </GridDiv>
        </div>

        <div
          className="bg-[#ffffff] rounded-[15px] w-[271px] mt-[50px] mx-auto drop-shadow-2xl flex flex-col items-center  gap-4 p-4"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <img src={BlockImage} alt="" />
          <p className="font-[600]">
            Մի ողջ կյանք <br /> գումարած մի ամբողջ հավերժություն
          </p>
        </div>
      </Container>
      <Container>
        <div className="mt-10 mb-7">
          <h2 className="mb-10">Սիրելի ընկերներ և հարազատներ</h2>
          <Flexible className="font-[600]">
            <p>
              Մեր սիրո ամենագեղեցիկ օրը մոտ է, և ձեզ մեծ սիրով հրավիրում ենք
              տոնելու մեզ հետ այդ բացառիկ պահը։
            </p>
          </Flexible>
        </div>
      </Container>
      <img src={LineAes} alt="" className="w-full" />
      <Container>
        <h2 className="mt-5" data-aos="zoom-in">
          Հունիս
        </h2>
        <ThirdPagePartCalendar
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          className="mt-15"
        >
          {["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"].map((day) => (
            <div
              className="font-bold text-center py-2 mb-3"
              style={{ fontSize: "16px" }}
            >
              {day}
            </div>
          ))}
          {[...Array(37)].map((_, i) =>
            i > -1 && i <= 29 ? (
              <div className={i + 1 == 26 ? "special" : ""}>{i + 1}</div>
            ) : (
              <div className=""></div>
            ),
          )}
        </ThirdPagePartCalendar>
        <img src={PhotoF1} alt="" className="rounded-[15px] mt-[50px]" />
      </Container>
    </SecondPagePart>
  );
};
