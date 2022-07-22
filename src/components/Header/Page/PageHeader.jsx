import TitleText from "../../Text/Title/TitleText";

const PageHeader = (props) => {
  const nbcols = (props.children !== undefined) ? (props.children.length !== undefined) ? props.children.length : 2 : 1;
  return (
    <div className={`grid grid-cols-${nbcols} p-4`}>
      <TitleText
        title={props.title}
      />
      <div className="align-middle p-4">
        {props.children}
      </div>
    </div>
  );
}

export default PageHeader;