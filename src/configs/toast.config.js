import { createStandaloneToast } from '@chakra-ui/react';

const showToast = (status = 'info', title, description) => {
  const { toast } = createStandaloneToast();

  return toast({
    title: title,
    description: description,
    status: status,
    position: 'bottom-right',
    variant: 'subtle',
    duration: 9000,
    isClosable: true
  });
};

export default showToast;
