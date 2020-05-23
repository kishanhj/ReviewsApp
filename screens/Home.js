import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/Card';
import {MaterialIcons} from "@expo/vector-icons"
import ReviewForm from './reviewForm';

export default function Home({navigation}) {

  const [modalView,setModalView] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const addReview = (review) => {
      setReviews( oldReviews => {
        review.key = Math.random().toString();
        return [review , ...oldReviews]
      });
      setModalView(false);
  }

  return (
    <View style={styles.container}>

      <Modal visible={modalView} animationType='slide'>
      <MaterialIcons 
        name = 'close'
        size={28} 
        onPress = {() => setModalView(false)}
        style = {{ ...styles.icons, ...styles.closeIcon}}/>

        <ReviewForm addReview={addReview} />
      </Modal>

      <MaterialIcons 
        name = 'add'
        size={28} 
        onPress = {() => setModalView(true)}
        style = {styles.icons}/>
      
      <FlatList 
      data = {reviews}
      renderItem = { ({item}) => (
      <TouchableOpacity onPress= {() => { navigation.navigate("Review", item)}}> 
        <Card>
          <Text style={styles.title}>{item.title}</Text>
        </Card>
      </TouchableOpacity>
      )}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    // padding : 10,
    // marginTop : 15,
    // fontSize : 20,
    // fontWeight : "bold",
    // borderWidth : 1,
    // borderStyle : "dashed",
    // borderRadius : 5,
    minWidth : 300,
  },
  icons : {
    alignContent : "center",
    padding : 10,
    marginVertical : 15,
    borderWidth : 1,
    borderRadius : 5
  } ,
  closeIcon : {
    alignSelf : "center",
    backgroundColor : "red"
  }
});
