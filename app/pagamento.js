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

export default function pagamento() {
  const router = useRouter();

  return (
    <View style={styles.containerBody}>
      <View style={styles.navegacao}>
        <TouchableOpacity title="Fechar" onPress={() => router.push("/")}>
          <Image
            style={styles.icone}
            source={require("../assets/icons/window-close.png")}
          />
        </TouchableOpacity>
      </View>

      {/* SEÇÃO PAGAMENTO */}
      <View style={styles.pagamento}>
        <Text style={styles.superTitulo}>Opções de pagamento</Text>
      </View>

      <View>
        {/* SEÇÃO LINHA DE SERVIÇOS */}
        <View style={styles.linhaServicos}>
          {/* SEÇÃO SERVIÇO */}
          <View style={styles.servico}>
            <TouchableOpacity
              style={styles.boxIconeServico}
              title="Fatura"
              onPress={null}
            >
              <Image
                style={styles.icone}
                source={require("../assets/icons/card-multiple-outline.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.destaque, styles.textoServico]}>
              Transferir
            </Text>
          </View>

          {/* SEÇÃO SERVIÇO */}
          <View style={styles.servico}>
            <TouchableOpacity
              style={styles.boxIconeServico}
              title="Boleto"
              onPress={null}
            >
              <Image
                style={styles.icone}
                source={require("../assets/icons/barcode.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.destaque, styles.textoServico]}>
              Programar
            </Text>
          </View>

          {/* SEÇÃO SERVIÇO */}
          <View style={styles.servico}>
            <TouchableOpacity
              style={styles.boxIconeServico}
              title="Pix"
              onPress={null}
            >
              <Image
                style={styles.icone}
                source={require("../assets/icons/contactless-payment-circle-outline.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.destaque, styles.textoServico]}>
              Ler QR code
            </Text>
          </View>
        </View>
      </View>

      {/* SEÇÃO BOLETO */}
      <View style={styles.contas}>
        <Text style={styles.texto}>Contas encontradas pelo Assistente</Text>

        <View style={styles.extraBoleto}>
          <View style={styles.extraEsqBoleto}>
            <TouchableOpacity
              style={styles.boxIconeBoleto}
              title="Boleto"
              onPress={null}
            >
              <Image
                style={styles.icone}
                source={require("../assets/icons/barcode.png")}
              />
            </TouchableOpacity>

            <View>
              <Text style={styles.destaque}>
                Uniao Educacional do Norte Ltda.
              </Text>
              <Text style={styles.texto}>7 ABR • Boleto a vencer</Text>
            </View>
          </View>
          <View>
            <Text style={styles.destaque}>R$616,98</Text>
          </View>
        </View>
      </View>

      {/* DIVISOR */}
      <View style={styles.divisor}></View>

      {/* SEÇÃO EXTRAS */}
      <View style={styles.extras}>
        {/* SEÇÃO ASSISTENTE */}
        <View style={styles.extra}>
          <View style={styles.extraEsq}>
            <Image
              style={styles.icone}
              source={require("../assets/icons/currency-usd.png")}
            />
            <View>
              <Text style={styles.destaque}>Assistente de Pagamentos</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.icone}
              source={require("../assets/icons/chevron-right.png")}
            />
          </View>
        </View>

        {/* SEÇÃO BUSCADOR */}
        <View style={styles.extra}>
          <View style={styles.extraEsq}>
            <Image
              style={styles.icone}
              source={require("../assets/icons/barcode.png")}
            />
            <View>
              <Text style={styles.destaque}>Buscador de Boletos</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.icone}
              source={require("../assets/icons/chevron-right.png")}
            />
          </View>
        </View>

        {/* SEÇÃO DEBITO */}
        <View style={styles.extra}>
          <View style={styles.extraEsq}>
            <Image
              style={styles.icone}
              source={require("../assets/icons/sync.png")}
            />
            <View>
              <Text style={styles.destaque}>Débto Automático</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.icone}
              source={require("../assets/icons/chevron-right.png")}
            />
          </View>
        </View>
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

  titulo: {
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontSize: 20,
    color: "#000000",
  },

  destaque: {
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontSize: 14,
    color: "#000000",
  },

  texto: {
    fontFamily: "sans-serif",
    fontWeight: 500,
    fontSize: 14,
    color: "#00000099",
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
  },

  icone: {
    width: 28,
    height: 28,
  },

  botao: {
    backgroundColor: "#8a19d6",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontSize: 18,
    color: "#ffffff",
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

  pagamento: {
    alignSelf: "flex-start",
    marginVertical: 10,
  },

  // SERVIÇOS
  linhaServicos: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },

  servico: {
    alignItems: "center",
    width: "33.33%",
    marginVertical: 15,
  },

  boxIconeServico: {
    backgroundColor: "#eeeeee",
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  textoServico: {
    paddingTop: 10,
    textAlign: "center",
  },

  contas: {
    marginTop: 20,
    justifyContent: "flex-start",
  },

  extraBoleto: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    gap: 10,
    marginTop: 10,
  },

  extraEsqBoleto: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
  },

  boxIconeBoleto: {
    backgroundColor: "#eeeeee",
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  extras: {
    gap: 15,
  },

  extra: {
    backgroundColor: "#eeeeee",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 14,
    gap: 10,
  },

  extraEsq: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
  },
});
