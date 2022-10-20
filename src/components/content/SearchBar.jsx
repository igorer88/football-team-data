import { FormControl, FormLabel, Input, Button, FormErrorMessage, Box } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

function SearchBar(props) {
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values, actions) => {
        values.name.toLowerCase();
        actions.actions.setSubmitting(false);
      }}
    >
      {props => (
        <Form>
          <Box display={'flex'} flexDirection={'column'}>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isRequired flexGrow={1}>
                  <FormLabel>Find a team</FormLabel>
                  <Input {...field} placeholder="Team name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button mt={4} colorScheme="cyan" alignSelf={'center'} isLoading={props.isSubmitting} type="submit">
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

SearchBar.propTypes = {};

export default SearchBar;
