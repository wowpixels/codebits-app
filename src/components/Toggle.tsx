export default function Toggle(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <div className="inline-block relative w-64 mb-2">
      <label className="block font-bold">
        <input className="mr-2 leading-tight" type="checkbox" {...props} />
        <span className="text-sm">Show Line Numbers</span>
      </label>
    </div>
  );
}
