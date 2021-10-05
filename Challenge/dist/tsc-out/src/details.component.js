import React from 'react';
import { SafeAreaView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
export const DetailsScreen = ({ navigation }) => {
    return (React.createElement(SafeAreaView, { style: { flex: 1 } },
        React.createElement(Layout, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
            React.createElement(Text, { category: 'h1' }, "DETAILS"))));
};
//# sourceMappingURL=details.component.js.map