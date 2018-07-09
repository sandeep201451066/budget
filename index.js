/** @format */

import { AppRegistry, View } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import App from './App';

const AppName = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <App />

            </View>
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => AppName);
