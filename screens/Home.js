/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, FlatList, ScrollView} from 'react-native';
import { COLORS, dummyData, SIZES, FONTS, icons, images } from '../constants';


const Home = ({navigation}) => {


  function renderHeader(props){
    return (
      <View style={styles.containerHeader}>
        <ImageBackground source={images.banner}
        resizeMode="cover"
        style={styles.bgimage}>
          {/*Header bar*/}

          <View style={styles.headerBar}>
            <TouchableOpacity style={styles.headerTouchable}
            onPress={() => console.log('Notification')}>
              <Image source={icons.notification_white} resizeMode='contain'
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ flex:1 }} />
            </TouchableOpacity>

          </View>
          
          {/*Balance*/}

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>Your portfolio balance</Text>
            <Text></Text>
            <Text></Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {renderHeader()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 130,
  },
  containerHeader: {
    width: '100%',
    height: 290,
  },
  bgimage: {
    flex: 1,
    alignItems: 'center',
  },
  headerBar: {
    marginTop: SIZES.padding * 2,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: SIZES.padding,
  },
  headerTouchable: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: SIZES.h3,
  },
});

export default Home;
