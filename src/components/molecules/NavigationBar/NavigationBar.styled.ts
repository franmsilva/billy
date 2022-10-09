import NextImage from 'next/image';
import styled from 'styled-components';

export const Header = styled.header`
  height: 100vh;
  width: 100px;
  background-color: #373b53;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  height: 100px;
  width: 100px;
  background: linear-gradient(to bottom, #7c5dfa 0%, #7c5dfa 50%, #9277ff 50%, #9277ff 100%);
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserContainer = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #494e6e;
`;

export const Image = styled(NextImage)`
  border-radius: 50%;
`;
