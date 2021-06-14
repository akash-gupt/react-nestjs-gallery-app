import styled from 'styled-components';

const Header = () => {
  return <Container> Photo Gallery </Container>;
};

export default Header;

const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: #677db7;
  font-size: 20px;
  font-weight: 800;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
