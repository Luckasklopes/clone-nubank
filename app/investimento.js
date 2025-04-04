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

export default function investimento() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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

        {/* SEÇÃO TOTAL */}
        <View style={styles.total}>
          <View style={styles.item}>
            <Text style={styles.titulo}>Total em investimentos</Text>
            <Image
              style={styles.icone}
              source={require("../assets/icons/chevron-right.png")}
            />
          </View>

          <View style={styles.totalInvestimento}>
            <Text style={styles.superSubto}>R$ 00,00</Text>
          </View>

          <View style={styles.valor}>
            <Image
              style={styles.iconeValor}
              source={require("../assets/icons/up-arrow.png")}
            />
            <Text style={styles.subto}>
              <Text style={styles.textoValor}>R$ 4,92</Text> em 12 meses
            </Text>
          </View>

          <View style={styles.botao}>
            <Text style={styles.textoBotao}>Investir</Text>
          </View>
        </View>

        <View style={styles.containerServicos}>
          {/* PRIMEIRA LINHA - 3 serviços */}
          <View style={styles.linhaServicos}>
            <View style={styles.servico}>
              <TouchableOpacity
                style={styles.boxIconeServico}
                title="Minha carteira"
                onPress={null}
              >
                <Image
                  style={styles.icone}
                  source={require("../assets/icons/graph-bar.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.destaque, styles.textoServico]}>
                Minha carteira
              </Text>
              <Text style={styles.subto}>R$ 0,00</Text>
            </View>

            <View style={styles.servico}>
              <TouchableOpacity
                style={styles.boxIconeServico}
                title="Caixinha turbo"
                onPress={null}
              >
                <Text style={styles.tituloServico}>Caixinha Turbo</Text>
              </TouchableOpacity>
              <View style={[styles.botao, styles.botaoServico]}>
                <Text style={[styles.textoBotao, styles.textoBotaoServico]}>
                  Criar
                </Text>
              </View>
            </View>

            <View style={styles.servico}>
              <TouchableOpacity
                style={styles.boxIconeServico}
                title="Sair de casa"
                onPress={null}
              >
                <Image
                  style={styles.imagemServico}
                  source={require("../assets/apartamento.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.destaque, styles.textoServico]}>
                Sair de casa
              </Text>
              <Text style={styles.subto}>R$ 0,00</Text>
            </View>
          </View>

          {/* SEGUNDA LINHA - 2 serviços alinhados à esquerda */}
          <View style={styles.linhaServicosSegunda}>
            <View style={styles.servico}>
              <TouchableOpacity
                style={styles.boxIconeServico}
                title="Comprar um carro"
                onPress={null}
              >
                <Image
                  style={styles.imagemServico}
                  source={require("../assets/carro.jpeg")}
                />
              </TouchableOpacity>
              <Text style={[styles.destaque, styles.textoServico]}>
                Comprar um carro
              </Text>
              <Text style={styles.subto}>R$ 0,00</Text>
            </View>

            <View style={styles.servico}>
              <TouchableOpacity
                style={styles.boxIconeServico}
                title="Criar nova"
                onPress={null}
              >
                <Image
                  style={styles.icone}
                  source={require("../assets/icons/plus.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.destaque, styles.textoServico]}>
                Criar Nova
              </Text>
            </View>
          </View>
        </View>

        {/* DIVISOR */}
        <View style={styles.divisor}></View>

        <View style={styles.cripto}>
          <View style={styles.item}>
            <Text style={styles.titulo}>Total em cripto</Text>
            <Image
              style={styles.icone}
              source={require("../assets/icons/chevron-right.png")}
            />
          </View>
          <View style={styles.totalInvestimento}>
            <Text style={styles.superSubto}>R$ 00,00</Text>
          </View>

          <View style={styles.botao}>
            <Text style={styles.textoBotao}>Comprar</Text>
          </View>
        </View>

        {/* DIVISOR */}
        <View style={styles.divisor}></View>

        {/* SEÇÃO EXTRAS */}
        <View style={styles.extras}>
          <Text style={styles.titulo}>Seguros</Text>

          {/* SEÇÃO ASSISTENTE */}
          <View style={styles.extra}>
            <View style={styles.extraEsq}>
              <Image
                style={styles.icone}
                source={require("../assets/icons/heart-outline.png")}
              />
              <View>
                <Text style={styles.destaque}>Seguro Vida</Text>
              </View>
            </View>
            <View>
              <Text style={styles.destaqueExtra}>Conhecer</Text>
            </View>
          </View>

          {/* SEÇÃO BUSCADOR */}
          <View style={styles.extra}>
            <View style={styles.extraEsq}>
              <Image
                style={styles.icone}
                source={require("../assets/icons/cellphone.png")}
              />
              <View>
                <Text style={styles.destaque}>Seguro Celular</Text>
              </View>
            </View>
            <View>
              <Text style={styles.destaqueExtra}>Conhecer</Text>
            </View>
          </View>

          {/* SEÇÃO DEBITO */}
          <View style={styles.extra}>
            <View style={styles.extraEsq}>
              <Image
                style={styles.icone}
                source={require("../assets/icons/home-outline.png")}
              />
              <View>
                <Text style={styles.destaque}>Seguro Lar</Text>
              </View>
            </View>
            <View style={styles.boxDestaqueNovo}>
              <Text style={styles.destaqueNovo}>Novo</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  // MODELOS BASE
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
  },

  textoValor: {
    fontFamily: "sans-serif",
    fontWeight: 500,
    fontSize: 14,
    color: "#00b01a",
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

  // NAVEGAÇÃO
  navegacao: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  //DIVISOR
  divisor: {
    backgroundColor: "#eeeeee",
    width: "100%",
    height: 2,
    marginVertical: 20,
  },

  // CORPO
  containerBody: {
    backgroundColor: "#ffffff",
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: "5%",
  },

  // TOTAL
  total: {
    paddingTop: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  //SERVIÇOS
  containerServicos: {
    width: "100%",
  },

  linhaServicos: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 0,
    width: "100%",
  },

  linhaServicosSegunda: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 0,
    width: "100%",
    gap: 13,
  },

  servico: {
    alignItems: "flex-start",
    marginTop: 30,
    width: "30%",
  },

  boxIconeServico: {
    backgroundColor: "#8a19d622",
    width: "100%",
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  imagemServico: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    resizeMode: "cover",
  },

  tituloServico: {
    marginTop: "auto",
    marginBottom: 10,
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontSize: 22,
    color: "#8a19d6",
  },

  textoServico: {
    paddingTop: 10,
    textAlign: "left",
  },

  botaoServico: {
    marginTop: 5,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },

  textoBotaoServico: {
    fontSize: 14,
  },

  //EXTRA
  extras: {
    marginBottom: 20,
  },

  extra: {
    backgroundColor: "#eeeeee",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
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

  destaqueExtra: {
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontSize: 14,
    color: "#8a19d6",
  },

  boxDestaqueNovo: {
    borderRadius: 8,
    backgroundColor: "#8a19d6",
    padding: 4,
  },

  destaqueNovo: {
    fontFamily: "sans-serif",
    fontWeight: 800,
    fontSize: 14,
    color: "#ffffff",
  },

  //VALOR
  valor: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    marginVertical: 20,
  },

  iconeValor: {
    width: 12,
    height: 12,
  },

  cripto: {
    gap: 10,
  },
});
