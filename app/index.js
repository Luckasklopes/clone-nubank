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

export default function App() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* SEÇÃO CABEÇALHO */}
        <View style={styles.containerCabecalho}>
          <View style={styles.iconesCabecalho}>
            <View style={styles.boxIcone}>
              <Image
                style={styles.icone}
                source={require("../assets/icons/user.png")}
              />
            </View>
            <View style={styles.boxIconesCabecalho}>
              <View style={styles.boxIcone}>
                <Image
                  style={styles.icone}
                  source={require("../assets/icons/view.png")}
                />
              </View>
              <View style={styles.boxIcone}>
                <Image
                  style={styles.icone}
                  source={require("../assets/icons/question.png")}
                />
              </View>
              <View style={styles.boxIcone}>
                <Image
                  style={styles.icone}
                  source={require("../assets/icons/verified.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.boxTextUser}>
            <Text style={[styles.titulo, styles.textoUser]}>Olá, Lucas</Text>
          </View>
        </View>

        {/* SEÇÃO BODY */}
        <View style={styles.containerBody}>
          {/* SEÇÃO CONTA */}
          <View style={styles.saldoConta}>
            <View style={styles.item}>
              <Text style={styles.titulo}>Saldo em conta</Text>
              <Image
                style={styles.icone}
                source={require("../assets/icons/chevron-right.png")}
              />
            </View>

            <View style={styles.saldo}>
              <Text style={styles.titulo}>R$1.234,56</Text>
            </View>
          </View>

          {/* SEÇÃO SERVIÇOS */}
          <View style={styles.linhaServicos}>
            {/* SEÇÃO SERVIÇO */}
            <View style={styles.servico}>
              <TouchableOpacity
                style={styles.boxIconeServico}
                title="Ir para Página 1"
                onPress={() => router.push("/pix")}
              >
                <Image
                  style={styles.icone}
                  source={require("../assets/icons/contactless-payment-circle-outline.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.destaque, styles.textoServico]}>
                Área Pix e{"\n"}Transferir
              </Text>
            </View>

            {/* SEÇÃO SERVIÇO */}
            <View style={styles.servico}>
              <TouchableOpacity
                style={styles.boxIconeServico}
                title="Ir para Página 2"
                onPress={() => router.push("/pagamento")}
              >
                <Image
                  style={styles.icone}
                  source={require("../assets/icons/barcode.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.destaque, styles.textoServico]}>Pagar</Text>
            </View>

            {/* SEÇÃO SERVIÇO */}
            <View style={styles.servico}>
              <TouchableOpacity
                style={styles.boxIconeServico}
                title="Ir para Página 3"
                onPress={() => router.push("/recarga")}
              >
                <Image
                  style={styles.icone}
                  source={require("../assets/icons/cellphone.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.destaque, styles.textoServico]}>
                Recarga{"\n"}de celular
              </Text>
            </View>

            {/* SEÇÃO SERVIÇO */}
            <View style={styles.servico}>
              <TouchableOpacity
                style={styles.boxIconeServico}
                title="Ir para Página 4"
                onPress={() => router.push("/investimento")}
              >
                <Image
                  style={styles.icone}
                  source={require("../assets/icons/plus-circle-multiple-outline.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.destaque, styles.textoServico]}>
                Caixinhas e{"\n"}Investir
              </Text>
            </View>
          </View>

          {/* SEÇÃO EXTRAS */}
          {/* SEÇÃO EXTRA-DINHEIRO ADICIONAL */}
          <View style={styles.extra}>
            <View style={styles.extraEsq}>
              <Image
                style={styles.icone}
                source={require("../assets/icons/cash-multiple.png")}
              />
              <View>
                <Text style={styles.destaque}>Dinheiro adicional</Text>
                <Text style={styles.texto}>Opções de crédito disponivel</Text>
              </View>
            </View>
            <View>
              <Image
                style={styles.icone}
                source={require("../assets/icons/chevron-right.png")}
              />
            </View>
          </View>

          {/* SEÇÃO EXTRA-BOLETO NO CREDITO */}
          <View style={styles.extra}>
            <View>
              <Text style={styles.texto}>
                Pague <Text style={styles.destaque}>boletos no crédito</Text> em
                até 12x,{"\n"}direto pelo app.
              </Text>
            </View>
            <View>
              <Image
                style={styles.icone}
                source={require("../assets/icons/file-document-outline.png")}
              />
            </View>
          </View>

          {/* DIVISOR */}
          <View style={styles.divisor}></View>

          {/* SEÇÃO CARTÃO */}
          <View style={styles.cartao}>
            <View style={styles.item}>
              <Text style={styles.titulo}>Cartão de crédito</Text>
              <Image
                style={styles.icone}
                source={require("../assets/icons/chevron-right.png")}
              />
            </View>

            <View style={styles.conteudo}>
              <Text style={styles.texto}>Fatura fechada</Text>
              <Text style={styles.titulo}>R$1.234,56</Text>
            </View>

            <Text style={styles.subto}>Vencimento dia 08</Text>

            <View style={styles.botoes}>
              <View style={[styles.botao, styles.botaoPagar]}>
                <Text style={styles.textoBotao}>Pagar</Text>
              </View>
              <View style={[styles.botao, styles.botaoParcelar]}>
                <Text style={[styles.textoBotao, styles.textoBotaoParcelar]}>
                  Parcelar
                </Text>
              </View>
            </View>

            <View style={styles.extra}>
              <View style={styles.extraEsq}>
                <Image
                  style={styles.icone}
                  source={require("../assets/icons/card-multiple-outline.png")}
                />
                <Text style={styles.destaque}>Meus cartões</Text>
              </View>
            </View>
          </View>

          {/* DIVISOR */}
          <View style={styles.divisor}></View>

          {/* SEÇÃO EMPRESTIMO */}
          <View style={styles.emprestimo}>
            <View style={styles.item}>
              <Text style={styles.titulo}>Empréstimo</Text>
              <Image
                style={styles.icone}
                source={require("../assets/icons/chevron-right.png")}
              />
            </View>

            <View style={styles.conteudo}>
              <Text style={styles.texto}>Valor disponivel de até</Text>
              <Text style={styles.titulo}>R$25.000,00</Text>
            </View>
          </View>

          {/* DIVISOR */}
          <View style={styles.divisor}></View>

          {/* BOLETOS */}
          <View style={styles.boletos}>
            <View style={styles.item}>
              <Text style={styles.titulo}>Próximos 7 dias</Text>
              <Image
                style={styles.icone}
                source={require("../assets/icons/chevron-right.png")}
              />
            </View>

            <View style={styles.conteudo}>
              <Text style={styles.texto}>
                <Text style={styles.titulo}>R$1.234,56</Text> a pagar em união
                Educacion... e{"\n"}Cartão Nubank
              </Text>
            </View>
          </View>

          {/* DIVISOR */}
          <View style={styles.divisor}></View>

          {/* SEÇÃO NOTICIAS */}
          <View style={styles.noticias}>
            <Text style={styles.titulo}>Descubra mais</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.containerNoticias}
            >
              <View style={styles.noticia}>
                <Image
                  style={styles.imagemNoticia}
                  source={require("../assets/noticia-generico.jpg")}
                />
                <View style={styles.conteudoNoticia}>
                  <Text style={styles.destaque}>Portabilidade de salário</Text>
                  <Text style={styles.subto}>
                    Sua liberdade financeira começa com você escolhendo...
                  </Text>
                  <View style={styles.botao}>
                    <Text style={styles.textoBotao}>Conhecer</Text>
                  </View>
                </View>
              </View>

              <View style={styles.noticia}>
                <Image
                  style={styles.imagemNoticia}
                  source={require("../assets/noticia-mulher-rede.png")}
                />
                <View style={styles.conteudoNoticia}>
                  <Text style={styles.destaque}>Seguro de Vida</Text>
                  <Text style={styles.subto}>
                    Cuide de quem você ama de um jeito simples e que cabe n...
                  </Text>
                  <View style={styles.botao}>
                    <Text style={styles.textoBotao}>Conhecer</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* DIVISOR */}
          <View style={styles.divisor}></View>
        </View>
      </SafeAreaView>
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

  // CABEÇALHO
  containerCabecalho: {
    backgroundColor: "#8a19d6",
    width: "100%",
    height: 150,
  },

  iconesCabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  boxIconesCabecalho: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10,
  },

  boxIcone: {
    backgroundColor: "#ffffff11",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  boxTextUser: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  textoUser: {
    color: "#ffffff",
  },

  // CORPO
  containerBody: {
    backgroundColor: "#ffffff",
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: "5%",
  },

  // CONTA
  saldoConta: {
    paddingTop: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  //SERVIÇOS
  linhaServicos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    width: "100%",
  },

  servico: {
    alignItems: "center",
    marginTop: 30,
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
  extra: {
    backgroundColor: "#eeeeee",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
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

  //CREDITO
  cartao: {
    width: "100%",
    gap: 12,
  },

  fatura: {},

  botoes: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },

  botaoPagar: {
    backgroundColor: "#e00f00",
  },

  botaoParcelar: {
    backgroundColor: "#00000011",
  },

  textoBotaoParcelar: {
    color: "#000000",
  },

  //EMPRESTIMO
  emprestimo: {
    width: "100%",
    gap: 12,
  },

  //NOTICIAS
  noticias: {
    width: "100%",
  },

  containerNoticias: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
  },

  noticia: {
    backgroundColor: "#eeeeee",
    width: "250",
    borderRadius: 16,
    marginTop: 10,
  },

  imagemNoticia: {
    width: "100%",
    height: 150,
    borderRadius: 16,
  },

  conteudoNoticia: {
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    borderRadius: 16,
    gap: 10,
    marginTop: 10,
    marginBottom: 16,
  },
});
