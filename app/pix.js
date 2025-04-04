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

export default function pix() {
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
        <Image
          style={styles.icone}
          source={require("../assets/icons/help-circle-outline.png")}
        />
      </View>

      {/* DESCRIÇÃO */}
      <View style={styles.descricao}>
        <Text style={styles.superTitulo}>Área Pix</Text>
        <Text style={styles.texto}>
          Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar
          nada por isso.
        </Text>
      </View>

      <View style={styles.extra}>
        <View style={styles.extraEsq}>
          <View>
            <Text style={styles.textoExtra}>Digite tudo: chave e valor</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.icone}
            source={require("../assets/icons/mic.png")}
          />
        </View>
      </View>

      {/* DIVISOR */}
      <View style={styles.divisor}></View>

      <View>
        {/* SEÇÃO LINHA DE SERVIÇOS */}
        <View style={styles.linhaServicos}>
          {/* SEÇÃO SERVIÇO */}
          <View style={styles.servico}>
            <TouchableOpacity
              style={styles.boxIconeServico}
              title="Transferir"
              onPress={null}
            >
              <Image
                style={styles.icone}
                source={require("../assets/icons/cash-fast.png")}
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
              title="Programar"
              onPress={null}
            >
              <Image
                style={styles.icone}
                source={require("../assets/icons/calendar-clock.png")}
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
              title="Ler QR code"
              onPress={null}
            >
              <Image
                style={styles.icone}
                source={require("../assets/icons/qrcode-scan.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.destaque, styles.textoServico]}>
              Ler QR code
            </Text>
          </View>
        </View>

        {/* SEGUNDA LINHA DE SERVIÇOS */}
        <View style={styles.linhaServicos}>
          {/* SEÇÃO SERVIÇO */}
          <View style={styles.servico}>
            <TouchableOpacity
              style={styles.boxIconeServico}
              title="Pix Copia e Cola"
              onPress={null}
            >
              <Image
                style={styles.icone}
                source={require("../assets/icons/content-copy.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.destaque, styles.textoServico]}>
              Pix Copia e Cola
            </Text>
          </View>

          {/* SEÇÃO SERVIÇO */}
          <View style={styles.servico}>
            <TouchableOpacity
              style={styles.boxIconeServico}
              title="Cobrar"
              onPress={null}
            >
              <Image
                style={styles.icone}
                source={require("../assets/icons/account-cash-outline.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.destaque, styles.textoServico]}>Cobrar</Text>
          </View>

          {/* SEÇÃO SERVIÇO */}
          <View style={styles.servico}>
            <TouchableOpacity
              style={styles.boxIconeServico}
              title="Depositar"
              onPress={null}
            >
              <Image
                style={styles.icone}
                source={require("../assets/icons/cash-plus.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.destaque, styles.textoServico]}>
              Depositar
            </Text>
          </View>
        </View>
      </View>

      {/* DIVISOR */}
      <View style={styles.divisor}></View>

      {/* PREFERENCIAS */}
      <View style={styles.preferencias}>
        <Text style={styles.texto}>preferências</Text>
        {/* PREFERENCIA CHAVE*/}
        <View style={styles.preferencia}>
          <View style={styles.preferenciaesq}>
            <Image
              style={styles.icone}
              source={require("../assets/icons/tune-variant.png")}
            />
            <View>
              <Text style={styles.destaque}>Registrar ou trazer chaves</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.icone}
              source={require("../assets/icons/chevron-right.png")}
            />
          </View>
        </View>

        {/* DIVISOR */}
        <View style={styles.divisor2}></View>

        {/* PREFERENCIA LIMITE*/}
        <View style={styles.preferencia}>
          <View style={styles.preferenciaesq}>
            <Image
              style={styles.icone}
              source={require("../assets/icons/shield-outline.png")}
            />
            <View>
              <Text style={styles.destaque}>Meus limites Pix</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.icone}
              source={require("../assets/icons/chevron-right.png")}
            />
          </View>
        </View>

        {/* DIVISOR */}
        <View style={styles.divisor2}></View>
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
    fontSize: 20,
    color: "#000000aa",
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

  //DIVISOR
  divisor: {
    backgroundColor: "#eeeeee",
    width: "100%",
    height: 2,
    marginVertical: 20,
  },

  divisor2: {
    backgroundColor: "#eeeeee",
    width: "100%",
    height: 1,
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

  descricao: {
    marginTop: 20,
  },

  // EXTRA
  extra: {
    backgroundColor: "#8a19d622",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 40,
    padding: 14,
    gap: 10,
    marginTop: 20,
  },

  extraEsq: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
  },

  textoExtra: {
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontSize: 18,
    color: "#8a19d6",
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

  //EXTRA
  preferencias: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%"
  },

  preferencia: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    gap: 10,
    marginTop: 20,
  },

  preferenciaesq: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
  },
});
