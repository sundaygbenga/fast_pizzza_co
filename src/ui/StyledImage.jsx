import image from "../pizza/pizza-1.png";

// export default function PictureFrame() {
//   return (
//     <div className="relative mx-auto mb-9 w-full max-w-md">
//       <img src={image} alt="pizza" className="h-auto w-full rounded-lg" />

//       <div className="absolute left-0 top-0 h-20 w-20 rounded-tl-full border-l-8 border-t-8 border-teal-500"></div>
//       <div className="absolute right-0 top-0 h-20 w-20 border-r-8 border-t-8 border-yellow-500"></div>
//       <div className="absolute bottom-0 left-0 h-20 w-20 border-b-8 border-l-8 border-teal-500"></div>
//       <div className="absolute bottom-0 right-0 h-20 w-20 border-b-8 border-r-8 border-yellow-500"></div>
//     </div>
//   );
// }

const PictureFrame = () => {
  return (
    <div className="relative mx-auto mb-8 w-full max-w-lg">
      <img src={image} alt="pizza" className="h-auto w-full rounded-lg" />

      {/* Top Left Corner */}
      <div className="absolute left-0 top-0 h-16 w-16 rounded-t-lg border-l-8 border-t-8 border-teal-500 bg-transparent"></div>
      <div className="absolute left-0 top-0 h-8 w-8 bg-stone-100"></div>

      {/* Top Right Corner */}
      <div className="absolute right-0 top-0 h-16 w-16 border-r-8 border-t-8 border-yellow-500 bg-transparent"></div>
      <div className="absolute right-0 top-0 h-8 w-8 bg-stone-100"></div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-0 left-0 h-16 w-16 rounded-bl-[30%] border-b-8 border-l-8 border-teal-500 bg-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-8 w-8 rounded-bl-[30%] border-green-400 bg-stone-100"></div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 h-16 w-16 border-b-8 border-r-8 border-yellow-500 bg-transparent"></div>
      <div className="absolute bottom-0 right-0 h-8 w-8 bg-stone-100"></div>
    </div>
  );
};

export default PictureFrame;
