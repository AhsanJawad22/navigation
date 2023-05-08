import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './assets/componet/screens/Home';
import About from './assets/componet/screens/about';

const Stack = createNativeStackNavigator();


export default function App() { 
  const [name, setName] = useState("Hallo");
  const [shoppingList, setShoppingList] = useState([

    {key:1,name:"soup"},
    {key:2,name:"bath"},
    {key:3,name:"job"}
    
  ]);

  const handleChange= (updatedname)=>{
    setName(updatedname);
  }
  return(

<NavigationContainer>
   <Stack.Navigator>

   <Stack.Screen name="Home" component={Home} />
   <Stack.Screen name="About" component={About} />

 </Stack.Navigator> 
 
</NavigationContainer>
  );
}

const initialStyle=StyleSheet.create({})

