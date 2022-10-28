import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {color, typography} from '../../theme';

export const ITEM_WRAPPER: ViewStyle = {
  backgroundColor: color.palette.lightGrey,
  marginHorizontal: 10,
  marginVertical: 5,
  padding: 10,
  borderRadius: 5,
};
export const TOP_WRAPPER: ViewStyle = {
  flexDirection: 'row',
};
export const AVATAR: ImageStyle = {
  width: 55,
  height: 55,
};
export const INFO_WRAPPER: ViewStyle = {
  marginLeft: 10,
  justifyContent: 'center',
};
export const NAME_WRAPPER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};
export const USER_NAME: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
  fontWeight: '100',
  fontSize: 15,
};
export const ORIGINAL_NAME: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.secondary,
  fontWeight: '200',
  fontSize: 18,
};
export const DESCRIPTION: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.secondary,
  fontWeight: '200',
  fontSize: 20,
};
export const BOTTOM_WRAPPER: ViewStyle = {
  marginTop: 10,
  marginLeft: 65,
  flexDirection: 'row',
  justifyContent: 'space-between',
};
export const FOLLOWERS_BTN: ViewStyle = {
  paddingVertical: 2,
  paddingHorizontal: 10,
  backgroundColor: color.palette.angry,
  borderRadius: 3,
};
export const FOLLOWING_BTN: ViewStyle = {
  paddingVertical: 2,
  paddingHorizontal: 10,
  backgroundColor: color.palette.deepPurple,
  borderRadius: 3,
};
export const NUMBER: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
  fontWeight: '200',
  fontSize: 20,
};
export const LABEL: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
  fontWeight: '100',
  fontStyle: 'italic',
  fontSize: 15,
};
