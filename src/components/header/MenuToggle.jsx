import PropTypes from 'prop-types';
import { Box, Button } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const MenuToggle = ({ toggle, isOpen, colorMode, toggleColorMode, ...props }) => {
  return (
    <>
      <Button ml={[170, 850]} onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Box {...props} display={{ base: 'block', md: 'none' }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
    </>
  );
};

MenuToggle.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
  colorMode: PropTypes.string,
  toggleColorMode: PropTypes.func
};

export default MenuToggle;
