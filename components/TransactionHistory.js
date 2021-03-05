import React from 'react'
import { COLORS, dummyData, SIZES, FONTS, icons, images, SHADOWS } from '../constants';
import { TouchableOpacity, View, StyleSheet, Text, Image, FlatList,ScrollView, SafeAreaView } from 'react-native';


const TransactionHistoryComponent = ( { transactionHistory }) => {
    

    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: SIZES.base,
            }}
            onPress={() => console.log(item)}
            >
                <Image source={icons.transaction}
                style={{width: 30, height: 30, tintColor: COLORS.primary}}
                />

                <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                    <Text style={{...FONTS.h3, color: COLORS.black}}>{item.description}</Text>
                    <Text style={{...FONTS.body4, color: COLORS.gray}}>{item.date}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{...FONTS.h3, color: item.type == 'B' ? COLORS.green : COLORS.black}}>{item.amount} {item.currency}</Text>
                    <Image source={icons.right_arrow}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.secondary
                    }}/>
                </View>
            </TouchableOpacity>
        )
    }
    return(
            <SafeAreaView style={{
                flex: 1,
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.padding * 1.5,
                padding: 20,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...SHADOWS.little,
            }}>
            <Text style={{...FONTS.h2}}>Transaction History</Text>
            <FlatList 
            contentContainerStyle={{ marginTop: SIZES.radius}}
            scrollEnabled={false}
            data={transactionHistory}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => {
                return (
                    <View style={{width: '100%', backgroundColor: COLORS.lightGray, height: 1}}></View>
                )
            }}
            />
        </SafeAreaView>
)
}

export default TransactionHistoryComponent