import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 22px ;
`;

export const SectionInfo = styled.div`
  
  ${media.lessThan("medium")`
  display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   background-color: blue;

   > image {
width: 100px;
   }

`}
  
`;

export const SectionInfo2 = styled.div`
 ${media.lessThan("medium")`
  display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   background-color: blue;

   > image {
width: 100px;
   }
   
`}
`;



