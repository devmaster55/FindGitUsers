import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {color, typography} from '../../theme';

export const ITEM_WRAPPER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: color.palette.silverChalice,
  marginHorizontal: 10,
  marginVertical: 5,
  paddingHorizontal: 5,
  paddingVertical: 5,
  borderRadius: 5,
};
export const AVATAR: ImageStyle = {
  width: 55,
  height: 55,
};
export const USER_NAME: TextStyle = {
  marginLeft: 20,
  color: color.palette.codGray2,
  fontFamily: typography.primary,
  fontWeight: '300',
  fontSize: 20,
};
