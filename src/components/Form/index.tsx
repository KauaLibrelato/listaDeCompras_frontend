import './styles.css';

interface IForm {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children?: JSX.Element[] | JSX.Element;
}

export function Form({ onSubmit, children }: IForm) {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit(evt);
      }}
    >
      {children}
    </form>
  );
}
