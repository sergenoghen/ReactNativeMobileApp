//https://www.positronx.io/react-native-table-component-tutorial-with-example/
import {Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, SafeAreaView} from 'react-native';
//import  List  from './SearchList';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { UtilService } from '../services/utils.service'

const SafeAreaViewTable = ({data={'k':keysDataArray, 'v':valuesDataArray}}) => {

    let util = new UtilService();
    // let tableKeys = util.arrKeys(data)
    // let tableValues = util.arrValues(data)
  return (
    <>
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic"  style={styles.scrollView}>
                <View style={[styles.centeredView,styles.text]}  >
                    <View >
                        <View>  
                            <View> 
                                <Text style={{fontSize:20}}>Table data</Text>  
                            </View>  
                            <View>
                                <Text> 
                                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                                    
                                        <Row data={data.k} style={styles.HeadStyle} textStyle={styles.TableText}/>
                                        {/* <Rows data={valuesDataArray} style={styles.HeadStyle} textStyle={styles.TableText}/> */}

                                        {                                        
                                            data.v.map((elem)=>{
                                                return (
                                                    <Row data={Object.values(elem)} textStyle={styles.TableText}/>
                                                )
                                            })                                
                                        }
                                    </Table>
                                </Text>
                                 
                            </View>
                        </View> 
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </>)
}


export default SafeAreaViewTable;

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
      marginHorizontal: 10,
    },
    text: {
      fontSize: 42,
    },
  });