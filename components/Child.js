// import React, { memo } from 'react';
// import {Text, View} from 'react-native';

// const Child = memo(props => {
//   console.log('log--child', props);
//   return (
//     <View>
//       <Text> Child Component </Text>
//     </View>
//   );
// });

// export default Child;

import React, {memo} from 'react';
import {Text, View, Button} from 'react-native';

const Child = memo(({reset}) => {
  console.log('log--child');
  return (
    <View>
      <Text>Child Component</Text>
      <Button
        onPress={reset}
        title="Click me"
        color="red"
        accessibilityLabel="Click this button to change count"
      />
    </View>
  );
});

export default Child;
