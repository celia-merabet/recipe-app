import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import { Recipe } from '../types/Recipe';

interface Props {
  route: { params: { recipe: Recipe } };
}

const RecipeDetailScreen: React.FC<Props> = ({ route }) => {
  const { recipe } = route.params;
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    Alert.alert(
      'Favori',
      favorite ? 'Recette retirée des favoris' : 'Recette ajoutée aux favoris'
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.subtitle}>Ingrédients :</Text>
      {recipe.ingredients.map((ing, index) => (
        <Text key={index}>• {ing}</Text>
      ))}
      <Button
        title={favorite ? 'Retirer des favoris' : 'Mettre en favori'}
        onPress={toggleFavorite}
      />
    </View>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 18, marginTop: 15, marginBottom: 10 }
});