import {ViewStyle, TextStyle} from 'react-native';
import {color, typography} from '../../theme';
export const INDICATOR_WRAPPER: ViewStyle = {
  flexDirection: 'row',
  paddingHorizontal: 10,
  marginVertical: 5,
};
export const INDICATOR: TextStyle = {
  color: color.palette.codGray2,
  fontFamily: typography.primary,
  fontWeight: '100',
  fontSize: 20,
};
export const Value: TextStyle = {
  marginLeft: 20,
  color: color.palette.codGray2,
  fontFamily: typography.primary,
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: 20,
};
