import { Button, ButtonProps } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PrimaryButton: FC<Props> = ({ children }) => {
  return <Button bgColor='PrimaryButton'>{children}</Button>
}
