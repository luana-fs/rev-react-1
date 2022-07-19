import styled from 'styled-components'

export const HomePageContainer = styled.div`
   
   main {
    display: flex;
    //height: 100vh;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;

    padding: 1rem;
   }

   form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 40%;
      margin: auto;

      button {
         margin-top: 5px;
         padding: 5px;
      }
   }

`