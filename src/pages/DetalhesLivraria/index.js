import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { getLivraria } from "../../services/api";
import styles from "../DetalhesLivraria/styles";

export default function DetalhesLivrariaScreen({ route }) {
  const navigation = useNavigation();
  const [details, setDetails] = useState([]);
  const { item } = route.params;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getLivraria();
        console.log("oi", response);

        if (response.data) {
          setDetails(response.data);
          console.log("Livraria", response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar os detalhes:", error);
      }
    }

    fetchData();
  }, [details]);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Detalhes Livraria</Text>

        <TouchableOpacity>
          <Image
            source={require("../../../assets/Fill.png")}
            style={styles.containerImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>

        <View style={styles.containerProps}>

          <View style={styles.containerPropsTitle}>
            <Text style={styles.itemTitle}>{item.nome}</Text>
          </View>

          <View style={styles.containerPropsItens}>
            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>MS:</Text>
              <Text style={styles.percetange}>{item.ms}%</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>PB:</Text>
              <Text style={styles.percetange}>{item.pb}%</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>PDR:</Text>
              <Text style={styles.percetange}>{item.pdr}%</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Proteína Solúvel:</Text>
              <Text style={styles.percetange}>{item.proteina_soluvel}%</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>FDN Efetivo:</Text>
              <Text style={styles.percetange}>{item.fdn_efetivo}%</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>NDT:</Text>
              <Text style={styles.percetange}>{item.ndt}%</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>FDN:</Text>
              <Text style={styles.percetange}>{item.fdn}%</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>CNF:</Text>
              <Text style={styles.percetange}>{item.cnf}%</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>Amido:</Text>
              <Text style={styles.percetange}>{item.amido}%</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>EE:</Text>
              <Text style={styles.percetange}>{item.ee}%</Text>
            </View>

          </View>

        </View>
      </View>

      <View style={styles.containerInfo}>
        <Image
          source={require("../../assets/Notification.png")}
          style={styles.image}
        />
        <Text style={styles.infoText}>
          Alguma mensagem de informação ou um texto?
        </Text>
      </View>
    </View>
    
  );
}
