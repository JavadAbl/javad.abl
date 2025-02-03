import React, {
  useEffect,
  useState,
  CSSProperties,
  HTMLAttributes,
} from "react";

/* interface ColorChangingTextProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  colors?: string[];
  changeInterval?: number;
  startOffset?: number; // New prop for start offset
  style?: CSSProperties;
  className?: string;
} */

const ColorChangingText /* : React.FC<ColorChangingTextProps> */ = ({
  text,
  colors,
  changeInterval = 3000,
  startOffset = Math.floor(Math.random() * 4000), // Default to random between 0 and 4000 ms
  style,
  className,
  ...rest
}) => {
  /* const defaultColors = [
    "#1f51ff", // Neon Blue
    "#0ff0fc", // Electric Cyan
    "#bc13fe", // Neon Purple
    "#8a2be2", // Proton Purple
    "#ff44cc", // Neon Pink
    "#ea00ff", // Neon Magenta
    "#ff1493", // Plastic Pink
    "#fff01f", // Neon Yellow
    "#e7ee4f", // Absinthe
    "#dfff00", // Chartreuse Yellow
    "#ff3131", // Neon Red
    "#ff5e00", // Electric Orange
    "#39ff14", // Neon Green
    "#7fff00", // UFO Green
    "#ccff00", // Electric Lime
  ]; */
  const defaultColors = [
    "#FF3131", // Neon Red
    "#FF5E00", // Electric Orange
    "#FFAA00", // Vivid Orange
    "#FFF01F", // Neon Yellow
    "#DFFF00", // Chartreuse Yellow
    "#39FF14", // Neon Green
    "#00FF00", // Laser Green
    "#7FFF00", // UFO Green
    "#CCFF00", // Electric Lime
    "#0FF0FC", // Electric Cyan
    "#1F51FF", // Neon Blue
    "#3A0CA3", // Deep Neon Blue
    "#8A2BE2", // Proton Purple
    "#BC13FE", // Neon Purple
    "#EA00FF", // Neon Magenta
    "#FF44CC", // Hot Neon Pink
    "#FF1493", // Plastic Pink
    "#FB00FF", // Hyper Pink
    "#FF10F0", // Shocking Pink
  ];

  const colorArray = colors || defaultColors;
  const [currentColor, setCurrentColor] = useState(colorArray[0]);
  // const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      /*  setColorIndex((prevIndex) => (prevIndex + 1) % colorArray.length);
      setCurrentColor(colorArray[colorIndex]); */

      const randomIndex = Math.floor(Math.random() * colorArray.length);
      setCurrentColor(colorArray[randomIndex]);
    }, changeInterval);

    const timeout = setTimeout(() => {
      setCurrentColor(colorArray[0]); // Set initial color after startOffset
    }, startOffset);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [colorArray, changeInterval, startOffset]);

  return (
    <div
      style={{ color: currentColor, transition: "color 0.5s", ...style }}
      className={className}
      {...rest}
    >
      {text}
    </div>
  );
};

export default ColorChangingText;
