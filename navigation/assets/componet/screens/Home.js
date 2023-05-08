import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';

const Home = ({navigation}) => {
  return (

    <View>
      <Button title="Go to About Page" onPress={()=>{navigation.navigate("About")}}/>
        
        </View>
  );
}

export default Home