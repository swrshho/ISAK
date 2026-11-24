const ThemeToggle = () => {
  return (
    <button
      type="button"
      aria-label="تغییر تم"
      className="inline-flex size-10 items-center justify-center gap-2 rounded-lg border border-gray-200 hover:bg-gray-50 sm:w-auto sm:px-3"
    >
      <span aria-hidden="true">◐</span>
      <span className="hidden text-sm sm:inline">تغییر تم</span>
    </button>
  );
};

export default ThemeToggle;
