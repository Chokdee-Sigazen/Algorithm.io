import { Carousel } from "flowbite-react";

function PictureSlide() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-transparent ">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-transparent ">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-transparent ">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}

export default PictureSlide;
