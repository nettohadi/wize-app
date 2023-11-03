import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";
import { GroupedWeatherData } from "../../types";
import { getWeatherImage } from "../../utils";

const InfoCarousel = ({
  data,
  onClick,
}: {
  data: GroupedWeatherData[];
  onClick: (activeIndex: number) => void;
}) => {
  return (
    <div className="container" style={{ width: "100%", maxWidth: "421px" }}>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          perPage: 1,
          perMove: 1,
          gap: "10px",
        }}
        onActive={(splide: any, active: any) => {
          onClick(active.index);
        }}
      >
        {data?.map((item) => {
          return (
            <SplideSlide>
              <Container>
                <img src={getWeatherImage(item.icon)} />
                <div className="box">
                  <div className="temperature">
                    {Math.round(item.averageTemp)}°C
                  </div>
                  <div className="date">{item.date}</div>
                </div>
              </Container>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default InfoCarousel;

const Container = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
  width: 240px;
  position: relative;
  margin-top: 20px;

  > .box {
    background-color: #0a457b80;
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.32);
    border-radius: 24px;
    height: 240px;
    width: 240px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    padding-top: 48px;
  }

  .temperature {
    color: #f6d476;
    font-size: 64px;
    font-family: Poppins;
    font-weight: 700;
    word-wrap: break-word;
  }

  .date {
    color: white;
    font-size: 24px;
    font-family: Poppins;
    font-weight: 700;
    word-wrap: break-word;
  }

  > img {
    position: absolute;
    top: -20px;
    width: 240px;
    height: 185px;
    object-fit: cover;
    object-position: center;
    /* background-color: green; */
  }
`;
