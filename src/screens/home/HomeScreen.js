import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CakeComponentTest from '../../components/CakeComponentTest'
const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
        <CakeComponentTest />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
