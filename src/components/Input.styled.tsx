import { styled } from 'twind/styled/react';

export type InputProps = React.HTMLAttributes<HTMLInputElement>;

export const Input = styled.input<InputProps>`
  bg-gray-100
  py-2 
  px-4
  rounded-lg
  w(full md:64)
  shadow(none lg(hover:& focus:&))
  transition-all 
  duration-300
`;
