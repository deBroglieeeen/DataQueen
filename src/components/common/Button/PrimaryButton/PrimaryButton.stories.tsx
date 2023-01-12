import { ComponentMeta } from '@storybook/react'

import { PrimaryButton } from './PrimaryButton'

export default {
  title: 'PrimaryButton',
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>

export const Primary = () => <PrimaryButton>実行</PrimaryButton>
