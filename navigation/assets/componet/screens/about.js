import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';

const About = ({navigation}) => {

  return (

    <View>
      <Button title="Go to About Page" onPress={() => { navigation.navigate("Home") }} />

    </View>
  )
}

export default About