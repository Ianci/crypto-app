import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { useNavigation } from '@react-navigation/native'


const HeaderBar = ({right}) => {

    const navigation = useNavigation()

    return (
        <View style={{paddingHorizontal: SIZES.padding, flexDirection: 'row', paddingBottom: SIZES.base, paddingTop: SIZES.base, backgroundColor: COLORS.secondary}}>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
                <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => navigation.goBack()}
                >
                    <Image source={icons.back_arrow}
                    resizeMode='contain'
                    style={{
                        width: 21,
                        height: 21,
                        tintColor: COLORS.white
                    }} />
                    <Text style={{marginLeft: SIZES.base, ...FONTS.h2, color: COLORS.gray}}>Back</Text>
                </TouchableOpacity>
            </View>

            {/*Star Icon*/}
            {right && 
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                        <Image
                        source={icons.star}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                        />
                    </TouchableOpacity>
            </View>
            }
        </View>
    )
}

export default HeaderBar