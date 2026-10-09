import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import ProfileCard from "../../components/ProfileCard";

const SAMPLE_PEOPLE = [
  { name: "Junio Labya", role: "Mobile Developer" },
  { name: "Marc Galleno", role: "UI Designer" },
  { name: "Jana Mancenido", role: "Product Manager" },
  { name: "Roentgen Compra", role: "Backend Engineer" },
];

export default function HomeScreen() {
  const [profiles, setProfiles] = useState<any[]>([]);

  const addProfile = () => {
    const person = SAMPLE_PEOPLE[profiles.length % SAMPLE_PEOPLE.length];
    const id = Date.now().toString();

    const newProfile = {
      id,
      ...person,
      avatar: `https://i.pravatar.cc/150?u=${id}`,
    };

    setProfiles((prev) => [...prev, newProfile]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonWrap}>
        <CustomButton title="Add Profile Card" onPress={addProfile} />
      </View>

      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfileCard name={item.name} role={item.role} avatar={item.avatar} />
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  buttonWrap: { paddingHorizontal: 16, paddingTop: 120 },
});