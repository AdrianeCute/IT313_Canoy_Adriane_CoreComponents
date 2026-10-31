
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type StudentCardProps = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
  onToggleFlag: (id: string) => void;
};

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photoUrl }} style={styles.photo} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.year}>{year}</Text>

        <Pressable
          onPress={() => onToggleFlag(id)}
          style={({ pressed }) => [
            styles.button,
            flagged ? styles.flagged : styles.notFlagged,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.buttonText}>
            {flagged ? "Flagged for Advising" : "Flag for Advising"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
  },
  photo: {
    width: 75,
    height: 75,
    borderRadius: 12,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222222",
  },
  year: {
    fontSize: 14,
    color: "#666666",
    marginVertical: 5,
  },
  button: {
    padding: 9,
    borderRadius: 7,
    alignSelf: "flex-start",
  },
  flagged: {
    backgroundColor: "#16a34a",
  },
  notFlagged: {
    backgroundColor: "#2563eb",
  },
  pressed: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
