import { create } from "zustand";  //lo que crea el state es esa funcion de create
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { FavoritesSliceType, createFavoriteSlice } from "./favoritesSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools( (...a) => ({ //...coger una copia de todas las funciones de get, set etc..
    ...createRecipesSlice(...a), // y aqui lo pasamos
    ...createFavoriteSlice(...a)
})))