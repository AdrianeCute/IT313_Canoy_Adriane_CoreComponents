import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photoUrl }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.flagButton,
          flagged ? styles.flaggedBtn : styles.unflaggedBtn,
          pressed && styles.pressedBtn,
        ]}
        onPress={() => onToggleFlag(id)}
      >
        <Text style={flagged ? styles.flaggedText : styles.unflaggedText}>
          {flagged ? "★ Flagged" : "☆ Flag"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e1b4b",
  },
  year: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 2,
  },
  flagButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
  },
  unflaggedBtn: {
    borderColor: "#9ca3af",
    backgroundColor: "#fff",
  },
  flaggedBtn: {
    borderColor: "#d97706",
    backgroundColor: "#d97706",
  },
  pressedBtn: {
    opacity: 0.6,
  },
  unflaggedText: {
    color: "#374151",
    fontWeight: "600",
  },
  flaggedText: {
    color: "#fff",
    fontWeight: "600",
  },
});
