import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { COLORS, SIZES, FONTS, icons } from '../constants';

const PriceAlert = () => {
    return(
        <TouchableOpacity style={styles.container}>
            <Image
            source={icons.notification_color}
            style={styles.image}
            />
            <View style={{flex: 1, marginLeft: SIZES.radius}}>
            <Text style={{...FONTS.h3}}>Set price Alert</Text>
            <Text style={{...FONTS.body4}}>Get notifed when your coins are moving</Text>
            </View>
            <Image source={icons.right_arrow} style={{
                width: 35, height: 35, tintColor: COLORS.gray
            }}
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 4.5,
        marginHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        backgroundColor:COLORS.white,
        borderRadius: SIZES.radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 6,
    },
    image: {
        width: 30,
        height: 30,
    },
})
export default PriceAlert