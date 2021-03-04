/* eslint-disable prettier/prettier */
import React, {useState, useEffect } from 'react';
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
import CurrencyLabel from '../components/CurrencyLabel';
import { VictoryChart, VictoryAxis, VictoryScatter, VictoryLine } from 'victory-native'
import { VictoryCustomTheme }from '../styles'


const CryptoDetail = ({ route, navigation }) => {


    const [ selectedCurrency, setSelectedCurrency ] = useState(null)
   


    useEffect(() => {
        const { currency } = route.params;
        setSelectedCurrency(currency)
    }, [])


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
                
                {/*Header*/}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                }}>
                    {/*Left side*/}
                    <View style={{flex: 1}}>
                        <CurrencyLabel
                        icon={selectedCurrency?.image}
                        currency={selectedCurrency?.currency}
                        code={selectedCurrency?.code}
                        />
                    </View>

                    {/*Right side*/}
                    <View>
                        <Text style={{...FONTS.h3, color: COLORS.primary, fontWeight: 'bold'}}>${selectedCurrency?.amount}</Text>
                        <Text style={{...FONTS.body3, color: selectedCurrency?.type === 'I' ? COLORS.green : COLORS.red}}
                        >
                            {selectedCurrency?.changes}
                        </Text>
                    </View>
                </View>
                {/*Chart*/}

               
                <View 
                style={{marginTop: -25}}>
                </View>
                    <VictoryChart
                    theme={VictoryCustomTheme}
                    height={220}
                    width={SIZES.width - 40}
                    >
                        <VictoryLine 
                        style={{
                            data: {
                                stroke: COLORS.secondary
                            },
                            parent: {
                                border: '1px solid #ccc'
                            }
                        }}
                        data={selectedCurrency?.chartData}
                        categories={{
                            x: ['15 MIN', '30 MIN', '45MIN', '60MIN'],
                            y: ['15', '30', '45']
                        }}
                        />
                        <VictoryScatter
                        data={selectedCurrency?.chartData}
                        size={7}
                        style={{
                            data: {
                                fill: COLORS.secondary
                            }
                        }}
                        />
                        <VictoryAxis style={{
                            grid: {
                                stroke: 'transparent'
                            }
                        }}
                        />

                        <VictoryAxis 
                        dependentAxis
                        style={{
                            axis: {
                                stroke: 'transparent'
                            },
                            grid: {
                                stroke: 'grey'
                            }
                            
                        }}
                        />
                    </VictoryChart>
            </View>
        )
    }

    const renderBuy = () => {
        return (
            <View style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.radius,
                ...SHADOWS.generic,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                padding: 10,
            }}>
               
                    <View style={{
                        flexDirection: 'row', 
                        alignItems: 'center',
                        marginBottom: SIZES.radius,
                        }}
                    >
                    
                    {/*Currency*/}
                        <View style={{flex: 1}}>
                        <CurrencyLabel
                            icon={selectedCurrency?.image}
                            currency={selectedCurrency?.currency}
                            code={selectedCurrency?.code}
                            />
                        </View>
                    {/*Amount*/}
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{marginRight: SIZES.radius}}>
                            <Text>${selectedCurrency?.wallet.value}</Text>
                            <Text>{selectedCurrency?.wallet.crypto} {selectedCurrency?.code}</Text>
                            </View>
                            <Image source={icons.right_arrow}
                            style={{width: 25, height: 25, tintColor: COLORS.secondary}}
                            />
                        </View>
                    </View>
            </View>
            
        )
    }
    return (
       <SafeAreaView>
           <HeaderBar right={true}/>
           <ScrollView>
               <View style={{flex: 1, paddingBottom: SIZES.padding}}>
                    {renderChart()}
                    {renderBuy()}
               </View>
           </ScrollView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})

export default CryptoDetail;