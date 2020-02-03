import React, { Component } from "react";
import Slider from "react-slick";
import { hotels, blog } from "../utils"

export default class DetailSlider extends Component {
  render () {
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img src={hotels.map(hotels => hotels.img)} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          {hotels && hotels.map((hotel) => <div>
            <img src={hotel.img} />
          </div>)}
        </Slider>
      </div>
    );
  }
}