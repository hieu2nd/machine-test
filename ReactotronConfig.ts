import Reactotron, { devTools, overlay, trackGlobalErrors } from 'reactotron-react-native';

import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let scriptHostname = 'localhost';
if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}
const reactotron = Reactotron.configure({ host: scriptHostname }).setAsyncStorageHandler?.(AsyncStorage)
  .use(overlay())
  .use(devTools())
  .use(reactotronRedux())
  .use(
    trackGlobalErrors({
      veto: frame => frame.fileName.indexOf('../node_modules/react-native/') >= 0
    })
  )
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/
    },
    asyncStorage: true,
    editor: true,
    overlay: true,
    devTools: true
  })
  .connect();

export default reactotron;
