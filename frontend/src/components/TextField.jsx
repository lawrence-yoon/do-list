function TextField({ name, value, onChange = () => {}, ...rest }) {
  return (
    <input
      className="w-auto text-gray-900 bg-gray-400 border border-transparent p-2 px-4 m-1 rounded-xl block flex-grow hover:border-white"
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      {...rest}
    />
  );
}

export default TextField;
