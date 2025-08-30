import photo1 from "./000_001.jpg";
import photo2 from "./000_002.jpg";
import photo3 from "./000_003.jpg";
import photo4 from "./000_004.jpg";
import photo5 from "./000_005.jpg";
import photo6 from "./000_006.jpg";
import photo7 from "./000_007.jpg";
import photo8 from "./000_008.jpg";
import photo9 from "./000_009.jpg";
import photo10 from "./000_010.jpg";
import photo11 from "./000_011.jpg";
import photo12 from "./000_012.jpg";

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

// Define your photos array
const photos: Photo[] = [
  {
    src: photo1,
    width: 1500,
    height: 1200,
    alt: "Description of photo 1",
  },
  {
    src: photo2,
    width: 800,
    height: 1200,
    alt: "Description of photo 2",
  },
  {
    src: photo3,
    width: 1920,
    height: 1080,
    alt: "Description of photo 3",
  },
  {
    src: photo4,
    width: 1600,
    height: 1200,
    alt: "Description of photo 4",
  },
  {
    src: photo5,
    width: 1200,
    height: 1600,
    alt: "Description of photo 5",
  },
  {
    src: photo6,
    width: 1920,
    height: 1080,
    alt: "Description of photo 6",
  },
  {
    src: photo7,
    width: 1400,
    height: 933,
    alt: "Description of photo 7",
  },
  {
    src: photo8,
    width: 1080,
    height: 1350,
    alt: "Description of photo 8",
  },
  {
    src: photo9,
    width: 1920,
    height: 1280,
    alt: "Description of photo 9",
  },
  {
    src: photo10,
    width: 1280,
    height: 720,
    alt: "Description of photo 10",
  },
  {
    src: photo11,
    width: 1600,
    height: 900,
    alt: "Description of photo 11",
  },
  {
    src: photo12,
    width: 2000,
    height: 1333,
    alt: "Description of photo 12",
  },
];

export default photos;
