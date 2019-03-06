import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      currentImageIndex: 0,
      isCycleMode: false
    };

    this.nextSlideHandler = this.nextSlideHandler.bind(this);
  }

  

  nextSlideHandler(e){
    let newIndex = this.state.currentImageIndex;
    
    if (e.currentTarget.dataset.direction === "next") {
      newIndex = this.state.currentImageIndex + 1;
      if (newIndex > this.state.images.length - 1) newIndex = 0;
    } else {
      newIndex = this.state.currentImageIndex - 1;
      if (newIndex < 0) newIndex = this.state.images.length - 1;
    }

    if(this.state.images.length < 1) newIndex = 0;
    
    this.setState({currentImageIndex: newIndex});
  }
  

  render() {
    return (
      <div className="Slider">
      <div>
        <button disabled={ !this.state.images.length }
          onClick={this.nextSlideHandler} 
          data-direction="prev">Prev</button>
      </div>
      <div>
         {/* <img src="" alt="" /> */}
         {this.state.currentImageIndex}
      </div>
       <div>
        <button disabled={ !this.state.images.length }
          onClick={this.nextSlideHandler}
          data-direction="next">Next</button>
       </div>
        
               
      </div>
    );
  }
}

export default Slider;
