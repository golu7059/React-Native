import React from "react";
import { Text, View, SafeAreaView, StyleSheet, useColorScheme } from "react-native";

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === "light";

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
                    First Project
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,  // Ensures the component takes up the full screen
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    blackText: {
        color: "black",
        fontSize: 18,  // Ensures text is large enough to see
    },
    whiteText: {
        color: "red",
        fontSize: 20
    }

});

export default AppPro;
