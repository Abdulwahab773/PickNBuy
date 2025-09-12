function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80  z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-indigo-600 rounded-full animate-spin">
        
      </div>
      <h1 className="mt-3 text-lg font-semibold">Please Wait...</h1>
      
    </div>
  );
}

export default Loader;
