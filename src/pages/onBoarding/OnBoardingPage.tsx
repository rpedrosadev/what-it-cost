import { InitialBalance } from "./InitialBalance";

export const OnBoardingPage = () => {
  return (
    <main className="flex flex-col gap-4 max-w-lg mx-auto p-4">
      <h1 className="font-bold">Configuración inicial</h1>
      {/* {children} */}
      <InitialBalance />
    </main>
  );
};
