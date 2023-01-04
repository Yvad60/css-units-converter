export default function UnitInput({ name, label, suffix, placeholder }) {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="font-medium text-primary_chocolate text-lg"
      >
        {label}
      </label>
      <div className="border mt-1 border-primary_gray rounded w-[262px] flex items-center">
        <input
          name={name}
          type="number"
          placeholder={placeholder}
          className="px-3 py-2 outline-none w-full placeholder:text-[CFCBCF]"
        />
        <span className="px-4 py-3 bg-[#F5F5F5] text-[#868686] border-l border-primary_gray">
          {suffix}
        </span>
      </div>
    </div>
  );
}
