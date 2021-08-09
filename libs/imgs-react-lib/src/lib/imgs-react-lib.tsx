import './imgs-react-lib.module.css';
import nxLogo from './nx-logo-white.svg';

/* eslint-disable-next-line */
export interface ImgsReactLibProps {}

export function ImgsReactLib(props: ImgsReactLibProps) {
  return (
    <div>
      <h1>Welcome to ImgsReactLib!</h1>

      <img src={nxLogo} />
    </div>
  );
}

export default ImgsReactLib;
