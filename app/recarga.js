import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function recarga() {
  const router = useRouter();

  return (
    <View style={styles.containerBody}>
      {/* SEÇÃO NAVEGAÇÃO */}
      <View style={styles.navegacao}>
        <TouchableOpacity title="Fechar" onPress={() => router.push("/")}>
          <Image
            style={styles.icone}
            source={require("../assets/icons/window-close.png")}
          />
        </TouchableOpacity>
      </View>

      {/* SEÇÃO RECARGA */}
      <View style={styles.recarga}>
        <Text style={styles.superTitulo}>
          Qual número você quer recarregar?
        </Text>
        <Text style={styles.superSubto}>(00) 00000-0000</Text>
      </View>

      {/* SEÇÃO DIVISOR */}
      <View style={styles.divisor}></View>

      {/* SEÇÃO CONFIRMA */}
      <View style={styles.confirma}>
        <TouchableOpacity
          style={styles.boxIconeConfirma}
          title="Confirmar"
          onPress={null}
        >
          <Image
            style={styles.icone}
            source={require("../assets/icons/arrow-right.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  // MODELOS BASE
  superTitulo: {
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontSize: 28,
    color: "#000000",
  },

  superSubto: {
    fontFamily: "sans-serif",
    fontWeight: 500,
    fontSize: 24,
    color: "#00000066",
  },

  subto: {
    fontFamily: "sans-serif",
    fontWeight: 500,
    fontSize: 14,
    color: "#00000066",
    letterSpacing: 2,
  },

  icone: {
    width: 28,
    height: 28,
  },

  //DIVISOR
  divisor: {
    backgroundColor: "#eeeeee",
    width: "100%",
    height: 2,
    marginVertical: 20,
  },

  // NAVEGAÇÃO
  navegacao: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  // CORPO
  containerBody: {
    backgroundColor: "#ffffff",
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: "5%",
  },

  recarga: {
    marginTop: 20,
    gap: 30,
  },

  // SERVIÇO
  confirma: {
    alignSelf: "flex-end",
  },

  boxIconeConfirma: {
    backgroundColor: "#eeeeee",
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
