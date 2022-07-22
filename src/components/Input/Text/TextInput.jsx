const TextInput = (props) => {
  return (
    <label>
      {props.label}
      <input
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.label}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
}

export default TextInput;