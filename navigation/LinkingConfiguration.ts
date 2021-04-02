import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          List: {
            screens: {
              ListScreen: 'list',
            },
          },
          Trends: {
            screens: {
              TrendsScreen: 'trends',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
