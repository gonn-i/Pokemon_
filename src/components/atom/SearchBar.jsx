import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import types from '../../styles/type';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const isDarkActive = useSelector((state) => state.darkMode.isDarkActive);
  const pokeDatas = useSelector((state) => state.pokemon.pokemons);
  const [keyWord, setKeyWord] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPokemons = useMemo(() => {
    if (searchTerm.length < 2) {
      return [];
    }

    const normalizedTerm = searchTerm.toLowerCase();

    return pokeDatas.filter((pokemon) => {
      const name = pokemon.default_name.toLowerCase();
      return name.includes(normalizedTerm);
    });
  }, [searchTerm, pokeDatas]);

  function onClear() {
    setKeyWord('');
    setSearchTerm('');
  }

  function onChange(e) {
    setKeyWord(e.target.value);
  }

  function onSearch() {
    setSearchTerm(keyWord);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      onSearch();
    }
  }

  // Display results only if searchTerm is not empty
  const showNoResults = searchTerm.length >= 2 && filteredPokemons.length === 0;

  return (
    <>
      <Search>
        <Input
          value={keyWord}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          placeholder="검색할 포켓몬 이름을 입력하세요 👀"
          isDarkActive={isDarkActive}
        />
        <BtnBox>
          <Btn onClick={onClear}>X</Btn>
          <Btn onClick={onSearch}>
            <FaSearch />
          </Btn>
        </BtnBox>
      </Search>
      {searchTerm.length >= 2 && (
        <Results>
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => (
              <Link to={`/${pokemon.id}`}>
                <Result key={pokemon.id}>
                  <Image src={pokemon.img.front_default} alt={pokemon.default_name} />
                  <Name>{pokemon.default_name}</Name>
                  <Divider />
                </Result>
              </Link>
            ))
          ) : showNoResults ? (
            <NoResults>검색 결과가 없습니다.</NoResults>
          ) : null}
        </Results>
      )}
    </>
  );
};

export default SearchBar;

const Search = styled.div`
  box-shadow: var(--box-shadow-normal);
  margin: 10px;
  position: relative;
  width: 70%;
  margin: 40px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 10px;
  padding: 20px 12px;
  font-size: var(--font-size-stat);
  background: ${({ isDarkActive }) => (isDarkActive ? types.typeBgColor['darkMode'] : '')};

  @media (max-width: 768px) {
    font-size: var(--font-size-normal);
  }
`;

const BtnBox = styled.span`
  position: absolute;
  width: 20px;
  top: 19px;
  right: 75px;
  margin: 0;

  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    right: 65px;
  }
`;

const Btn = styled.button`
  font-size: var(--font-size-stat);
`;

const Results = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Result = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${({ isDarkActive }) => (isDarkActive ? types.typeBgColor['darkMode'] : ' #f9f9f9')};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px;
`;

const Name = styled.div`
  font-size: var(--font-size-normal);
  color: #333;
`;

const Divider = styled.div`
  height: 1px;
  background: #ddd;
  margin: 10px 0;
`;

const NoResults = styled.div`
  font-size: var(--font-size-normal);
  color: #666;
  text-align: center;
`;
