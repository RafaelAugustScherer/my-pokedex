import usePokedex from '../hooks/usePokedex';
import PokedexContext from './PokedexContext';

function PokedexProvider({ children }) {
  const contextValue = usePokedex();

  return (
    <PokedexContext.Provider value={ contextValue }>
      { children }
    </PokedexContext.Provider>
  );
}

export default PokedexProvider;