import { motion } from "framer-motion";

const SlideTransition = (OgComponent: any) => {
  return (
    <OgComponent>
      <motion.div
        className=" fixed w-[100vh] h-[100vh] bg-zinc-700 origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
      ></motion.div>
      <motion.div
        className=" fixed w-[100vh] h-[100vh] bg-zinc-700 origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
      ></motion.div>
    </OgComponent>
  );
};

export default SlideTransition;
