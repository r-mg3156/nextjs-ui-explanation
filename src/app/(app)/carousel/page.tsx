"use client";

import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./components/EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./components/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import FoldingInfoDialog from "../components/FoldingInfoDialog";
import PageTitle from "../components/PageTitle";

const options: EmblaOptionsType = { loop: true };
const images = [
  "/image_1.png",
  "/image_2.png",
  "/image_3.png",
  "/image_4.png",
  "/image_5.png",
];

export default function CarouselPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative min-h-screen w-full">
      <PageTitle>カルーセル</PageTitle>
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((src: string, index: number) => (
              <div className="embla__slide" key={index}>
                <Image
                  src={src}
                  layout="responsive"
                  width={640}
                  height={400}
                  alt="test_image"
                />
              </div>
            ))}
          </div>
          <PrevButton
            className="embla__prev"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="embla__next"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>

        <FoldingInfoDialog>
          <p className="text-xl ml-4 text-orange-500">メリット</p>
          <p className="text-xl ml-4">
            縦向きのスクロールを減らして、情報を多く表示できる
          </p>
          <p className="text-xl ml-4 text-orange-500">デメリット</p>
          <p className="text-xl ml-4">
            後ろの方に表示されるコンテンツはユーザーが見る確率が下がる
          </p>
          <p className="text-xl ml-4 text-orange-500">ポイント</p>
          <p className="text-xl ml-4">
            ・ドットやサムネイル画像を使い、現在位置を示す
          </p>
          <p className="text-xl ml-4">・ユーザーの意思で切り替え可能にする</p>
        </FoldingInfoDialog>
      </section>
    </div>
  );
}
