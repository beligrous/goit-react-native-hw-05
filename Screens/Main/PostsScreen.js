import { useState, useEffect } from "react";
import { Image, View, StyleSheet, FlatList } from "react-native";

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    if (!route.params) {
      return;
    }
    setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32 }}>
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
  },
  image: {
    width: 340,
    height: 240,
    borderRadius: 8,
  },
});

export default PostsScreen;
