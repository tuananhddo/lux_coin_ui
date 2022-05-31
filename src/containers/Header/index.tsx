import React from 'react';
import * as S from './style';
import AppBars  from '../../components/AppBars';

interface Props {
  leftElement?: any,
  centerElement?: any,
  rightElement?: any,
  styleCustom?: any,
  color?: any
  position?: any
}

function Header(props: Props): React.ReactElement {
  const { leftElement, centerElement, rightElement, styleCustom, ...rest } = props;
  return (
      <AppBars
        style={{
          ...styleCustom
        }}
        leftbar={leftElement}
        centerbar={centerElement}
        rightbar={rightElement ? rightElement : ''}
        {...rest}
      />
  )
}

// Header.propTypes = {
//   leftElement: PropTypes.any,//left elemnt
//   centerElement: PropTypes.any,//center element
//   rightElement: PropTypes.any,//right element
//   styleCustom: PropTypes.any,//styleCustom
//   loading: PropTypes.bool,//loading check
// };

export default Header;