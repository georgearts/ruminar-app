import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getLivraria } from "../../services/api.js";
import styles from "../ListagemLivraria/styles";
import { useContextProvider } from "../../context/AuthContext.js";

export default function ListagemLivrariaScreen() {
    const navigation = useNavigation();
    const [livrarias, setLivrarias] = useState([]);
    const { updateDieta, dieta } = useContextProvider();

    useEffect(() => {
        async function fetchLivrarias() {
          try {
            const livrariasData = await getLivraria();
            console.log("Dados recebidos:", livrariasData);
            setLivrarias(livrariasData);
          } catch (error) {
            console.error("Erro ao buscar livrarias:", error);
          }
        }
        fetchLivrarias();
      }, []);
      

      const handleSelectLivraria = (item) => {
        const updatedLivrarias = [...dieta.selectedLivrarias, item];
        updateDieta("selectedLivrarias", updatedLivrarias);
        navigation.navigate("CadastroDieta2Screen");
    };
    

    // async function fetchLivrarias() {
    //     try {
    //       const livrariasData = await getLivraria();
    //       console.log("Dados recebidos:", livrariasData);
    //       setLivrarias(livrariasData);
    //     } catch (error) {
    //       console.error("Erro ao buscar livrarias:", error);
    //     }
    //   }
    
    //   useEffect(() => {
    //     fetchLivrarias();
    //   }, []);

    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Livraria</Text>

                <TouchableOpacity>
                    <Image
                        source={require("../../../assets/Fill.png")}
                        style={styles.containerImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.secondContainer}>
                <Text style={styles.listagemTitle}>
                    Selecione uma livraria para adicionar na sua nova dieta
                </Text>
                
                <FlatList
                    data={livrarias}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.listItemContainer}
                            onPress={() => handleSelectLivraria(item)}
>
                            <Text style={styles.listTextItem}>{item.nome}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}
