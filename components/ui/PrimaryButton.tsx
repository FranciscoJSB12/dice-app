import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../../consts/colors";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export function PrimaryButton({ children, onPress }: PrimaryButtonProps) {
  function buttonStyles({ pressed }: { pressed: boolean }) {
    return pressed
      ? [styles.buttonInnerContainer, styles.pressed]
      : styles.buttonInnerContainer;
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={onPress} style={buttonStyles}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary700,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
