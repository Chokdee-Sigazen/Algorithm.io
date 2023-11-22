import { useState } from "react";
import InfoDown from "./InfoDown";
import { motion } from "framer-motion";
interface Props {
  name: string;
  info: string;
  video: {
    topic: string;
    src: string;
  }[];
}
function TopDown({ name, info, video }: Props) {
  const [state, setState] = useState(-1);
  return (
    <>
      <div className=" text-xl w-4/5  h-auto mx-auto rounded-3xl flex flex-col justify-center my-5">
        <motion.button
          onClick={() =>
            setState(() => {
              if (state) return 0;
              return 1;
            })
          }
          className="transition-opacity duration-200 ease-out opacity-80 hover:opacity-100 mx-auto rounded-3xl min-h-10 h-14 bg-zinc-800 w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className=" font-mono font-bold ">{name}</span>
          <span className=" font-mono font-bold text-gray-500">{info}</span>
        </motion.button>
        <div
          id="Scroll"
          className={`flex flex-col rounded-b-xl w-[98%] bg-[#21252B] mx-auto duration-500 transition-[max-height] overflow-hidden ${
            state ? "max-h-0" : "max-h-[1000px]"
          }`}
        >
          {video.map((tmp) => (
            <InfoDown video={tmp}></InfoDown>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopDown;
