import styled, { css } from 'styled-components';
import { Button } from '../button/style';
import { Description } from '../leadSection/style';

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RightWrapper = styled(LeftWrapper)`
  justify-content: center;
  padding: 0 4rem;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const FeatureBox = styled.div`
  padding: 2rem 3rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
  color: #7a7a7a;
  cursor: pointer;
  h3 {
    color: #7a7a7a;
  }
  transition: all 0.2s ease;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  ${(props) =>
    props.active &&
    css`
      background: #0abe51;
      color: #fff;
      h3 {
        color: #fff;
      }
    `}
    @media(max-width:767px){
      padding: 1rem 2rem;
    }
`;

export const Count = styled.span`
  font-size: 1.5rem;
  margin-right: 1.5rem;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width:767px){
    display : none;
  }
`;

export const Content = styled(Description)`
  span {
    display: block;
    margin-top: 1rem;
  }
`;

export const CTAButton = styled(Button)`
  width: 50%;
  margin-top: 2rem;
  @media(max-width:767px){
    margin-top: 0;
  }
`;

export const MobileContentBox = styled(RightContent)`
  display : none;
  @media(max-width:767px){
    display : flex;
    margin-bottom : 0;
    transition : height .5s, margin-bottom .5s , opacity .6s;
    height : 0;
    overflow : hidden;
    opacity : 0;
    ${(props) =>
      props.active &&
      css`
      margin-bottom : 2rem;
      opacity : 1;
      height : 100%;
      transition : height .5s, margin-bottom .5s,opacity .6s;
      overflow : visible;
    `}
  }
`;