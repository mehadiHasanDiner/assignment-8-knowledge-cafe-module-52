import React from "react";

const MyBlog = () => {
  return (
    <>
      <div className="px-2 xs:px-32 md:px-32">
        <h1 className="text-4xl font-bold text-center mt-24"> My Blog</h1>
        <hr className="border-1 my-4" />
        <p className="font-bold py-2">
          1. What are the differences between Props vs state?{" "}
        </p>
        <p className="text-justify">
          <span className="font-bold">Ans:</span> Props and State are both used
          to manage data in react but there some differences to them. There are
          as follow: state:
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="font-bold text-lg">
                <tr>
                  <th>Props</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <strong>Parent-to-Child: </strong> Props are mainly used for
                    passing data from a parent component to a child component.
                    So that, props are media that connect parent to child
                    components as like top to bottom. That is why props always
                    passes data unidirectional way.
                  </td>
                  <td>
                    <strong>Component-Internal: </strong>State is used for
                    managing data that is specific to a component and doesn't
                    need to be shared with other components. It's a way for a
                    component to keep track of its own data.
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>
                    <strong>Immutable:</strong> Props data are immutable or
                    read-only. Props are passed to a component from its parent,
                    and when it sets, they cannot be modified by the component
                    itself.
                  </td>
                  <td>
                    <strong> Mutable:</strong> State represents the internal
                    data or state of a component that can change over time. It
                    is mutable and can be modified using the setState method in
                    class components or the useState hook in functional
                    components.
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>
                    <strong>Function Parameters:</strong> Any data as well as
                    any function can be passed by props. In functional
                    components, props are passed as function parameters. In
                    class components, they are accessed via this.props.
                  </td>
                  <td>
                    <strong>Functional Component: </strong> State gives us two
                    things one is a value and a function. It generally refers to
                    data or properties that need to be tracking in an
                    application.{" "}
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="font-bold py-2">2. How does useState work? </p>
            <p className="text-justify">
              <strong>useState</strong> hook is a very common hook in react
              which is used to store and update any variable value on a
              component level. The reason why we would store the variable value
              inside the state is so that we can access those values without any
              sort of DOM manipulation which are not available in React JS.
            </p>

            <p className="font-bold py-2">
              3. What is the Purpose of useEffect other than fetching data?{" "}
            </p>
            <p className="text-justify">
              <strong>useEffect</strong> provides a flexible and powerful way to
              manage the side effects of your React components, whether they
              involve fetching data or performing other types of operations.
            </p>
            <p>1. Live filtering running on state change.</p>
            <p>2. Validating input field running on state change.</p>
            <p>
              3. Trigger animation on new array value running on state change.
            </p>
            <p>4. Update content running on props change.</p>

            <p className="font-bold py-2">4. How does React work? </p>
            <p className="text-justify mb-4">
              React is a JavaScript library for building user interfaces. It
              works by breaking the UI down into reusable components and
              updating the actual DOM using a virtual DOM and a process called
              reconciliation. React follows a one-way data flow model and
              provides hooks for managing state. Overall, React is a powerful
              and flexible tool for building complex, interactive UIs.
            </p>
          </div>
        </p>
      </div>
    </>
  );
};

export default MyBlog;
