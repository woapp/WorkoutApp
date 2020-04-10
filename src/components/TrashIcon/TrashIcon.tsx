import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

export const TrashIcon: FunctionComponent = () => {
  return (
    <Svg width={14} height={16} viewBox="0 0 14 16" fill="none">
      <Path
        d="M4.667 1.6V.8c0-.212.082-.416.227-.566A.767.767 0 015.444 0h3.112c.206 0 .404.084.55.234.145.15.227.354.227.566v.8h3.111c.413 0 .809.169 1.1.469.292.3.456.707.456 1.131V4c0 .424-.164.831-.456 1.131-.291.3-.687.469-1.1.469h-.103l-.529 8.16a2.428 2.428 0 01-.734 1.593A2.299 2.299 0 019.484 16H4.531c-.591 0-1.16-.231-1.592-.646a2.428 2.428 0 01-.736-1.59L1.663 5.6h-.107c-.413 0-.809-.169-1.1-.469A1.623 1.623 0 010 4v-.8c0-.424.164-.831.456-1.131.291-.3.687-.469 1.1-.469h3.11zm7.777 1.6H1.556V4h10.888v-.8zM3.221 5.6l.534 8.054a.81.81 0 00.245.53.766.766 0 00.531.216h4.953a.766.766 0 00.532-.216.809.809 0 00.244-.531l.522-8.053H3.22zm2.223.8c.207 0 .405.084.55.234.146.15.228.354.228.566v5.6a.812.812 0 01-.228.566.767.767 0 01-.55.234.767.767 0 01-.55-.234.812.812 0 01-.227-.566V7.2c0-.212.082-.416.227-.566a.767.767 0 01.55-.234zm3.112 0c.206 0 .404.084.55.234.145.15.227.354.227.566v5.6a.812.812 0 01-.227.566.767.767 0 01-.55.234.767.767 0 01-.55-.234.812.812 0 01-.228-.566V7.2c0-.212.082-.416.228-.566a.767.767 0 01.55-.234z"
        fill="#0A0D21"
      />
    </Svg>
  );
};