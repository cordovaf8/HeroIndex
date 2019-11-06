import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './App.scss';
import Header from './Header';
import CarouselSlide from './CarouselSlide';

import HeroCardContainer from './HeroCardContainer';

class App extends Component {
  constructor(props) {
    super(props)
      this.state ={
  
      ShowHeroDetails:false,
      clickedHero:null,

      selected: 0,
      swipeable: true,
      unlocked: [0, 1],
      carouselSettings: {
        showThumbs:false,
          showArrows: false,
          showIndicators: false,
          showStatus: false,
      },
      }
    }

  handleSlideChange = (id) => {
      if (id) {
          let carouselElement = document.getElementById(id);
          let carouselIndex = Array.from(carouselElement.closest('ul').children).indexOf(carouselElement.closest('li'));
          if (!isNaN(carouselIndex)) {
              this.setState({ selected: carouselIndex });
          }
      }
  }
toggleInfo = (hero) => {
  
   this.setState({ShowHeroDetails:true, clickedHero:hero});
}
toggleInfoOff = (hero) => {

  this.setState({ShowHeroDetails:false, clickedHero:null});
}

  render(){
    const { selected, carouselSettings, swipeable } = this.state;
    const { startOver, updateSelected } = this;
  return (
      <div className="vm-wizard">
      <Header onChangeClick={this.handleSlideChange}/>
                <Carousel  {...carouselSettings} selectedItem={selected} swipeable={swipeable} onChange={updateSelected} >
                    <CarouselSlide id="Heroes"> 
                    <HeroCardContainer {...this.state} onToggleClick={this.toggleInfo} type="Heroes" onToggleOffClick={this.toggleInfoOff} />
                    </CarouselSlide>
                    <CarouselSlide id="Students"> 
                    <HeroCardContainer {...this.state} onToggleClick={this.toggleInfo} type="Students"  onToggleOffClick={this.toggleInfoOff} />
                    </CarouselSlide>
                    <CarouselSlide id="Villans"> 
                    <HeroCardContainer {...this.state} onToggleClick={this.toggleInfo} type="Villans"  onToggleOffClick={this.toggleInfoOff} />
                    </CarouselSlide>
                   
                </Carousel>
            </div>
  );
}
}
export default App;
