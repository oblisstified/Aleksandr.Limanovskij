import mealTimeVideo from "../assets/MealtimeVideo.mp4";
import minesweeperVideo from "../assets/MineSweeperVideo.mp4";
import chessVideo from "../assets/ChessVideo.mp4";
import NNAdditionVideo from "../assets/NNVideo.mp4";
import chessPoster from "../assets/ChessPoster.png";
import foodPoster from "../assets/mealTimePoster.png";
import minesweeperPoster from "../assets/minesweeperPoster.jpg";
import neuralPoster from "../assets/NeuralNetwork.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  video: string;
  colorClass: string;
  dependencies: string[];
  time: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Meal Time",
    description:
      "Android and IOS app designed to set and track dietary goals, log meals and gain insight through analytics. Additional features: gamified system with achievements, posting in communities, friend connectivity.",
    video: mealTimeVideo,
    colorClass: "box-purple",
    dependencies: ["React Native", "Javascript", "FireBase"],
    time: " March 2023",
    image: foodPoster,
  },
  {
    id: "2",
    title: "Chess AI",
    description: "This is the description for Chess AI.",
    video: chessVideo,
    colorClass: "box-red",
    dependencies: ["PyGame", " Python"],
    time: " June 2021",
    image: chessPoster,
  },
  {
    id: "3",
    title: "Mines",
    description: "This is the description for Mines.",
    video: minesweeperVideo,
    colorClass: "box-blue",
    dependencies: ["PyGame", " Python"],
    time: " August 2021",
    image: minesweeperPoster,
  },
  {
    id: "4",
    title: "Add",
    description: "This is the description for Add.",
    video: NNAdditionVideo,
    colorClass: "box-green",
    dependencies: ["Python"],
    time: " May 2023",
    image: neuralPoster,
  },
];

export default projects;
