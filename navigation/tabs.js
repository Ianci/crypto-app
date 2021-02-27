/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import { Home } from '../screens';
import { COLORS, FONTS, icons } from '../constants';
import LinearGradient from 'react-native-linear-gradient';




const Tab = createBottomTabNavigator();


const TabBarCustomBtn = ( { children, onPress }) => {
    return (
        <TouchableOpacity
        style={{
            top: -40,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}>
            <LinearGradient
            colors={[COLORS.secondary, COLORS.primary]}
            style={{
                width: 70,
                height: 70,
                borderRadius: 45,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}
const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: COLORS.white,
                borderTopColor: 'transparent',
                height: 100,
            }
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.secondary : COLORS.primary,
                            }}
                            />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.primary, ...FONTS.body5}}>
                                HOME
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                            source={icons.pie_chart}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.secondary : COLORS.primary,
                            }}
                            />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.primary, ...FONTS.body5}}>
                            PORTFOLIO
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={icons.transaction}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.white,
                        }}
                        />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomBtn
                            {...props}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Prices"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                            source={icons.line_graph}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.secondary : COLORS.primary,
                            }}
                            />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.primary, ...FONTS.body5}}>
                                PRICES
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                            source={icons.settings}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.secondary : COLORS.primary,
                            }}
                            />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.primary, ...FONTS.body5}}>
                                SETTINGS
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

export default Tabs;
