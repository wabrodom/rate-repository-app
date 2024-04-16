import { View, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    separator: {
      height: 10,
      backgroundColor: theme.colors.background,
    },
  });

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator