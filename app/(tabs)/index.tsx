import { Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';

export default function HomeScreen() {
  const data = [
    { id: 0, title: 'CodeMash', location: 'Kalahari, Sandusky, Ohio', link: 'https://codemash.org', slug: 'codemash', nextYear: '2025' }
  ];
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/conference-seating.png')}
          style={styles.logo}
        />
      }>
      {data.map((event) => (
        <ThemedView key={event.id} style={styles.stepContainer}>
          <ThemedText type="subtitle">{event.title}</ThemedText>
          <ThemedText>
            {event.location}
          </ThemedText>
          <Link href={{
            pathname: '/event-year/[slugYear]',
            params: { slugYear: `${event.title}~~~${event.nextYear}`}
          }} style={styles.link}>
            <ThemedText type="link">Next Year ({event.nextYear})</ThemedText>
          </Link>
          <ExternalLink href={event.link} style={styles.link}>
            <ThemedText type="link">Website</ThemedText>
          </ExternalLink>
        </ThemedView>
      ))}
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  link: {
    marginTop: 0,
  },
});
