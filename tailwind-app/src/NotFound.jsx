function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-2">Página no encontrada</p>
      <p className="text-gray-500">La página que buscas no existe.</p>
    </div>
  );
}
export default NotFound;
