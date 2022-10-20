import PropTypes from 'prop-types';
import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';

import BrandLogo from './BrandLogo';
import MenuToggle from './MenuToggle';
import MenuNav from './MenuNav';
import NavBar from './NavBar';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBar {...props}>
      <BrandLogo title="Football Data" w="100px" color={['white', 'white', 'primary.500', 'primary.500']} />
      <MenuToggle
        display={{ base: 'flex', sm: 'none' }}
        isOpen={isOpen}
        toggle={toggle}
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
      <MenuNav isOpen={isOpen} />
    </NavBar>
  );
}

Header.prototypes = {};

export default Header;
