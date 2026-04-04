import { View, Image, Text, StyleSheet } from 'react-native';

export default function LogoUFJF() {
    return (
        <View style={styles.container}>
            <Image 
                source={{ 
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dlcxvcS1-UQ5qdWWSMRnLlEqThWvu2IIpw&s'
                }} 
                style={styles.logo}
            />

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 12,
    borderRadius: 12,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

    elevation: 5,
  },

});