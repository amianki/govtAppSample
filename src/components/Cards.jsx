
const Cards = () => {
  return (
    <>
      <div className="max-w-2xl mx-14 my-8">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
        </div>
        <button class="py-2 px-4 my-4 bg-transparent text-indigo-600 font-semibold border border-indigo-600 rounded hover:bg-cyan-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
        Button
      </button>
      </div>
      
    </>
  );
};

export default Cards;
