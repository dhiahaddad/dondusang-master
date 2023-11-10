import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import CardBlood from "../components/CardBlood";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppText from "../components/Text";
import Icon from "../components/Icon";
import useApi from "../hooks/useApi";
import Button from "../components/Button";
import { Colors } from "react-native/Libraries/NewAppScreen";

// const listings = [
//   {
//     id: 1,
//     title: "Demande de sang O- urgent",
//     gov: "Sousse",
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Besoin de sang pour une opération",
//     gov: "Nabeul",
//     image: require("../assets/couch.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);
  return (
    <Screen style={styles.screen}>
      
      <ActivityIndicator visible={getListingsApi.loading} />
      <View style={{ alignItems: "center" }}>
        <Icon name={"blood-bag"} backgroundColor={colors.danger} />
        <AppText style={styles.title}>Demandes de sang</AppText>
      </View>
      {getListingsApi.error && (
        <>
          <AppText style={{alignSelf:"center"}}>Pas de demandes actuellement</AppText>
          <Button title="Actualiser" onPress={getListingsApi.request} />
        </>
      )}
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <CardBlood
            title={item.title}
            subTitle={"Ville : " + item.gov}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  title: {
    alignSelf: "center",
    margin: 10,
    color: colors.primary,
  },
});

export default ListingsScreen;
