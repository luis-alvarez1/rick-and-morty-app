import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {fetchCharacters} from '../../redux/actions';

const HomeScreen = ({characters, fetchCharacters}) => {
  useEffect(() => {
    console.log('llama al effect');
    fetchCharacters();
  }, []);

  //TODO: CHARACTERS LLEGA VACÍO
  console.log('CHARACTERS DESDE PANTALLA!! \n\n\n', characters.characters);
  if (characters.loading) {
    return <Text>Loading</Text>;
  } else if (characters.error) {
    return <Text>{characters.error}</Text>;
  } else if (!characters.loading) {
    return (
      <View>
        <Text>HOME</Text>

        <FlatList
          data={characters.characters}
          renderItem={(character) => {
            return <Text>{character.name}</Text>;
          }}
          keyExtractor={characters.id}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({});

const mapState = (state) => {
  return {
    characters: state.reducer,
  };
};
const mapDispatch = (dispatch) => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters()),
  };
};

export default connect(mapState, mapDispatch)(HomeScreen);
