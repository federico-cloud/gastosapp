export const NewExpenseForm = ({ togglePopup }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg text-black w-[40%] relative">
        {/* Botón para cerrar */}
        <button
          onClick={togglePopup}
          className="absolute text-xl text-gray-500 top-2 right-2 hover:text-turqo-500 hover:cursor-pointer"
        >
          ✖
        </button>

        {/* Contenido del Pop-Up */}
        <h2 className="text-xl font-bold">Agregar Gasto</h2>
        <p className="mt-2 text-gray-700">
          Ingresa los detalles de tu nuevo gasto.
        </p>

        {/* Botón Cerrar dentro del Pop-Up */}
        <button onClick={togglePopup} className="btn-secondary">
          Cerrar
        </button>
      </div>
    </div>
  );
};
