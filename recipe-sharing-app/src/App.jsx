// src/App.jsx
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
