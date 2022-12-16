export const buttonStyles = {
  components: {
    Button: {
      variants: {
        'no-hover': {
          _hover: {
            boxShadow: 'none',
          },
        },
        'transparent-with-icon': {
          bg: 'transparent',
          fontWeight: 'bold',
          borderRadius: 'inherit',
          cursor: 'pointer',
          _hover: 'none',
          _active: {
            bg: 'transparent',
            transform: 'none',
            borderColor: 'transparent',
          },
          _focus: {
            boxShadow: 'none',
          },
          // Memo: 同じ名前を設定できないので、コメントアウト
          // _hover: {
          //   boxShadow: 'none',
          // },
        },
      },
      baseStyle: {
        borderRadius: '15px',
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
}
