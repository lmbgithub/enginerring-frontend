import React from 'react';
import { View, Image} from 'react-native';
import {
    StyleService,
    useStyleSheet,
    List,
} from '@ui-kitten/components';

export const BottomNavigation = ({children, ...props} ) => {
    const styles = useStyleSheet(themedStyles);

    return <View style={styles.content} {...props} >
        <View style={styles.navButtonContainer} >
            <Image style={styles.navButton} source={require('../assets/nav-graph-icon.png')} ></Image>
        </View>

        <View style={styles.navButtonContainer} >
            <Image style={styles.navButton} source={require('../assets/nav-coin-icon.png')} ></Image>
        </View>

        <View style={styles.navButtonContainer} >
                <Image style={styles.navButton} source={require('../assets/nav-look-icon.png')} ></Image>
        </View>

            <View style={styles.navButtonContainer} >
                <Image style = {styles.navButton} source={require('../assets/nav-bell-icon.png')} ></Image>
        </View>

        <View style={styles.navButtonContainer} >
            < Image style = {styles.navButton} source={require('../assets/nav-user-icon.png')} ></Image>
        </View>

    </View>;
}

const themedStyles = StyleService.create({

    content: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 20,
        paddingTop:20,
        paddingBottom:20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor:'white',
    },
    navButtonContainer: {
        width:25,
        height:25,
    },
    navButton: {
        width:25,
        height:25,
        resizeMode:'contain',
    },
});