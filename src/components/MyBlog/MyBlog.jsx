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
        <p>
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
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </p>
      </div>
    </>
  );
};

export default MyBlog;
