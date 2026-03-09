import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Recipe } from '../types/Recipe';

interface Props {
  recipe: Recipe;
  onPress: () => void;
}

const RecipeCard: React.FC<Props> = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text>⏱ {recipe.prepTime}</Text>
        <Text>🔥 {recipe.difficulty}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3
  },
  image: {
    width: 100,
    height: 100
  },
  textContainer: {
    padding: 10,
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});