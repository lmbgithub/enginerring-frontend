import React from 'react';
import { SafeAreaView } from 'react-native';
import {BottomNavigation} from './navigation/bottom-navigation.component';
import { HomeHeader} from './header/home-header.component';
import {ListManager} from './list/list.component';
import { ContainerTopBGImage} from './container-top-bg-image.component';
import { useStyleSheet, StyleService } from '@ui-kitten/components';

import { dataHeader, dataPies, dataIndicators } from './data/data';

import { ListTypePie } from './list/list-type-pie.component';
import { ListTypeIndicator } from './list/list-type-indicator.component';


export const HomeScreen = ({ navigation }) => {

    const styles = useStyleSheet(themedStyles);

    const navigateClick = ( p ) => {
        const index = parseInt(p);
        if (dataPies && dataPies.length && dataPies.length > index )
        {
            navigation.navigate('Details', { data:dataPies[index] } );
        }
    };

    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <>
            <ContainerTopBGImage 
                source={require('./assets/header-bg.jpg')}
            >
                <HomeHeader data={dataHeader} />
                <ListManager >
                    <ListTypePie 
                        title="Your Pies"
                        titleColor="white"
                        data={dataPies}
                        clickHandler={navigateClick}
                    />
                    <ListTypeIndicator 
                        title="Watchlist"
                        data={dataIndicators}                        
                    />
                </ListManager >
            </ContainerTopBGImage>
            <BottomNavigation ></BottomNavigation>
        </>
        // </SafeAreaView>
    );
};

const themedStyles = StyleService.create({
    container: {
    },
});