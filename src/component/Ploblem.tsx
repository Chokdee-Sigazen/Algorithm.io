import { motion } from "framer-motion";

type DataPloblem = {
  name: string;
  done: boolean;
  tags: string[];
};

const Ploblem = ({ name, done, tags }: DataPloblem) => {
  return (
    <>
      <motion.div
        className={`w-[80%]  transition-colors h-40 mx-auto rounded-2xl my-5 ${
          done === false
            ? "bg-[#191F2B] hover:bg-[#283145] "
            : "bg-[#015F64] hover:bg-[#3b979c]"
        }`}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex">
          <div className="h-1"></div>
          <div
            className={`ml-3 mt-3 w-9 h-9 rounded-full ${
              done === false
                ? "bg-[#0F1217] hover:bg-[#000000]"
                : "bg-[#00ADB5] hover:bg-[#63f0f7]"
            }`}
          ></div>
          <div className=" mt-3 ml-3 font-mono font-bold text-2xl">{name}</div>
        </div>
        <div className="h-[40%]"></div>
        <div className="flex mx-4">
          {tags.map((tmp) => (
            <div
              className={`mx-1  h-10 w-auto rounded-xl font-mono font-bold text-center p-2 ${
                done === false
                  ? "bg-[#0F1217] hover:bg-[#000000]"
                  : "bg-[#0F1217] hover:bg-[#000000]"
              }`}
            >
              {tmp}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Ploblem;
