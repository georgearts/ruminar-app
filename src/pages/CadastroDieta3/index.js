import React, { useState } from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Modal
} from "react-native";
import styles from "../CadastroDieta3/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { postDieta } from "../../services/api.js";
import { useContextProvider } from "../../context/AuthContext.js";


export default function CadastroDieta3Screen() {
    const navigation = useNavigation();
    const { dieta } = useContextProvider();
    const [selectedLivrarias, setSelectedLivrarias] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <View style={styles.container}>

            <View style={styles.firstContainer}>

                <TouchableOpacity onPress={() => navigation.navigate("CadastroDieta2Screen")}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Nova Dieta</Text>

                <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>
                    <Image source={require("../../../assets/Fill.png")} style={styles.containerItem} />
                </TouchableOpacity>

            </View>

            <View style={styles.secondContainer}>
                <Text style={styles.listagemTitle}>Prencha as informações relacionadas ao amido</Text>

                <ScrollView style={styles.containerList}>


                    <View style={styles.containerItemTitle}>
                        <Text style={styles.listagemItemTitle}>Amido estimado</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="KG / MS"
                        // onChangeText={handleSelectLivraria}
                        />
                    </View>


                    {/* NOTIFICATION */}
                    <TouchableOpacity
                        style={styles.containerItemNotification}
                        onPress={toggleModal}>

                        <View style={styles.containerImageNotification}>
                            <Image source={require("../../assets/Notification.png")} style={styles.notificationIcon} />
                        </View>

                        <View style={styles.containerTextNotification}>
                            <Text style={styles.notificationText}>Caso você tenha dúvidas sobre o preenchimento do Fill <Text style={styles.underlinedText}>clique aqui</Text>
                            </Text>
                        </View>

                    </TouchableOpacity>

                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("CadastroDieta3Screen")
                            }
                            style={styles.createButton}
                        >
                            <Text style={styles.textButton}>VER RESUMO</Text>
                        </TouchableOpacity>

                    </View>


                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={toggleModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>

                            <Text style={styles.modalTitle}>Regras parar checar o Fill</Text>

                            <View style={styles.modalItemContainer}>
                                <Text style={styles.modalText}>Atenção: O amido estimado vai variar de acordo com a qualidade da fibra disponível, indo de 20 a 30% na dieta total. Valores acima de 30% são indicados para animais de alta produção, porém pode oferecer risco de acidose.</Text>
                            </View>

                            <View style={styles.modalButtons}>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={toggleModal}
                                >
                                    <Text style={styles.modalButton}>Fechar</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    )
}