import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    StyleService,
    useStyleSheet,
    List,
} from '@ui-kitten/components';

import { ItemLineGraph } from './item-line-graph.component';
import { ItemPrice }  from './item-price.component';
import { ItemPriceChange } from './item-price-change.component';
import ReactNativeComponentTree from 'react-native/Libraries/Renderer/shims/ReactNativeComponentTree';

export const ListTypePie = ({ data, isListHorizontal, clickHandler = null,...props }): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    const renderListItem = (info): React.ReactElement => {

        let onItemPressed = (item) =>{
            // console.log('onItemPressed', item, this);
            clickHandler(item);
        };

        return (
            <TouchableOpacity
                onPress={ onItemPressed.bind(this, info.index) }
                activeOpacity={0.95}
            >
                <View
                    key={info.index.toString()}
                    style={styles.item}    
                    isListHorizontal={isListHorizontal}
                >
                    <Text style={styles.itemTitle} >{info.item.title}</Text>
                    <ItemLineGraph data={info.item.graph} />
                    <ItemPrice data={info.item.price} />
                    <ItemPriceChange data={info.item.priceChange} />
                    <Text style={styles.itemStockCount} >{info.item.stockCount} stock(s)</Text>
                </View>
            </TouchableOpacity>
        );
    };

    let titleView = (props.title) ?
        (<Text style={[styles.title,
        {
            color: props.titleColor || 'black',
        }]} >
            {props.title} {isListHorizontal ? 'hor' : 'vert'}
        </Text>) : null;

    // console.log('isListHorizontal lp:', isListHorizontal);

    return (
        <View style="styles.content" >
            {titleView} 
            <List
                style={styles.list}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderListItem}
            >
            </List>
        </View>
    );
};

const themedStyles = StyleService.create({
    content: {
    },

    title: {    
        fontSize:24,  
        marginBottom:5,
        color:'black',
    },

    list: {
        backgroundColor:'rgba(0,0,0,0)',
        marginLeft:-20,
        marginRight: -20,
        marginBottom: 50,
    },

    item: {
        padding: 20,
        marginLeft:20,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'white',  
        // overflow:'hidden',
        borderRadius:25,
        shadowColor: "#000000",
        shadowOffset: {
            width: 1.0,
            height: 1.0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.0,
        elevation: 3.0,
        width: 240,
        // height: 230,
        flexDirection:'column',
    },

    itemTitle: {
        fontSize:15,
        color:'black',
        marginBottom:25,
    },

    itemStockCount: {
        fontSize:12,
        color:'#FF63AF',
    },
});