import { View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5064662/pexels-photo-5064662.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2076968/pexels-photo-2076968.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <View>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        autoplay
        circleloop
        ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
      />
    </View>
  );
};

export default Carousel;
