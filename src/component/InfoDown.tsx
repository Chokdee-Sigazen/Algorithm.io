type DataVideoType = {
  video: {
    src: string;
    topic: string;
  };
};

function InfoDown({ video }: DataVideoType) {
  return (
    <>
      <div className="flex flex-col w-full ml-6 mt-4">
        <h1 className=" inline-block font-mono">{video.topic}</h1>
        <div className=" my-6 mx-auto w-[90%]  h-96 bg-[#14161d] rounded-xl">
          <video className="h-full w-full rounded-lg " controls>
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default InfoDown;
