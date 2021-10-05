import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

import { DetailsHeader } from './header/details-header.component';
import { ListManager } from './list/list.component';
import { ContainerClean } from './container-clean.component';
import { useStyleSheet, StyleService } from '@ui-kitten/components';

import { dataIndicators } from './data/data';
import { ListTypeIndicator } from './list/list-type-indicator.component';


export const DetailsScreen = ({ navigation, route }) => {

  const styles = useStyleSheet(themedStyles);

  const navigateClick = () => {
    navigation.navigate('Home');
  };

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <>
      <ContainerClean
        source={require('./assets/container-bg.png')}
      >
        <DetailsHeader 
          goBack={navigateClick}
          data={route.params?.data}
        />
        <ListManager >
          <ListTypeIndicator
            data={route.params?.data.stocks }
          />
        </ListManager >
      </ContainerClean>
    </>
    // </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
  },
});