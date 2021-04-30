import classes from "./EditPencil.module.css";

export default function EditPencil() {
  return (
    <div className={classes.edit}>
      <img
        className={classes.pencil}
        src="/assets/icons/pencil.svg"
        alt="edit"
      />
    </div>
  );
}
