import { useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import { useHookstate } from '@hookstate/core';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import { getAllTeams } from '../../services/teams.service';
import store from '../../store';

function Content(props) {
  const { searchItem, searchResults, allTeamsList } = useHookstate(store);

  const fetchTeams = async () => {
    try {
      const teamList = await getAllTeams();

      allTeamsList.merge(teamList.teams);
    } catch (error) {
      //console.error(error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <Container as="section" flexDirection={'column'}>
      <SearchBar grow={1} search={searchItem} />
      <SearchResult list={searchResults} />
    </Container>
  );
}

Content.propTypes = {};

export default Content;
