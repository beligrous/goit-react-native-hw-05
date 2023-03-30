import { useState, useEffect } from "react";
import { Image, View, StyleSheet, FlatList } from "react-native";

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  console.log(route);

  useEffect(() => {
    if (!route.params) {
      return;
    }
    setPosts((prevState) => {
      [...prevState, route.params];
    });
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, i) => {
          i.toString();
        }}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.photo }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    marginHorizontal: 16,
    height: 240,
  },
});

export default PostsScreen;
