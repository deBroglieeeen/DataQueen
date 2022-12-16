import { FC } from 'react'
import { Box, Center } from '@chakra-ui/react'
import { SidebarIcon } from '../SidebarIcon'
import Image from 'next/image'
import { FaTable, FaChartBar } from 'react-icons/fa'

const Sidebar: FC = () => {
  return (
    <Box display={{ sm: 'none', xl: 'block' }} w={'90px'} bgColor={`white`}>
      <Center paddingY={`10`}>
        <Image src={'/DataQueenSmallLogo.svg'} alt='logo' width={60} height={60} />
      </Center>

      <Center>
        <SidebarIcon text='settings' icon={<FaChartBar color='#AA82DD' />} tips='グラフ' />
      </Center>
      <Center>
        <SidebarIcon text='SQL' icon={<FaTable color='#AA82DD' />} tips='SQLクエリ' />
      </Center>
    </Box>
  )
}

export { Sidebar }
