import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "react-feather";

const User = ({
  open = true,
  large = false,
  closeModal,
  title,
  description,
  children,
}) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="inset-0 z-10 overflow-y-auto backdrop-filter backdrop-blur-md"
          onClose={closeModal}
        >
          <div
            className="min-h-screen px-2 bg-gray-900 bg-opacity-75 transition-opacity modal-wrapper"
            onClick={(event) => {
              if (event.target.classList?.contains("modal-wrapper")) {
                closeModal();
              }
            }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-400"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {large ? (
                <div className="fixed h-screen w-screen p-6 modal-wrapper">
                  <div className="flex flex-col m-auto max-w-3xl  p-6  h-full rounded shadow-2xl overflow-hidden text-left transition-all transform bg-white">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-bold leading-6 capitalize mb-5 text-gray-700 flex justify-between"
                    >
                      <span>{title}</span>
                      <span
                        className="cursor-pointer font-bold "
                        onClick={closeModal}
                      >
                        <X />
                      </span>
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-base mb-5 font-medium text-gray-600">
                        {description}
                      </p>
                    </div>
                    <div className="flex-auto flex flex-col overflow-y-scroll">
                      {children}this thia thi
                    </div>
                  </div>
                </div>
              ) : (
                <div className="block m-auto w-full max-w-2xl p-6 my-8 rounded shadow-2xl overflow-hidden text-left transition-all transform bg-white">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-500 text-3xl font-bold leading-6 capitalize mb-5"
                  >
                    <span
                      className="cursor-pointer text-sm font-bold"
                      onClick={closeModal}
                    >
                      <X />
                    </span>
                    <span className="flex justify-center">{title}</span>
                  </Dialog.Title>
                  <div className="gap-y-2">
                    <p className="mb-5 text-lg font-medium text-md text-center text-gray-600">
                      {description}
                    </p>
                  </div>
                  <div className="text-md">{children}</div>
                </div>
              )}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default User;
