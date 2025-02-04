import React, { useState } from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import styles from "../CadastroDieta2/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { postDieta } from "../../services/api.js";
import Toast from "react-native-toast-message";
import { useContextProvider } from "../../context/AuthContext.js";

export default function CadastroDieta2Screen() {
    const { dieta, updateDieta, ims, fdn } = useContextProvider();
    const navigation = useNavigation();
    // const [selectedLivrarias, setSelectedLivrarias] = useState([]);


    const handleSelectLivraria = (item) => {
        const updatedLivrarias = [...dieta.selectedLivrarias, item];
        updateDieta("selectedLivrarias", updatedLivrarias);
        navigation.navigate("CadastroDieta2Screen");
    };

    const renderSelectedLivrarias = () => {
        return dieta.selectedLivrarias.map((livraria, index) => (
            <View key={index} style={styles.containerItemTitle}>
                <Text style={styles.listagemItemTitle}>{livraria.nome}</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="KG / MS"
                    onChangeText={(text) => handleInputChange(text, index)}
                />
            </View>
        ));
    };

    const handleInputChange = (text, index) => {
        const updatedLivrarias = [...dieta.selectedLivrarias];
        updatedLivrarias[index].kgMs = text;
        updateDieta("selectedLivrarias", updatedLivrarias);
    };

    return (
        <View style={styles.container}>

            <View style={styles.firstContainer}>

                <TouchableOpacity onPress={() => navigation.navigate("CadastroDietaScreen")}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Nova Dieta</Text>

                <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>
                    <Image source={require("../../../assets/Fill.png")} style={styles.containerItem} />
                </TouchableOpacity>
            </View>

            <View style={styles.secondContainer}>
                <Text style={styles.listagemTitle}>Prencha os dados de FDN</Text>

                <ScrollView style={styles.containerList}>

                    <View style={styles.containerResult}>
                        <View style={styles.containerResultItem}>
                            <Text style={styles.containerTitle}>IMS: {ims.toFixed(2)} kg</Text>
                            <View style={styles.separator}></View>
                            <Text style={styles.containerTitle}>FDN: {fdn.toFixed(2)} kg</Text>
                        </View>
                    </View>

                    {/* ITENS */}

                    {dieta.selectedLivraria && (
                        <View style={styles.containerItemTitle}>
                            {/* <Text style={styles.containerTitle}>Livraria Selecionada:</Text> */}
                            <Text style={styles.listagemItemTitle}>{dieta.selectedLivraria.nome}</Text>
                            <TextInput
                                style={styles.inputField}
                                placeholder="KG / MS"
                                onChangeText={handleSelectLivraria}
                            />
                        </View>
                    )}

                    {renderSelectedLivrarias()}


                    <View style={styles.containerAddItem}>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => navigation.navigate("ListagemLivrariaScreen")}
                        >
                            <Text style={styles.createButtonText}>ADICIONAR LIVRARIA</Text>
                            <Ionicons name="add-outline" size={24} color="#307C31" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("CadastroDieta3Screen")
                            }
                            style={styles.createButton}
                        >
                            <Text style={styles.textButton}>PRÓXIMO</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </View>
        </View >
    )
}
