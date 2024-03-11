import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, } from 'react-native';
import { ScrollView } from 'react-native-web';
import { A } from '@expo/html-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.cbvolei}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/pt/6/6e/VoleiBrasil.png"
        }}
      />
      <Text style={{ marginVertical: 12 }}>NOTICIAS DO VOLEI</Text>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.noticias}>
        <Image
          style={styles.image}
          source={{
            uri: "https://sagiesportes.com.br/wp-content/uploads/2023/08/volleyball-on-sand-2021-08-29-00-00-04-utc-753x502.jpg"
          }}
        />
        <Text> “Pode dar 2 toques com o pé no vôlei?” Neste artigo, vamos analisar essa questão e explorar as regras e os cenários em que o uso dos pés é permitido no vôlei.</Text>
      </View>
      <Button
        title="Saiba mais..."
        onPress={() => WebBrowser.openBrowserAsync('https://www.cnnbrasil.com.br/noticias/bernardinho-de-volta-a-selecao-brasileira-diretor-da-cbv-detalha/')}
        style={styles.button}
      />
      <View style={styles.noticias}>
        <Image
          style={styles.image}
          source={{
            uri: "https://s2-ge.glbimg.com/_3Q5yLs4SOVtR-jyVGtF207otmY=/0x0:2560x1707/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/o/N/aMweiYSXa0LIL0YC0X1g/20240303184230-imgl6170-scaled.jpg"
          }}
        />
        <Text>Título inédito! Praia Clube bate o Minas e conquista Copa Brasil de vôlei feminino em Santa Catarina. A Copa Brasil de vôlei feminino de 2024 é do Praia Clube. </Text>
      </View>
      <View style={styles.noticias}>
        <Image
          style={styles.image}
          source={{
            uri: "https://1.bp.blogspot.com/-ObbVlLLZQek/Tklwa2TMppI/AAAAAAAAAIw/7yFhuVcfIpY/s1600/Slide1.JPG"
          }}
        />
        <Text>   Cimed e Sada empatam em primeiro lugar somando os pontos ganhos. Se dividirmos o número de pontos ganhos pelo número de partidas disputadas a Cimed fica em primeiro.  </Text>
      </View>

      <View style={styles.noticias}>
        <Image
          style={styles.image}
          source={{
            uri: "https://esportejoinville.com.br/wp-content/uploads/2024/03/Wallaf_JlleVolei_Centreventos_Superliga_CarlosJunior-768x512.jpeg"
          }}
        />
        <Text>O Joinville Vôlei tem a chance de confirmar matematicamente, nesta segunda-feira (4), a vaga nos playoffs da Superliga Masculina 2023/24.</Text>
      </View>

      <View style={styles.noticias}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/fvs_26322.jpeg?w=420&h=240&crop=1"
          }}
        />
        <Text>O Gerdau Minas conquistou o pentacampeonato do Sul-Americano de Vôlei. De virada, a equipe minas-tenista bateu o Dentil Praia Clube, de Uberlândia, por 3 sets a 2, na tarde deste domingo, no ginásio Paulo Skaf.</Text>
      </View>

      <View style={styles.noticias}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/12/Volei_BLumenau.png?w=420&h=240&crop=1"
          }}
        />
        <Text>Com parciais 25/18, 25/23 e 25/21, o Unilife Maringá venceu o Blumenau por 3 a 0, na noite desta sexta-feira (1), pela quinta rodada da Superliga Feminina de Vôlei, no Ginásio de Esportes Chico Neto.</Text>
      </View>

      <View style={styles.noticias}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/03/bernardinho-JP-Kieffer-Federation-Francaise-de-Volley.jpeg?w=420&h=240&crop=1"
          }}
        />
        <Text>Convidado do CNN Esportes S/A desta semana, Henrique Netto Silva, diretor de Marketing e Novos Negócios Confederação Brasileira de Vôlei (CBV), respondeu sobre Bernardinho voltar a treinar a Seleção Brasileira Masculina de Vôlei.</Text>
      </View>
      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 8
  },
  cbvolei: {
    width: 200,
    height: 200,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 8 
  },
  noticias: {
    flexDirection: "row",
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#cdd",
    marginVertical: 4
  },

});
