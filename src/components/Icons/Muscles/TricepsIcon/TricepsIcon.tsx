import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

export const TricepsIcon = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M5.056 14.006c.126.92 1.577 3.74 3.772 3.435.899-.193 1.82-.686 1.64-2.915a.38.38 0 01.016-.142c.275-.883.178-1.411-.224-2.284a.4.4 0 00-.15-.165c-.988-.637-1.057-2.524-1.044-3.274a.376.376 0 00-.296-.374c-1.615-.344-2.19-.86-2.708-2.076-.541-1.267-.99 3.587-1.006 3.766v.014c-.007.176-.122 3.122 0 4.015zM15.716 10.075c-2.209-.42-4.913 1.761-4.777 1.964.135.203.723 1.539.292 2.254h3.228c1.273-.101 2.429-.428 4.305-1.321a.326.326 0 00.188-.348c-.25-1.406-1.412-2.202-3.236-2.55z"
        fill="#fff"
      />
      <Path
        d="M9.931 18.041l5.03-.125c1.006-.108 1.723-.014 2.765-.88.69-.666.975-1.247 1.257-2.666.007-.074.012-.148.014-.22.01-.245-.25-.39-.472-.283-1.671.805-2.7 1.089-4.068 1.202h-3.222c.124 2.291-.48 2.598-1.304 2.972z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={11.159}
          y1={14.237}
          x2={13.68}
          y2={19.431}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#20CC86" />
          <Stop offset={1} stopColor="#20CCC2" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
