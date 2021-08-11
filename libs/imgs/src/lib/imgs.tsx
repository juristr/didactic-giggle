import { useEffect, useState } from 'react';
import './imgs.module.css';

export interface ImgsProps {
  imageName: string;
}

export function Imgs(props: ImgsProps) {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cleanedSvgName = props.imageName
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLocaleLowerCase();
      const topicSvgIcon = await import(`./${cleanedSvgName}.svg`);
      setIcon(topicSvgIcon.default);
    };
    fetchData();
  }, [props.imageName]);

  return (
    <div>
      <h1>Lazy Image</h1>
      <img src={icon} alt="" />
    </div>
  );
}

export default Imgs;
