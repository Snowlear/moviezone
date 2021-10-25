export default function Form({ children, styles, onSubmit }: FormProps) {
  return (
    <form className={styles} onSubmit={(e) => onSubmit(e)}>
      {children}
    </form>
  );
}

interface FormProps {
  children: any;
  onSubmit: Function;
  styles?: string;
}
