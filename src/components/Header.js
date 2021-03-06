import React from 'react';
import { View, StyleSheet, Image} from 'react-native'



const Header = () => {
  return (
   <View style={styles.header}>
     <Image source={require('../assets/logo.png')} style={{width: 120, height:50}}></Image>
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
      height: 60,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'#fff',
  },
})

export default Header;