import styled from '@emotion/styled';

export const ItemContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: calc((100% - (2 * 2rem)) / 3);
  padding: 2rem 1rem;
  border-radius: 30px;
  background: linear-gradient(145deg, #99cfe5, #81aec1);
  box-shadow: 11px 11px 22px #678b9a, -11px -11px 22px #b7f7ff;
  cursor: pointer;

  /* @media (min-width: 1024px) {
    flex-basis: calc((100% - (2 * 1rem)) / 3);
  } */
`;
