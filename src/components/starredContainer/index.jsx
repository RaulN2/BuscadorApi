 import{ Section, Title, ListStarredContainer, Starred} from './styles'


 const StarredContainer = props => {
   return(
      <Section>
         <Title>Rep Favoritos de {(props.name)?.split('')}</Title>
         <ListStarredContainer>
           {(props?.starred).map(starreds => (
             <Starred onClick={() => window.location.href(starreds?.html_url)} key={starreds?.id}>
               <h2>{starreds?.name}</h2>
               <p>{starreds?.description}</p>
             </Starred>
           ))}
         </ListStarredContainer>
      </Section>
   )
  
 }
 export default StarredContainer;