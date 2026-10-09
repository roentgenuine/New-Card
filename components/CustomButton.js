import { Pressable, StyleSheet, Text } from "react-native";

export default function CustomButton({ title, onPress, color = "#4f46e5" }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color, opacity: pressed ? 0.8 : 1 },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
  },
  text: { color: "#fff", fontSize: 16, fontWeight: "600" },
});