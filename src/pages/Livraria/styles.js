import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../colors.js";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  firstContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.verdePrincipal,
    height: "20%",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10
},

  title: {
    fontFamily: "Alata-Regular",
    fontWeight: "bold",
    fontSize: 24,
    color: colors.background,
  },

  containerItem: {
    width: 28,
    height: 28,
  },

  secondContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  addButton: {
    flexDirection: "row",
    backgroundColor: colors.amarelo,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: width * 0.02,
    height: height * 0.06,
    marginTop: height * 0.04,
    marginBottom: height * 0.04,
    width: width * 0.9,
    paddingHorizontal: width * 0.04,
  },

  addButtonText: {
    color: colors.background,
    justifyContent: "space-between",
  },

  

  listItemContainer: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: colors.verdePrincipal,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width * 0.02,
    height: height * 0.06,
    marginBottom: height * 0.02,
    width: width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.04,
  },

  listTextItem: {
    color: colors.background,
    textTransform: "uppercase",
  },

  containerImages: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
  },

  containerInputItem: {
    justifyContent: "space-between",
    padding: width * 0.02,
    marginHorizontal: width * 0.012,
  },

  // modal
  modalContainer: {
    flex: 1,
    backgroundColor: colors.backgroundModal,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: colors.background,
    width: width * 0.8,
    padding: 20,
    borderWidth: 0.2,
    borderRadius: 10,
  },

  modalTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },

  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  modalButton: {
    fontSize: 16,
    color: colors.verdePrincipal,
  },

  cancelButton: {
    color: colors.verdePrincipal,
    borderWidth: 1,
    padding: 8,
    borderColor: colors.verdePrincipal,
    borderRadius: 8,
    marginRight: 8,
    width: width * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },

  excluirButton: {
    backgroundColor: colors.vermelho,
    borderWidth: 1,
    padding: 8,
    borderColor: colors.vermelho,
    borderRadius: 8,
    width: width * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },

  modalButtonDelete: {
    color: colors.background,
  },
});
