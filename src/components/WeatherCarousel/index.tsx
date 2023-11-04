import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import * as S from "./styles";
import { GroupedWeatherData } from "../../types";
import { formatTemperature, getWeatherImage } from "../../utils";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const WeatherCarousel = ({
  data,
  onChange,
  isInCelcius,
}: {
  data: GroupedWeatherData[];
  onChange: (activeIndex: number) => void;
  isInCelcius: boolean;
}) => {
  return (
    <div className="container" style={{ width: "100%", maxWidth: "421px" }}>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          perPage: 1,
          perMove: 1,
          gap: "20px",
          padding: "5rem",
          focus: "center",
        }}
        hasTrack={false}
        onActive={(splide: any, active: any) => {
          onChange(active.index);
        }}
      >
        <SplideTrack>
          {data?.slice(0, 5)?.map((item) => {
            return (
              <SplideSlide>
                <S.Container>
                  <img src={getWeatherImage(item.icon)} />
                  <div className="box">
                    <div className="temperature">
                      {formatTemperature(item.averageTemp, isInCelcius)}
                    </div>
                    <div className="date">{item.date}</div>
                  </div>
                </S.Container>
              </SplideSlide>
            );
          })}
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <S.Arrow src={leftArrow} />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <S.Arrow src={rightArrow} />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default WeatherCarousel;
