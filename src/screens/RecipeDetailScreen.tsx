import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { Recipe } from '../types/Recipe';

interface Props {
  route: { params: { recipe: Recipe } };
}

const RecipeDetailScreen: React.FC<Props> = ({ route }) => {
  const { recipe } = route.params;
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    const newFavorite = !favorite;
    setFavorite(newFavorite);
    Alert.alert(
      'Favori',
      newFavorite ? 'Recette ajoutée aux favoris' : 'Recette retirée des favoris'
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>

      <Text style={styles.subtitle}>Ingrédients :</Text>
      {recipe.ingredients.map((ing, index) => (
        <Text key={index} style={styles.ingredient}>
          • {ing}
        </Text>
      ))}

      <View style={styles.buttonContainer}>
        <Button
          title={favorite ? 'Retirer des favoris' : 'Mettre en favori'}
          onPress={toggleFavorite}
          color={favorite ? '#FF6347' : '#32CD32'} // couleur dynamique pour le bouton
        />
      </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 25,
    width: '100%',
  },
});