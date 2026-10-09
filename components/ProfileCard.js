import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileCard({ name, role, avatar }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  avatar: { width: 56, height: 56, borderRadius: 28, marginRight: 14 },
  name: { fontSize: 18, fontWeight: "700" },
  role: { fontSize: 14, color: "#6b7280", marginTop: 2 },
});