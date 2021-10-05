import React from 'react';
import {
    Image,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

import { StyleService, useStyleSheet } from '@ui-kitten/components';

import { ItemPrice } from '../list/item-price.component';
import { ItemPriceChange } from '../list/item-price-change.component';


export const DetailsHeader = ({ children, data,goBack, ...props }): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    return (<> 
        <View style={styles.content} >
            <TouchableOpacity
                onPress={goBack}
                activeOpacity={0.95}
            >
                <View style={styles.topBar} >
                    <View style={styles.topBarButton} >
                        <Image style={styles.topBarButtonImg} source={require('../assets/btn-back.png')} />
                    </View>
                    <Text style={styles.topBarText}>{data.title}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.stats} >
                <Image
                    style={styles.statsPie}
                    source={require('../assets/big-pie.png')}
                ></Image>
                <View
                    style={styles.statsInfo} >
                    <Text style={styles.statsTitle} >
                        Total Invested
                    </Text>

                    <ItemPrice data={data.price} size="30" />
                    <ItemPriceChange data={data.priceChange} />

                </View>
            </View>
        </View>
    </>);
}

const themedStyles = StyleService.create({

    content: {
        marginTop:20,
    },
    topBar: {
        
        flexDirection:'row',
        alignItems:'center',
        marginBottom:30,
    },

    topBarButton: {
        backgroundColor:'rbga(0,0,0,0)',
        color:'black',
        border:0,
        width: 25,
        height: 25,
    },

    topBarButtonImg: {
        width: 25,
        height: 25,
    },

    topBarText: {
        fontSize:25,
        fontWeight:'bold',
        marginLeft:10,   
        color:'black',     
    },

    stats: {

        flexDirection:'column',
        alignItems:'center',
    },

    statsInfo: {
        position:'absolute',
        alignItems: 'center',
        flexDirection:'column',
        top: 95,
    },

    statsTitle: {
        fontSize: 14,
        textAlign:'center',
        marginBottom:15,
    },

    statsPie: {
        width:270,
        height: 270,
        resizeMode:'contain',
    },
});
