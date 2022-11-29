import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";
const Blog = () => {
  return (
    <div className="h-[100vh]">
      <div className="bacg-img flex justify-center items-center bg-cover bg-center">
        <h1 className="text-5xl text-secondary">
          <span className="">Blog</span>
        </h1>
      </div>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    What are the different ways to manage a state in a React
                    application?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <span>
                    There are four main types of state you need to properly
                    manage in your React apps:
                    <ul class="list-disc pl-10">
                      <li>Local state</li>
                      <li>Global state</li>
                      <li>Server state</li>
                      <li>URL state</li>
                    </ul>
                    <p>Let's cover each of these in detail:</p>
                    <p>
                      {" "}
                      <span className="text-xl font-bold">
                        Local (UI) state{" "}
                      </span>{" "}
                      – Local state is data we manage in one or another
                      component.
                    </p>
                    <p>
                      Local state is most often managed in React using the
                      useState hook.
                      <br />
                      For example, local state would be needed to show or hide a
                      modal component or to track values for a form component,
                      such as form submission, when the form is disabled and the
                      values of a form’s inputs.
                    </p>
                  </span>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>How does prototypical inheritance work?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <span>
                    <img
                      className="float-right w-1/2"
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png"
                      alt=""
                    />{" "}
                    <p>
                      {" "}
                      Every object with its methods and properties contains an
                      internal and hidden property known as [[Prototype]]. The
                      Prototypal Inheritance is a feature in javascript used to
                      add methods and properties in objects. It is a method by
                      which an object can inherit the properties and methods of
                      another object. Traditionally, in order to get and set the
                      [[Prototype]] of an object, we use Object.getPrototypeOf
                      and Object.setPrototypeOf. Nowadays, in modern language,
                      it is being set using __proto__.
                    </p>
                  </span>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    What is a unit test? Why should we write unit tests?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <img
                    className="float-right w-1/2"
                    src="https://www.guru99.com/images/1/Unit-Testing.png"
                    alt=""
                  />
                  <p>
                    The main objective of unit testing is to isolate written
                    code to test and determine if it works as intended. Unit
                    testing is an important step in the development process,
                    because if done correctly, it can help detect early flaws in
                    code which may be more difficult to find in later testing
                    stages.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span> React vs. Angular vs. Vue?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <img
                    className="float-right w-1/2"
                    src="https://miro.medium.com/max/800/1*RtAQYp558yHr9UjZzDJmAg.jpeg"
                    alt=""
                  />
                  <p>
                    Vue provides higher customizability and hence is easier to
                    learn than Angular or React. Further, Vue has an overlap
                    with Angular and React with respect to their functionality
                    like the use of components. Hence, the transition to Vue
                    from either of the two is an easy option.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Blog;
