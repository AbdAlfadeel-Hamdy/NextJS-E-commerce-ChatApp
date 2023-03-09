const Form = ({ children, submitHandler }) => {
  return (
    <form
      onSubmit={submitHandler}
      className="bg-blue-600 flex flex-col gap-4 py-4 md:py-8 px-8 md:px-16 rounded-sm text-white md:w-1/2 lg:w-1/3"
    >
      {children}
    </form>
  );
};

export default Form;
