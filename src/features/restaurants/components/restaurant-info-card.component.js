import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  border-radius: 5px;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
`;
const RestaurantCardText = styled(Text)`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      "https://picsum.photos/700",
    ],
    address = "100 random avenue",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover
        source={{
          uri: `${photos[0]}`,
        }}
      />
      <RestaurantCardText>{name}</RestaurantCardText>
    </RestaurantCard>
  );
};
