import { ScrollView, View } from "react-native";
import { styles } from "../utils/styles";
import {
  Button,
  Dialog,
  Portal,
  TextInput,
  Paragraph,
} from "react-native-paper";
import { collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState } from "react";
import Logo from "../components/Logo";

export default function CadastrarAnimal({ navigation }) {
  const [dadosAnimal, setDadosAnimal] = useState({
    nome: "",
    raca: "",
    sexo: "",
    altura: "",
    peso: "",
    carteira_vacinacao: "",
    porte: "",
    idade: "",
    observacoes: "",
  });

  const [dialogVisible, setDialogVisible] = useState(false);

  async function handleCadastroAnimal() {
    const animalRef = collection(db, "animais");
    const animal = await setDoc(animalRef, dadosAnimal);
    setDialogVisible(true);
    console.log("Animal cadastrado com sucesso");
    // navigation.navigate("HomeScreen");
  }

  function ShowDialog() {
    return (
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => {}}>
          <Dialog.Title>Alerta</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Animal Cadastrado com sucesso</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => navigation.navigate("HomeScreen")}>
              Ok
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.containerInner}>
        <Logo />
        <View style={styles.containerSoft}>
          <TextInput
            label="Nome"
            value={dadosAnimal.nome}
            onChangeText={(text) =>
              setDadosAnimal({ ...dadosAnimal, nome: text })
            }
          />
          <TextInput
            label="Raça"
            value={dadosAnimal.raca}
            onChangeText={(text) =>
              setDadosAnimal({ ...dadosAnimal, raca: text })
            }
          />
          <TextInput
            label="Sexo"
            value={dadosAnimal.sexo}
            onChangeText={(text) =>
              setDadosAnimal({ ...dadosAnimal, sexo: text })
            }
          />
          <TextInput
            label="Altura"
            value={dadosAnimal.altura}
            onChangeText={(text) =>
              setDadosAnimal({ ...dadosAnimal, altura: text })
            }
          />
          <TextInput
            label="Peso"
            value={dadosAnimal.peso}
            onChangeText={(text) =>
              setDadosAnimal({ ...dadosAnimal, peso: text })
            }
          />
          <TextInput
            label="Carteira de Vacinação"
            value={dadosAnimal.carteira_vacinacao}
            onChangeText={(text) =>
              setDadosAnimal({ ...dadosAnimal, carteira_vacinacao: text })
            }
          />
          <TextInput
            label="Porte"
            value={dadosAnimal.porte}
            onChangeText={(text) =>
              setDadosAnimal({ ...dadosAnimal, porte: text })
            }
          />
          <TextInput
            label="Idade"
            value={dadosAnimal.idade}
            onChangeText={(text) =>
              setDadosAnimal({ ...dadosAnimal, idade: text })
            }
          />
          <TextInput
            label="Observações"
            value={dadosAnimal.observacoes}
            onChangeText={(text) =>
              setDadosAnimal({ ...dadosAnimal, observacoes: text })
            }
          />
          <Button mode="contained" onPress={handleCadastroAnimal}>
            Cadastrar Animal
          </Button>
        </View>
      </View>
      <ShowDialog />
    </ScrollView>
  );
}
