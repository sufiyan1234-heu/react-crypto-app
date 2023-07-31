import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({msg}) => {
  return (
    <Alert status='error' position={'fixed'} bottom={"4"}
    left={"50%"}
    transform={'translateX(-50%)'}
    w={"70%"}
    justifyContent={'center'}
    variant='left-accent'>
      <AlertIcon/>
      { msg || "Something went wrong"}
    </Alert>
  )
}

export default ErrorComponent