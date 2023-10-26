import { Icon } from '@chakra-ui/react';
import logoImage from './logo.png'; // Import the image

export const LogoIcon = (props: Record<string, string | number>) => (
  <Icon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <image
      href={logoImage} // Set the source of the image to the imported logoImage
      clipRule="evenodd"
      fill={props.fill as string}
      fillRule="evenodd"
    />
  </Icon>
);
