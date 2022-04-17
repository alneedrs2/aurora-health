import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <h3 className="mb-4">
        Question 1: What are the difference between authorization and
        authentication?
      </h3>
      <h5>Answer:</h5>
      <Table className="mb-3" striped bordered>
        <thead>
          <tr>
            <th>Authentication</th>
            <th>Authorization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Authentication verifies who the user is.</td>
            <td>
              1. Authorization determines what resources a user can access.
            </td>
          </tr>
          <tr>
            <td>
              2. Authentication works through passwords, one-time pins,
              biometric information, and other information provided or entered
              by the user.
            </td>
            <td>
              2. Authorization works through settings that are implemented and
              maintained by the organization.
            </td>
          </tr>
          <tr>
            <td>
              3. Authentication is visible to and partially changeable by the
              user.
            </td>
            <td>
              3. Authorization isn’t visible to or changeable by the user.
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="mb-3">
        <h3>
          Question 2: Why are you using firebase? What other options do you have
          to implement authentication?
        </h3>
        <h5>Answer:</h5>
        <p>
          There are many uses of Firebase. Some of them are, <br />
          1. Incredibly Built-In Analytics. <br />
          2. Authentication: Have a lot less friction with acclaimed
          authentication. <br />
          3. Hosting: Deliver web content faster. <br />
          4. Remote Configuration: Customize your app on the go. <br />
          5. Storage: File storing made easy.
        </p>
        <p>
          The other options to implement authentication are,
          <ul>
            <li>Cookie-Based authentication</li>
            <li>Token-Based authentication</li>
            <li>Third party access(OAuth, API-token)</li>
            <li>OpenId</li>
            <li>SAML</li>
          </ul>
        </p>
      </div>
      <div>
        <h3>
          Question 3: What other services does firebase provide other than
          authentication?
        </h3>
        <p>
          Answer: Yes, Firebase also provides other services. <br />
          Firebase provides tools for tracking analytics, reporting and fixing
          app crashes, creating marketing and product experiment. Firebase also
          services us Analytics, Cloud messaging, Realtime database,
          Crashlytics, Performance, Test lab and so on.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
