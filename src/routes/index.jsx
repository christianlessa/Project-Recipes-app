// Tela de detalhes de uma receita de comida: /foods/{id-da-receita};
// Tela de detalhes de uma receita de bebida: /drinks/{id-da-receita};
// Tela de receita em progresso de comida: /foods/{id-da-receita}/in-progress;
// Tela de receita em progresso de bebida: /drinks/{id-da-receita}/in-progress;
// Tela de explorar: /explore;
// Tela de explorar comidas: /explore/foods;
// Tela de explorar bebidas: /explore/drinks;
// Tela de explorar comidas por ingrediente: /explore/foods/ingredients;
// Tela de explorar bebidas por ingrediente: /explore/drinks/ingredients;
// Tela de explorar comidas por nacionalidade: /explore/foods/nationalities;
// Tela de receitas feitas: /done-recipes;
// Tela de receitas favoritas: /favorite-recipes.

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
    </Switch>
  );
}

export default Routes;
