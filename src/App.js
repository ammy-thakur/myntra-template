import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Route from './route';

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  return (
    <>
      {!splash ? (
        <Route />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 24}}>Splash Screen</Text>
        </View>
      )}
    </>
  );
};

export default App;
