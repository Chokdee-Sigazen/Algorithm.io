import Home from "../component/Home";
import { motion } from "framer-motion";
function HomePage() {
  const text = [
    {
      name: "BackTracking",
      info: "(Hamiltonean Cycles,N-Queens Problem,Sum of subsets)",
      video: [],
    },
    {
      name: "Branch and Bound",
      info: "(BinarySearch,BinarySearchTree,Dept-Limited Search)",
      video: [
        {
          topic: "Binary Search",
          src: "/Algorithm/Searching/Binary_Search.mp4",
        },
      ],
    },
    {
      name: "BruteFroce",
      info: "(Binary Tree Traversal,BFS,DFS,Bubble Sort,Flood Fill Selection Sort)",
      video: [
        {
          topic: "Bubble Sort",
          src: "/Algorithm/Sorting/Bubble Sort.mp4",
        },
        {
          topic: "Selection Sort",
          src: "/Algorithm/Sorting/Selection Sort.mp4",
        },
      ],
    },
    {
      name: "Divide and Conquer",
      info: "(Counting Sort,Merge Sort)",
      video: [
        {
          topic: "Merge Sort",
          src: "/Algorithm/Sorting/Merge Sort.mp4",
        },
      ],
    },
    {
      name: "Dynamic Programming",
      info: "(Shortest Path,String Search,LCS,LIS,LPS,Maximu Subarray,Knapsack Problem)",
      video: [],
    },
    {
      name: "Greedy Algorithm",
      info: "(Maximum Spanning Tree,Dijsktra,Stable Matching)",
      video: [],
    },
    {
      name: "Simple Recursive",
      info: "(Cycle Detection,Suffix Array,Euclidean GCD)",
      video: [],
    },
  ];

  return (
    <motion.div>
      <Home data={text} />
    </motion.div>
  );
}

export default HomePage;
