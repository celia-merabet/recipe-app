import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import recipesData from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/Recipe';

interface Props {
  navigation: any;
}

const RecipeListScreen: React.FC<Props> = ({ navigation }) => {
  const [recipes] = useState<Recipe[]>(recipesData);
  const [search, setSearch] = useState('');

  const filteredRecipes = recipes.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mes Recettes</Text>
      <TextInput
        style={styles.search}
        placeholder="Rechercher une recette..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  title: { fontSize: 26, fontWeight: 'bold', padding: 15 },
  search: { backgroundColor: '#fff', margin: 10, padding: 10, borderRadius: 8 }
});