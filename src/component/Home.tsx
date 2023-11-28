import { useState } from "react";
import TopDown from "./TopDown";
import { motion } from "framer-motion";

type DataListType = {
  data: {
    name: string;
    info: string;
    video: {
      topic: string;
      src: string;
    }[];
  }[];
};

const Home = ({ data }: DataListType) => {
  const [stateLeft, setStateLeft] = useState(0);
  const [stateMiddle, setStateMiddle] = useState(0);
  const [stateRight, setStateRight] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const [filterItem, setFileterItem] = useState(data);

  const HandleSearchItem = (e: any) => {
    const searchTarget = e.target.value;
    setSearchItem(searchTarget);

    const FilterHandler = data.filter((data) =>
      data.name.toLowerCase().includes(searchTarget.toLowerCase())
    );
    setFileterItem(FilterHandler);
  };

  return (
    <div className=" min-h-screen h-auto bg-gradient-to-b from-zinc-800 to-neutral-950 w-full flex-auto">
      <div className=" bg-no-repeat h-72 bg-cover mb-10 bg-center bg-[url('/pic/home.png')]"></div>
      <div className=""></div>
      <div className=" relative z-20 w-[80%]  h-[65vh] mx-auto mb-6 flex justify-between items-end">
        <div
          className={` transition-[opacity] duration-500 z-10 absolute top-0 text-center left-[26%] h-[17%] w-[48%]  ${
            stateLeft ? " opacity-95" : " opacity-0"
          }`}
        >
          <div className="flex h-full w-full ">
            <span className=" md:text-2xl md:w-auto font-mono my-auto font-bold mx-auto text-lg">
              "Start coding today"
            </span>
          </div>
        </div>
        <div
          className={` transition-[opacity] duration-500 z-10 absolute top-0 left-[25%] text-center  h-[17%] w-[49%]  ${
            stateMiddle ? " opacity-95" : " opacity-0"
          }`}
        >
          <div className="flex h-full w-full ">
            <span className="md:text-2xl md:w-auto font-mono my-auto font-bold mx-auto text-lg">
              "Welcome to Algorithm.io"
            </span>
          </div>
        </div>
        <div
          className={` transition-[opacity] duration-500 z-10 absolute top-0 left-[26%] h-[17%] w-[48%]  ${
            stateRight ? " opacity-95" : " opacity-0"
          }`}
        >
          <div className="flex h-full w-full ">
            <span className="md:text-2xl md:w-auto font-mono my-auto text-center font-bold mx-auto text-lg">
              "Solve basic problems"
            </span>
          </div>
        </div>

        <motion.div
          onHoverStart={() => {
            setStateLeft(1);
          }}
          onHoverEnd={() => {
            setStateLeft(0);
          }}
          whileHover={{ scale: 1.1 }}
          className="flex items-end h-full w-[25%] bg-gradient-to-b from-[#00ADB5] to-transparent"
        >
          <div className=" transition-opacity hover:opacity-[100%] opacity-[92%] bg-no-repeat bg-center w-[98%] mx-auto h-[98%] bg-cover bg-[url('/pic/left.png')]"></div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => {
            setStateMiddle(1);
          }}
          onHoverEnd={() => {
            setStateMiddle(0);
          }}
          className=" flex items-end h-[80%] w-[45%] bg-gradient-to-b from-[#00E4EE] to-transparent"
        >
          <div className=" transition-opacity hover:opacity-[100%] opacity-[92%] bg-no-repeat bg-top w-[98%] mx-auto h-[98%] bg-cover bg-[url('/pic/middle.png')]"></div>
        </motion.div>
        <motion.div
          onHoverStart={() => {
            setStateRight(1);
          }}
          onHoverEnd={() => {
            setStateRight(0);
          }}
          whileHover={{ scale: 1.1 }}
          className="flex items-end h-full w-[25%] bg-gradient-to-b from-[#00ADB5] to-transparent"
        >
          <div className=" transition-opacity hover:opacity-[100%] opacity-[92%] bg-no-repeat bg-top w-[98%] mx-auto h-[98%] bg-cover bg-[url('/pic/right.png')]"></div>
        </motion.div>
      </div>
      <div className=" h-12 w-3/4 mx-auto rounded-3xl my-7">
        <input
          type="text"
          value={searchItem}
          onChange={HandleSearchItem}
          className=" focus:ring-0 focus:outline-none outline-0 font-mono w-full rounded-3xl  bg-[#282E3A] text-zinc-300"
          placeholder="Search"
        ></input>
      </div>
      {filterItem.map((tmp) => (
        <TopDown name={tmp.name} info={tmp.info} video={tmp.video}></TopDown>
      ))}
      <div className="h-42">
        <br></br>
      </div>
    </div>
  );
};

export default Home;
