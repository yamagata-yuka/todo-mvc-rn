import * as React from "react";
import { View, Text, Dimensions } from 'react-native';
import styled from 'styled-components';

type Props = {
  message: string
}
const Snackbar: React.FC<Props> = ({ message }) => {
  return (
    <Snackbarbody>
        <SnackbarText>
          {message}
        </SnackbarText>
    </Snackbarbody>
  )
}

export default Snackbar

const Snackbarbody = styled(Text)`
  background: #fff;
  font-size: 20px;
`
const SnackbarText = styled(Text)`
  background: #ad5;
`