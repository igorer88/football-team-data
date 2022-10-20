import { FormControl, FormLabel, Input, Button, FormErrorMessage, Box } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import useSearchTeam from '../../hooks/use-search.hook';

function SearchBar(props) {
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          const name = values.name.toLowerCase();
          actions.setSubmitting(false);
          //const team = await useSearch(name);
        }, 1000);
      }}
    >
      {props => (
        <Form>
          <Box display={'flex'} flexDirection={'column'}>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isRequired flexGrow={1}>
                  <FormLabel>Find a team</FormLabel>
                  <Input {...field} size="lg" placeholder="Team name" />
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

SearchBar.propTypes = {
  search: PropTypes.object.isRequired
};

export default SearchBar;
