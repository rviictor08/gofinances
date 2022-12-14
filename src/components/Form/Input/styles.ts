import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import styled from "styled-components/native";

export const Container = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.colors.text,
}))`
  width: 100%;
  padding: 18px 16px;
  font-family: ${ ( {theme} ) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  background-color: ${( {theme} ) => theme.colors.shape};

  border-radius: 5px;
  margin-bottom: 8px;
`;