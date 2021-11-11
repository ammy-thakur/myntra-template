import {useIsFocused} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import s from '../../assets/Style/style';
import BottomTabs from './BottomTabs';
import Header from './Header';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const Layout = ({
  children,
  isBack,
  title,
  subtitle,
  isHomeHeader = false,
  isSafeArea = false,
  isNotify = false,
  isBottomNaigation = true,
  rightJsx,
  headerStyle,
  headerJsx,
  noHeader = false,
  layoutStyle = {},
  titleJsx,
  disableBack,
}) => {
  const Wrapper = useMemo(() => {
    return isSafeArea ? SafeAreaView : View;
  }, [isSafeArea]);

  return (
    <Wrapper style={[s.flex1, layoutStyle]}>
      <FocusAwareStatusBar barStyle="dark-content" />
      {!noHeader &&
        (headerJsx ? (
          headerJsx()
        ) : (
          <Header
            title={title}
            subtitle={subtitle}
            titleJsx={titleJsx}
            isBack={isBack}
            rightJsx={rightJsx}
            isNotify={isNotify}
            isHomeHeader={isHomeHeader}
            headerStyle={headerStyle}
            disableBack={disableBack}
          />
        ))}

      <View style={[s.flex1]}>{children}</View>
      {isBottomNaigation ? <BottomTabs /> : null}
    </Wrapper>
  );
};

export default Layout;
