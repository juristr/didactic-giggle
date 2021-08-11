import nxLogo from './nxlogowhite.svg';

/* eslint-disable-next-line */
export interface NonLazyImgsProps {
  imageName: string;
}

export function NonLazyImgs() {
  return (
    <div>
      <h1>Non Lazy Img</h1>
      <img src={nxLogo} alt="" />
    </div>
  );
}

export default NonLazyImgs;
