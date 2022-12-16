import { FC, ReactElement } from 'react'
import { Box, Center, Flex, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  text: string
  icon: ReactElement
  tips: string
}

export const SidebarIcon: FC<Props> = ({ text, icon, tips }) => {
  const router = useRouter()
  const isActive = router.asPath.endsWith(`#${text}`)

  return (
    <Box paddingY={`2`}>
      <Link href={`#${text}`} role={`button`} tabIndex={0}>
        <Tooltip label={tips} aria-label={tips}>
          <Flex w={`60px`} h={`54px`} flexDirection={`column`}>
            <Box margin={`auto`}>
              {isActive ? (
                <Box>
                  <Center>{icon}</Center>
                  <Center fontSize={`9px`} fontWeight={`700`}>
                    {text}
                  </Center>
                </Box>
              ) : (
                <Box opacity={`0.6`}>
                  <Center>{icon}</Center>
                  <Center fontSize={`9px`} fontWeight={`700`}>
                    {text}
                  </Center>
                </Box>
              )}
            </Box>
          </Flex>
        </Tooltip>
      </Link>
    </Box>
  )
}
