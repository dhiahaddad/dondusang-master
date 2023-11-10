import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function CardBlood({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardBlood}>
        <View style={styles.upperBar}></View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardBlood: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.ville,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
  upperBar: {
    width: "100%",
    height: 5,
    backgroundColor: colors.danger,
  },
});

export default CardBlood;
