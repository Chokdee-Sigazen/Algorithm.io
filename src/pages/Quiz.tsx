import Ploblem from "../component/Ploblem";
import { useState } from "react";
import { motion } from "framer-motion";

const Data = [
  {
    name: "0001:Eradication",
    done: true,
    tags: ["DP", "Math", "TopDown"],
  },
  {
    name: "0002:Cheather",
    done: false,
    tags: ["Greedy", "Math"],
  },
  {
    name: "0003:Multiply",
    done: false,
    tags: ["Greedy", "Math", "basic"],
  },
  {
    name: "0004:Coin_Change",
    done: false,
    tags: ["DP", "TopDown", "BottomUp"],
  },
  {
    name: "0005:Shrine",
    done: false,
    tags: ["Graph", "MinimumSpanningTree"],
  },
  {
    name: "0006:Well_Manner",
    done: false,
    tags: ["Greedy"],
  },
];

const Quiz = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filterItem, setFileterItem] = useState(Data);

  const HandleSearchItem = (e: React.ChangeEvent<any>) => {
    const searchTarget = e.target.value;
    setSearchItem(searchTarget);

    const FilterHandler = Data.filter((data) =>
      data.name.toLowerCase().includes(searchTarget.toLowerCase())
    );
    setFileterItem(FilterHandler);
  };

  return (
    <motion.div>
      <div className=" min-h-screen h-auto bg-gradient-to-b from-zinc-800 to-neutral-950 ">
        <div className=" h-10"></div>
        <div className="group transition-colors w-[80%] h-72 mx-auto my-3 bg-[#0E121B] rounded-xl hover:bg-[#171d2c]">
          <div className="h-6"></div>
          <span className=" font-mono text-white sm:text-4xl text-2xl  sm:ml-10 ml-4">
            "Solve"
            <span className=" ml-2 font-mono sm:text-2xl text-lg font-bold">
              custom quiz by community
            </span>
          </span>
          <div className="my-5 transition-colors bg-slate-950 w-[80%] h-12 ml-10 rounded-2xl overflow-hidden flex group-hover:bg-zinc-800">
            <div className=" bg-[#00ADB5] min-h-full w-[33%] transition-colors rounded-2xl group-hover:bg-[#41f6ff]"></div>
            <div className=" text-[#00ADB5] transition-colors text-lg mx-2 font-mono font-bold self-center group-hover:text-[#41f6ff]">
              {" "}
              16.67%
            </div>
          </div>
          <div className=" font-mono ml-12">solve 1/6 ploblems</div>
        </div>
        <div className=" h-12 w-3/4 mx-auto rounded-3xl my-5">
          <input
            type="text"
            value={searchItem}
            onChange={HandleSearchItem}
            className=" outline-0 font-mono w-full rounded-3xl  bg-[#282E3A] text-zinc-300"
            placeholder="Search"
          ></input>
        </div>
        {filterItem.map((tmp) => (
          <Ploblem name={tmp.name} done={tmp.done} tags={tmp.tags} />
        ))}
        <div className="h-100">.</div>
      </div>
    </motion.div>
  );
};

export default Quiz;
