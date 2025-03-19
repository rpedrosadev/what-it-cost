import "./App.css";
// import { Movement } from "./components/Movement";
import { OnBoardingPage } from "./pages/onBoarding/OnBoardingPage";

// const movements = [
//   {
//     date: "27/02/2025",
//     imgSrc:
//       "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
//     name: "Netflix",
//     type: "income",
//     monetaryTotal: "34678,23€",
//     monetaryUpdate: "-19,99€",
//   },
//   {
//     date: "27/02/2025",
//     imgSrc: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000",
//     name: "$100 for the new MacBook",
//     type: "cost",
//     monetaryTotal: "34578,23€",
//     monetaryUpdate: "-€100",
//   },
// ];

function App() {
  return (
    // <div className="m-4 flex flex-col gap-4">
    //   {movements.map((movement) => (
    //     <Movement
    //       key={movement.name}
    //       date={movement.date}
    //       imgSrc={movement.imgSrc}
    //       name={movement.name}
    //       type={movement.type as "income" | "cost"}
    //       monetaryTotal={movement.monetaryTotal}
    //       monetaryUpdate={movement.monetaryUpdate}
    //     />
    //   ))}
    // </div>
    <OnBoardingPage />
  );
}

export default App;
