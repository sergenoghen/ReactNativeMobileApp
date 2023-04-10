import {useState} from 'react';
// import { Table, BootstrapTable, TableHeaderColumn } from 'react-bootstrap';
import {Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, SafeAreaView} from 'react-native';
import  List  from './SearchList';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const MyModal = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  //source : https://www.positronx.io/react-native-table-component-tutorial-with-example/
  const state = {
    HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
    DataTable: [
      ['1', '2', '3', '4', '5'],
      ['a', 'b', 'c', 'd', 'e'],
      ['1', '2', '3', '4', '5'],
      ['a', 'b', 'c', 'd', 'e'],
      ['1', '2', '3', '4', '5']
    ]
  }

  const arrKeys = (obj)=>{
    return Object.keys(obj);
  }
  const arrValues = (obj)=>{
    return Object.values(obj);
  }


  return (
        <>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)} >
                <Text style={styles.textStyle}>{List.CakeType[data].name}</Text>
            </Pressable>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    style={{flex:1}}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <SafeAreaView style={styles.container}>
                        <ScrollView contentInsetAdjustmentBehavior="automatic"  style={styles.scrollView}>
                            <View style={[styles.centeredView,styles.text]}  >
                                <View style={styles.modalView}>
                                    <View>  
                                        <View> 
                                            <Text style={{fontSize:20}}>Batters</Text>  
                                        </View>
                                        <Text> 
                                            <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                                            
                                                <Row data={arrKeys(List.CakeType[data].batters.batter[0])} style={styles.HeadStyle} textStyle={styles.TableText}/>

                                                {
                                                    List.CakeType[data].batters.batter.map((elem)=>{
                                                        return (
                                                            <Row data={arrValues(elem)} textStyle={styles.TableText}/>
                                                        )
                                                    })                                
                                                }
                                            </Table>
                                        </Text>
                                        <View> 
                                            <Text style={{fontSize:20}}>Topping</Text>  
                                        </View>
                                        <Text> 
                                            <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                                            
                                                <Row data={arrKeys(List.CakeType[data].topping[0])} style={styles.HeadStyle} textStyle={styles.TableText}/>

                                                {
                                                    List.CakeType[data].topping.map((elem)=>{
                                                        return (
                                                            <Row data={arrValues(elem)} textStyle={styles.TableText}/>
                                                        )
                                                    })                                
                                                }
                                            </Table>
                                        </Text>
                                        <Text>
                                            <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                                                <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                                                <Rows data={state.DataTable} textStyle={styles.TableText}/>
                                            </Table>
                                        </Text>
                                    </View> 

                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Hide Modal</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </Modal>
      </> 
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 5,
  }
  ,
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
  

export default MyModal;