const VisitorTypeButton = (props) =>{
  return (
    <div>
      <button className="bg-slate-100	p-2 text-xl border-slate-300 border-2 rounded-md" onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
}

export default VisitorTypeButton;