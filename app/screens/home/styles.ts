import {TextStyle, ViewStyle, Dimensions} from 'react-native';
import {typography, color} from '../../theme';

const {height, width} = Dimensions.get('window');
export const CONTAINER: ViewStyle = {flex: 1};
export const WARNING_WRAPPER: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
export const NOT_FOUND: TextStyle = {
  color: color.palette.angry,
  fontFamily: typography.primary,
  fontWeight: '800',
  fontStyle: 'italic',
  fontSize: 20,
  paddingVertical: 3,
};
export const SPINNER_WRAPPER: ViewStyle = {
  position: 'absolute',
  left: width / 2,
  top: height / 2,
  justifyContent: 'center',
  alignItems: 'center',
};
