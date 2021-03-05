/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { COLORS, dummyData, SIZES, FONTS, icons, images, SHADOWS } from '../constants';
import HeaderBar from '../components/HeaderBar';
import CurrencyLabel from '../components/CurrencyLabel';
import { ButtonComponent } from '../components/Button';
import TransactionHistoryComponent from '../components/TransactionHistory';


const Transaction = ({ navigation, route }) => {

    const [ selectedCurrency, setSelectedCurrency ] = useState(null)
    const [ transactionHistory, setTransanctionHistory] = useState(dummyData.transactionHistory)


    useEffect(() => {
        const { currency } = route.params;
        setSelectedCurrency(currency)
    }, [])

    const renderTradeCryptoComponent = () => {
        return (
            <View style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.base,
                backgroundColor: COLORS.white,
                padding: 20,
                borderRadius: SIZES.radius,
                ...SHADOWS.generic,
            }}>
                   <View style={{flex: 1}}>
                        <CurrencyLabel
                        icon={selectedCurrency?.image}
                        currency={selectedCurrency?.currency}
                        code={selectedCurrency?.code}
                        />
                    </View>
                    <View style={{
                        marginTop: SIZES.padding,
                        marginBottom: SIZES.padding * 1.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{...FONTS.h2, fontWeight: 'bold'}}>{selectedCurrency?.wallet.crypto} {selectedCurrency?.code}</Text>
                        <Text style={{...FONTS.body4, color: COLORS.gray}}>{selectedCurrency?.wallet.value}</Text>
                    </View>

                    <View>
                        <ButtonComponent title='Trade now' onPress={() => console.log('Rekted')}/>
                    </View>
            </View>
        )
    }

    function renderTransactionHistory(){
        return(
          <TransactionHistoryComponent 
          transactionHistory={transactionHistory}
          />
          
        )
          
      }

    return(
        <SafeAreaView>
            <HeaderBar right={true}/>
            <ScrollView>
                <View style={{flex: 1, paddingBottom: SIZES.padding}}>
                    {renderTradeCryptoComponent()}
                    {renderTransactionHistory()}
                </View>
            </ScrollView>
        </SafeAreaView>
        )
}


export default Transaction;