import { Text, StyleSheet } from "react-native";

interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
    marginTop: 20,
  },
});
