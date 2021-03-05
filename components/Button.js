import React from 'react'
import { Text, Button, View, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS, icons, SHADOWS } from '../constants';
import { useNavigation } from '@react-navigation/native'
export const ButtonComponent = ({ selectedCurrency }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
        style={{
            flex: 1,
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.base,
            padding: 20,
            backgroundColor: COLORS.fireOpal,
            borderRadius: SIZES.radius,
            ...SHADOWS.generic
        }}
        onPress={() => navigation.navigate('Transaction', { currency: selectedCurrency })}>
        <View style={{alignItems: 'center'}}>
            <Text style={{...FONTS.h2, fontWeight: 'bold', color: COLORS.white}}>Buy Now</Text>
        </View>
        </TouchableOpacity>
    )
}
