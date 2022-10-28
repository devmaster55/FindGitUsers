import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {color, typography} from '../../theme';

export const CONTAINER: ViewStyle = {padding: 15};
export const TOP_WRAPPER: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: color.palette.lighterGrey,
  borderRadius: 10,
  marginBottom: 10,
  padding: 5,
};
export const AVATAR: ImageStyle = {
  width: 100,
  height: 100,
};
export const NAME_WRAPPER: ViewStyle = {
  marginLeft: 20,
  justifyContent: 'center',
};
export const USER_NAME: TextStyle = {
  color: color.palette.codGray2,
  fontFamily: typography.primary,
  fontWeight: '800',
  fontSize: 25,
  paddingVertical: 3,
};
export const NAME: TextStyle = {
  color: color.palette.codGray2,
  fontFamily: typography.primary,
  fontWeight: '300',
  fontSize: 15,
  paddingVertical: 3,
};
export const DESCRIPTION: TextStyle = {
  color: color.palette.codGray2,
  fontFamily: typography.primary,
  fontWeight: '400',
  fontStyle: 'italic',
  fontSize: 20,
  paddingVertical: 3,
};
export const BOTTOME_WRAPPER: ViewStyle = {
  backgroundColor: color.palette.lighterGrey,
  borderRadius: 10,
  paddingVertical: 10,
};
