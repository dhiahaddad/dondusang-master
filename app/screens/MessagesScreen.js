import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import AppText from "../components/Text";
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title: "Dhia Haddad",
    description: "Hey ! Chenhou ljaw ?",
    image: require("../assets/Dhia.png"),
  },
  {
    id: 2,
    title: "Houcein Lakhal",
    description: "Tyouba xD",
    image: require("../assets/Houcein.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <View>
        <AppText style={styles.title}>Messages</AppText>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Dhia Haddad",
              description: "Good Morning",
              image: require("../assets/Dhia.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    marginTop: 10,
    color: colors.primary,
  },
});

export default MessagesScreen;
