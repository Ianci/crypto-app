/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, FlatList, ScrollView} from 'react-native';
import PriceAlert from '../components/PriceAlert';
import { COLORS, dummyData, SIZES, FONTS, icons, images, SHADOWS } from '../constants';
import { trendingCurrencies } from '../constants/dummy';


const Home = ({navigation}) => {

  const [ trending, setTrending ] = useState(dummyData.trendingCurrencies);
  


  {/*Header Functional component*/}
  function renderHeader(props){

    const renderItem = ({item , index}) => (
      <TouchableOpacity style={{
        width: 180,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        marginLeft: 10,
        borderRadius: 10,
        marginBottom: 2,
        backgroundColor: COLORS.white,
        ...SHADOWS.little,
      }}>
        {/*Currency*/}
        <View>
          <Image
          source={item.image}
          resizeMode='center'
          style={{ marginTop: 5, width: 25, height: 25,
          }}
          />
          <View>
          <Text style={{fontSize: SIZES.h2, lineHeight: 30}}>{item.currency}</Text>
          <Text style={{color: COLORS.gray, fontSize: SIZES.body3}}>{item.code}</Text>
          </View>
        </View>

        {/*Value*/}
        <View style={styles.valueContainer}>
          <Text style={styles.valueTextOne}>${item.amount}</Text>
          <Text style={{color: item.type === 'I' ? COLORS.green : COLORS.red}}>{item.changes}</Text>
        </View>

      </TouchableOpacity>
    );

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
            <Text style={styles.portfolioValue}>${dummyData.portfolio.balance}</Text>
            <Text style={styles.portfolioChanges}>{dummyData.portfolio.changes} Last 24hs.</Text>
          </View>

          {/*Trendings*/}

          <View style={styles.trendingContainer}>
            <Text style={styles.trendingText}>Trending</Text>
            <FlatList 
            contentContainerStyle={{marginTop: SIZES.base}}
            data={trending}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    )
  }

  
  function renderAlert(props){
    return (
      <PriceAlert />
    )
  }

  function renderNotice(props){
    return(
      <View style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.secondary,
        ...SHADOWS.generic
      }}>
        <Text style={{...FONTS.body3, color: COLORS.white}}>Investing safety</Text>
        <Text style={{...FONTS.body4, color: COLORS.white}}>It's very difficult to time and investment,
          especially when the market is volatile. Learn how to use dollar
          cost averaging to your advantage.
        </Text>
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {renderHeader()}
        {renderAlert()}
        {renderNotice()}
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
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  portfolioValue: {
    color: COLORS.white,
    fontSize: SIZES.h1,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  portfolioChanges: {
    color: COLORS.white,
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  trendingContainer: {
    position: 'absolute',
    bottom: '-30%',
  },  
  trendingText: {
    color: COLORS.white,
    paddingLeft: 5,
    fontFamily: 'Roboto-Bold', 
    fontSize: SIZES.h2, 
    lineHeight: 30 ,
  },
  valueContainer: {
    marginTop: SIZES.radius
  },
  valueTextOne: {
    fontFamily: "Roboto-Bold", 
    fontSize: SIZES.h3, 
    lineHeight: 24,
    fontWeight: 'bold'
  },
});

export default Home;
