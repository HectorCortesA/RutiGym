import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#555555",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 24,
    marginBottom: 25,
    marginTop: 445,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  navText: {
    fontSize: 14,
    marginTop: 6,
    fontWeight: "500",
  },
  activeText: {
    color: "#2DD4BF",
  },
  inactiveText: {
    color: "#999999",
  },
});

interface NavItem {
  label: string;
  icon: string;
}

interface NavigationProps {
  items: NavItem[];
  activeIndex: number;
  onPress: (index: number) => void;
}

export default function Navigation({
  items,
  activeIndex,
  onPress,
}: NavigationProps) {
  return (
    <View style={styles.navContainer}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navItem}
          onPress={() => onPress(index)}
        >
          <Ionicons
            name={item.icon as any}
            size={28}
            color={activeIndex === index ? "#2DD4BF" : "#999999"}
          />
          <Text
            style={[
              styles.navText,
              activeIndex === index ? styles.activeText : styles.inactiveText,
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
