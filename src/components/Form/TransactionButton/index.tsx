import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
  Container,
  Title,
  Icon,
} from './styles';

interface Props extends TouchableOpacityProps{
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}



export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: Props) {
  return (
    <Container 
      isActive={isActive} 
      type={type} 
      {...rest}
    >
      <Icon 
        isActive={isActive}
        name={icons[type]}
        type={type}
      />
      <Title>
        {title}
      </Title>
    </Container>
  )
}