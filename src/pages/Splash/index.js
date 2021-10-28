import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlLogo, IlWave1, IlWave2} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wave1}>
        <IlWave1 />
      </View>
      <View style={styles.logo}>
        <IlLogo />
      </View>
      <View style={styles.wave2}>
        <IlWave2 />
        <Text style={styles.version}>Version 1.0</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.light,
  },
  wave1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  wave2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  version: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    marginRight: 25,
  },
});
