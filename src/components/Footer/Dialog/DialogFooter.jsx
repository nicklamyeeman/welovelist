const DialogFooter = (props) => {
  return (
    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
      {props.children}
    </div>
  );
}

export default DialogFooter;