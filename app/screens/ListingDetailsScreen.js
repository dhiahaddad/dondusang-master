import React from "react";
import { View, Image, StyleSheet, KeyboardAvoidingView,
  Platform,
  Keyboard, } from "react-native";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      {/* <Image style={styles.image} source={listing.image} /> */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>{listing.gov}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/Dhia.png")}
            title="Dhia Haddad"
            subTitle="+3 .. -1"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    // alignContent: "flex-start"
  },
  image: {
    width: "100%",
    height: 300,
  },
  subTitle: {
    color: colors.ville,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    // marginVertical: 20,
  },
});

export default ListingDetailsScreen;
