import './imgs.module.css';
import nxLogo from './nx-logo-white.svg';

/* eslint-disable-next-line */
export interface ImgsProps {}

export function Imgs(props: ImgsProps) {
  return (
    <div>
      <h1>Welcome to Imgs!</h1>
      <img src={nxLogo} />
    </div>
  );
}

export default Imgs;
