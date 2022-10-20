import { Link, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import '@/styles/nav.css';

function MenuItem({ children, isLast, to = '/', ...props }) {
  return (
    <Link href={to} className="nav-link">
      <Text display="block" {...props}>
        {children}
      </Text>
    </Link>
  );
}

MenuItem.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string,
  isLast: PropTypes.bool
};

export default MenuItem;
