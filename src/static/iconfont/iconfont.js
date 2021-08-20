import { createGlobalStyle } from 'styled-components';

const Iconfont = createGlobalStyle`
  @font-face {
    font-family: "iconfont"; /* Project id 2755285 */
    src: url('iconfont.woff2?t=1629344837514') format('woff2'),
        url('iconfont.woff?t=1629344837514') format('woff'),
        url('iconfont.ttf?t=1629344837514') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default Iconfont;