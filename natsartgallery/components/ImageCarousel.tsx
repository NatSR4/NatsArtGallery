import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageCards from "./ImageCards";
import { cardData } from "../src/app/data";
import '../css/carousel.css'

//formatting, move to different file in time
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


//creating map of cards to put into the carousel
const cards = cardData.map((item) => (<ImageCards name={item.name} date={item.date} url={item.url} id={item.id} key={item.id}/>));


export default function ImageCarousel () {
  return (
      <div>
        <h1 id='carouselheading'>Latest Posts</h1>
        <Carousel responsive={responsive} >
          {cards}
         </Carousel>
      </div>
    );
}