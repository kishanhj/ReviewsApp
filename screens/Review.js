import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Card from '../shared/Card';
import  { images }  from '../shared/images';

export default function Review({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Card>
        <Text>{navigation.getParam('title')} </Text>
        <Text>{navigation.getParam('body')} </Text>
        <View style={styles.image}>
          <Text>Rating : </Text>
          <Image source = { images.ratings[ navigation.getParam('rating') ]}/>
        </View>
      </Card>
      <Button 
      title = 'back'
      onPress={pressHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding : 30
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image : {
    flexDirection : "row",
    justifyContent: "center",
    paddingTop : 16,
    marginTop : 16,
    borderTopWidth : 1,
    borderTopColor : "#eee"
  }
});
