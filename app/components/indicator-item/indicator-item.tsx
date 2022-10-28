import React from 'react';
import {View, Text} from 'react-native';
import * as styles from './styles';

export interface IndicatorItemProps {
  label: string;
  value?: string | number;
}

export const IndicatorItem = (props: IndicatorItemProps) => {
  const {label, value} = props;
  return (
    <View style={styles.INDICATOR_WRAPPER}>
      <Text style={styles.INDICATOR}>{label}:</Text>
      <Text style={styles.Value}>{value}</Text>
    </View>
  );
};
