import {
  Text,
  Box,
  Button,
  Flex,
  Icon,
  useColorModeValue,
  IconButton,
  Divider,
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { IconBox } from './IconBox'
import { HiOutlineDatabase } from 'react-icons/hi'
import { CiViewTable } from 'react-icons/ci'
import DataQueenSmallLogo from '../../public/DataQueenSmallLogo.svg'
import Image from 'next/image'

const Sidebar: React.VFC = () => {
  const mainPanel = useRef<HTMLDivElement>(null)
  const [variantChange, setVariantChange] = useState<string>('0.2s linear')
  const sidebarBg = useColorModeValue('#F8F9FA', 'gray.700')
  const [sidebarRadius, setSidebarRadius] = useState<string>('16px')
  const [sidebarMargins, setSidebarMargins] = useState<string>('16px 0px 16px 16px')
  const activeBg = useColorModeValue('white', 'gray.700')
  const inactiveBg = useColorModeValue('white', 'gray.700')
  const activeColor = useColorModeValue('gray.700', 'white')
  const inactiveColor = useColorModeValue('gray.400', 'gray.400')
  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: 'none', xl: 'block' }}>
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w='260px'
          maxW='260px'
          ms={{
            sm: '16px',
          }}
          my={{
            sm: '16px',
          }}
          h='calc(100vh - 32px)'
          ps='20px'
          pe='20px'
          m={sidebarMargins}
          borderRadius={sidebarRadius}
        >
          <Box marginTop='40px' marginBottom='46px'>
            <Image src='/DataQueenSmallLogo.svg' height='60px' width='60px' alt='' />
          </Box>

          <Divider
            bgGradient='linear-gradient(to-r,gray.300 0%,gray.300 100%,gray.300 15%)'
            marginBottom='40px'
          />

          <Button
            boxSize='initial'
            justifyContent='flex-start'
            alignItems='center'
            bg={activeBg}
            mb={{
              xl: '12px',
            }}
            mx={{
              xl: 'auto',
            }}
            ps={{
              sm: '10px',
              xl: '16px',
            }}
            py='12px'
            borderRadius='15px'
            w='100%'
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent',
            }}
            _focus={{
              boxShadow: 'none',
            }}
          >
            <Flex>
              <IconBox bg='white' color='white' h='30px' w='30px' me='12px'>
                <Icon as={HiOutlineDatabase} color='#AA82DD' width='25px' height='25px'></Icon>
              </IconBox>

              <Text color={activeColor} my='auto' fontSize='sm'>
                データセット
              </Text>
            </Flex>
          </Button>
          <Button
            boxSize='initial'
            justifyContent='flex-start'
            alignItems='center'
            bg='transparent'
            mb={{
              xl: '12px',
            }}
            mx={{
              xl: 'auto',
            }}
            py='12px'
            ps={{
              sm: '10px',
              xl: '16px',
            }}
            borderRadius='15px'
            w='100%'
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent',
            }}
            _focus={{
              boxShadow: 'none',
            }}
          >
            <Flex>
              <IconBox bg='white' color='white' h='30px' w='30px' me='12px'>
                <Icon as={CiViewTable} color='#AA82DD' width='25px' height='25px'></Icon>
              </IconBox>
              <Text color={inactiveColor} my='auto' fontSize='sm'>
                SQLクエリ実行
              </Text>
            </Flex>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export { Sidebar }
