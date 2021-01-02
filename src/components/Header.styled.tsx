import { styled } from 'twind/styled/react';

export type HeaderProps = React.HTMLAttributes<HTMLHeadElement>;
export const Header = styled.header<HeaderProps>`
  bg-gray-900 
  text-white 
  flex 
  flex-wrap 
  items-center 
  justify-center 
  py-2 
  px-2
`;
