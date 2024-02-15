// import { useState } from "react";

// export default function Button({ value, onTrack, children }) {
//   return (
//     <button onClick={onTrack}>
//       {children}
//       {value}
//     </button>
//   );
// }

// import { useEffect } from "react";

// export const Modal = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>Modal</div>;
// };

// export const CustomButton = ({ message }) => {
//   return <button onClick={() => alert(message)}></button>;
// };
// import { useState } from "react";
// export const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// export const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };
