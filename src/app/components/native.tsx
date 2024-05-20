import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';

import { Platform } from 'react-native';

export * from '@constants/styled';

export function ExternalLink(
  props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string }
) {
  return (
    <Link
      target='_blank'
      {...props}
      href={props.href}
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          e.preventDefault();
          // Open the link in an in-app browser.
          WebBrowser.openBrowserAsync(props.href as string);
        }
      }}
    />
  );
}

interface IconsProps {
  name?: React.ComponentProps<typeof FontAwesome>['name'];
  color?: string;
  size?: number;
}

export function Icons({ size = 28, name = 'plus', ...props }: IconsProps) {
  return <FontAwesome size={size} name={name} style={{ marginBottom: -3 }} {...props} />;
}