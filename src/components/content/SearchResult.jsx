import PropTypes from 'prop-types';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function SearchResult(props) {
  const { list } = props;

  return (
    list.length > 0 && (
      <List>
        {list.map(teams => {
          <ListItem>
            <ListIcon as={StarIcon} color="green.500" />
            {teams.name}
          </ListItem>;
        })}
      </List>
    )
  );
}

SearchResult.propTypes = {
  list: PropTypes.array.isRequired
};

export default SearchResult;
