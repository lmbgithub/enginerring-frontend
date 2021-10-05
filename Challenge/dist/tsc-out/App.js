import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { AppNavigator } from './src/navigation.component';
export default () => (React.createElement(React.Fragment, null,
    React.createElement(ApplicationProvider, Object.assign({}, eva, { theme: eva.light }),
        React.createElement(AppNavigator, null))));
//# sourceMappingURL=App.js.map