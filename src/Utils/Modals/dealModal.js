import Swal from "sweetalert2";

const DealModal = ({ isActive, onCancel, data }) => {
  return (
    <>
      {isActive ? (
        <div className="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto">
          <div className="relative sm:w-1/4 md:w-1/2  lg:w-2/3 mx-2 sm:mx-auto mt-10 mb-24 opacity-100">
            <div className="relative  bg-gray-100 shadow-lg rounded-lg text-gray-900 z-20">
              <div
                className="w-full flex justify-center py-5"
                style={{ backgroundColor: "#fe692d" }}
              >
                <h1 className="text-3xl font-semibold text-white">
                  Tour {data ? data.TourName : "- -"}
                </h1>
              </div>
              <div className="w-full md:flex py-5">
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={data ? data.Photo : "- -"}
                    alt="tour"
                    className=" md:w-3/4"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="my-5">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      Tour:
                    </h1>
                    <p className="text-xl font-light text-gray-600">
                      {data ? data.TourName : "- -"}
                    </p>
                  </div>
                  <div className="my-5">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      Description:
                    </h1>
                    <p className="text-xl font-light text-gray-600">
                      {data ? data.Description : "- -"}
                    </p>
                  </div>
                  <div className="my-5">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      Schedule:
                    </h1>
                    <p className="text-xl font-light text-gray-600">
                      {data && data.schedule
                        ? `Daily from: ${data.schedule.from} to: ${data.schedule.to}`
                        : "- -"}
                    </p>
                  </div>
                  <div className="my-5">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      Price:
                    </h1>
                    <p className="text-xl font-light text-gray-600">
                      {data ? ` $ ${data.Price}` : "- -"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-end mt-4">
                <button
                  onClick={() => {
                    Swal.fire({
                      title: "Congratulations",
                      icon: "success",
                      text: "You got a great deal!!! check your email for more information",
                      confirmButtonText: "Ok",
                      confirmButtonColor: "green",
                    }).then((resp) => {
                      if (resp.isConfirmed) {
                        onCancel();
                      }
                    });
                  }}
                  type="button"
                  className="h-12 px-6 mr-10 mb-3 mt-4 text-lg  text-white transition-colors duration-150 bg-green-500 rounded focus:shadow-outline hover:bg-green-600"
                >
                  Book It
                </button>
                <button
                  type="button"
                  onClick={onCancel}
                  className="h-12 px-6 mr-10 mb-3 mt-4 text-lg  text-white transition-colors duration-150 bg-red-700 rounded focus:shadow-outline hover:bg-red-800"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DealModal;
