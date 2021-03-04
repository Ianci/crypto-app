/* eslint-disable prettier/prettier */
import React from 'react';
import HeaderBar from '../components/HeaderBar'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Image,
    ScrollView,
    Animated,
} from 'react-native';
import { COLORS, dummyData, SIZES, FONTS, icons, images, SHADOWS } from '../constants';

const CryptoDetail = ({ navigation }) => {

    function renderChart(){
        return(
            <View
            style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.radius,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...SHADOWS.generic,

            }}>
                
            </View>
        )
    }
    return (
       <SafeAreaView>
           <HeaderBar right={true}/>
           <ScrollView>
               <View style={{flex: 1, paddingBottom: SIZES.padding}}>
                    {renderChart()}
               </View>
           </ScrollView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})

export default CryptoDetail;