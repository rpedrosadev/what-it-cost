import { Input } from "../../components/Input";

export const InitialBalance = () => {
  return (
    <div role="group" aria-labelledby="balance-label">
      <label id="balance-label" htmlFor="balance" className="font-bold">
        Saldo total
      </label>
      <p className="text-sm text-muted-foreground mt-1">
        Es la cantidad total de dinero disponible en tu cuenta. Representa lo
        que tienes después de ingresos y gastos. Asegúrate de revisarlo para
        controlar tus finanzas.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("oh jeez");
        }}
        className="mt-4"
      >
        <Input
          type="number"
          id="balance"
          name="balance"
          placeholder="Introduce tu saldo actual"
          aria-describedby="balance-description"
          required
          startAdornment={<span className="text-muted-foreground">€</span>}
        />

        <div className="flex justify-end mt-4">
          <button
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
            type="submit"
            aria-label="Guardar saldo inicial"
            // disabled={true}
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};
