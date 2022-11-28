import React from "react";
const Blog = () => {
  return (
    <div className="H-100vh">
      <div className="bacg-img flex justify-center items-center bg-cover bg-center">
        <h1 className="text-5xl text-white">
          <span className="">Blog</span>
        </h1>
      </div>
      <div className="p-5 w-full flex justify-center">
        <div className="md:w-1/2 w-10/12">
          <div
            tabIndex={0}
            className="  text-[#db7208] collapse collapse-plus border border-base-300 bg-base-300 rounded-box shadow-lg "
          >
            <div className="collapse-title text-xl font-medium">
              Difference between sql and nosql ?
            </div>
            <div className="collapse-content">
              <p className="text-white">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).{" "}
                <samp className="font-semibold">
                  NoSQL is a class of DBMs that are non-relational and generally
                  do not use SQL
                </samp>
              </p>

              <ul class="list-disc mx-3 my-2 text-gray-300">
                <li>
                  SQL databases are relational, NoSQL databases are
                  non-relational.
                </li>
                <li>
                  SQL databases use structured query language and have a
                  predefined schema. NoSQL databases have dynamic schemas for
                  unstructured data.
                </li>
                <li>
                  SQL databases are vertically scalable, while NoSQL databases
                  are horizontally scalable.
                </li>
                <li>
                  SQL databases are table-based, while NoSQL databases are
                  document, key-value, graph, or wide-column stores.
                </li>
                <li>
                  SQL databases are better for multi-row transactions, while
                  NoSQL is better for unstructured data like documents or JSON.
                </li>
              </ul>
            </div>
          </div>
          {/* 2 */}
          <div
            tabIndex={0}
            className="  text-[#db7208] collapse collapse-plus border border-base-300 bg-base-300 rounded-box shadow-lg mt-5 "
          >
            <div className="collapse-title text-xl font-medium">
              What is JWT, and how does it work?
            </div>
            <div className="collapse-content">
              <p className="text-white">
                JSON Web Token (JWT) is{" "}
                <samp className="font-semibold">
                  an open standard (RFC 7519) that defines a compact and
                  self-contained way for securely transmitting information
                  between parties as a JSON object.
                </samp>{" "}
                This information can be verified and trusted because it is
                digitally signed.
              </p>
              <p className="text-white mt-1">
                JSON Web Token is an open industry standard used to share
                information between two entities, usually a client (like your
                app’s frontend) and a server (your app’s backend).
              </p>

              <p className="text-white mt-1">
                They contain JSON objects which have the information that needs
                to be shared. Each JWT is also signed using cryptography
                (hashing) to ensure that the JSON contents (also known as JWT
                claims) cannot be altered by the client or a malicious party.
              </p>
              <h1 className="text-xl">A JWT contains three parts:</h1>
              <ul class="list-disc mx-3 my-2 text-gray-300">
                <li>
                Header: Consists of two parts:
                <ul className="list-disc px-3">
                  <li>The signing algorithm that’s being used.</li>
                  <li>The type of token, which, in this case, is mostly “JWT”.</li>
                </ul>
                </li>
                <li>
                Payload: The payload contains the claims or the JSON object.
                </li>
                <li>
                Signature: A string that is generated via a cryptographic algorithm that can be used to verify the integrity of the JSON payload.

                </li>
              </ul>
            </div>
          </div>
          {/* 3 */}
          <div
            tabIndex={0}
            className="  text-[#db7208] collapse collapse-plus border border-base-300 bg-base-300 rounded-box shadow-lg mt-5 "
          >
            <div className="collapse-title text-xl font-medium">
            What is the difference between javascript and NodeJS?
            </div>
            <div className="collapse-content">
              <p className="text-white">
              JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                <samp className="font-semibold">
                JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language
                </samp>
              </p>

           
            </div>
          </div>
          {/*  4*/}
          <div
            tabIndex={0}
            className="  text-[#db7208] collapse collapse-plus border border-base-300 bg-base-300 rounded-box shadow-lg mt-5 "
          >
            <div className="collapse-title text-xl font-medium">
            How does NodeJS handle multiple requests at the same time?
            </div>
            <div className="collapse-content">
              <p className="text-white">
              
                <samp className="font-semibold">
                NodeJS receives multiple client requests and places them into EventQueue
                </samp>
                NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
              </p>
              <p className="text-white">
              
                <samp className="font-semibold">
                We know NodeJS application is single-threaded.
                </samp>
                 Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.
              </p>

           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
