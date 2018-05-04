import {AppRegistry, YellowBox} from 'react-native';
import Step from './src/page/Step';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('kekegdsz', () => Step);
