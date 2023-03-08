const UserForm = () => {
  return (
    <section className="h-96 flex justify-center items-center ">
      <form className="bg-blue-600 flex flex-col gap-4 items-center w-4/5 md:w-1/4 py-8 px-16 rounded-lg text-white">
        <h2 className="text-2xl">Join Us!</h2>
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="email" className="text-xl">
            Email Address
          </label>
          <input
            name="email"
            id="email"
            type="email"
            className="p-2 outline-none caret-blue-600 text-blue-600 text-lg rounded-md"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="p-2 outline-none caret-blue-600 text-blue-600 text-lg rounded-md"
          />
        </div>
        <div>
          <button>Log In</button>
        </div>
      </form>
    </section>
  );
};

export default UserForm;
