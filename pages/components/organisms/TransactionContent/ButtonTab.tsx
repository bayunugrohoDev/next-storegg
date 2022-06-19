import cx from 'classname';

interface ButtonProps {
    title : string;
    active : boolean;
    onClick : () => void;
}
export default function ButtonTab(props : ButtonProps) {
  const { title, active, onClick } = props;

  const statusClass = cx({
    'btn btn-status rounded-pill text-sm  me-3': true,
    'btn-active': active,
  });
  return (
    <button type="button" onClick={onClick} className={statusClass}>
      {title}
    </button>
  );
}
