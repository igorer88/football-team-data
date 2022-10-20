import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';

function BrandLogo(props) {
  const { title } = props;

  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
}

BrandLogo.propTypes = {
  title: PropTypes.string.isRequired
};

export default BrandLogo;
