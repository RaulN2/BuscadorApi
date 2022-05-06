import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, NumberContainer } from './styles';

const UserNumber = props => {
 const history = useHistory();
  const handleOnClick = route => history.push(route);

  return(
     <Container>
       <NumberContainer onClick={() => handleOnClick('/repos')}>
         <h1>{props?.repos}</h1>
         <h2>Repositorios</h2>
         </NumberContainer>

       <NumberContainer onClick={()=> handleOnClick('/starred')}>
         <h1>{props?.starred}</h1> 
         <h2>Rep Favoritos</h2> 
       </NumberContainer>

       
     </Container>

);
}

export default UserNumber;