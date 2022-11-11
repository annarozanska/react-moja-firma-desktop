import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
	--white: #fff;
	--lightwhite: #f1f1f1;
	--grey: #4e4e4e;
	--lightgray: #c4c4c4;
	--blue: #152d41;
	--lightblue: #405d78;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  list-style: none;
}
`;

export default GlobalStyle;
