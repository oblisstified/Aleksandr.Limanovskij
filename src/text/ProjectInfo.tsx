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
    dependencies: ["React Native", "Javascript", "FireBase"],
    time: " March 2023",
    image: foodPoster,
  },
  {
    id: "2",
    title: "Chess AI",
    description:
      "Chess game created with PyGame library. You play against an AI that uses the MiniMax algorithm to compute its best move.",
    video: chessVideo,
    dependencies: ["PyGame", " Python"],
    time: " June 2021",
    image: chessPoster,
  },
  {
    id: "3",
    title: "Mines",
    description: "MineSweeper created with Pygame library.",
    video: minesweeperVideo,
    dependencies: ["PyGame", " Python"],
    time: " August 2021",
    image: minesweeperPoster,
  },
  {
    id: "4",
    title: "Add",
    description:
      "A neural network created from scratch which was trained to give any amount of numbers and it would be able to add them together with mean errors less than 1%. It uses back propagation and varaible amount of nodes in the hidden layers which you can test for the most optimnal configuration.",
    video: NNAdditionVideo,
    dependencies: ["Python"],
    time: " May 2023",
    image: neuralPoster,
  },
];

export default projects;
