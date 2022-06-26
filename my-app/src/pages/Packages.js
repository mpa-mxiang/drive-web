import React from 'react';
import Table from 'react-bootstrap/Table';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';

const Packages = () => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Course Packages</th>
            <th>Silver</th>
            <th>Gold</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>Hours of in-car training</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Hours of in-class teaching</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Hours of home study</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Use of instructors Vehicle for road test</td>
            <td><HiXCircle /></td>
            <td><HiCheckCircle /></td>
          </tr>
          <tr>
            <td>Practice before test</td>
            <td><HiXCircle /></td>
            <td><HiCheckCircle /></td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>650</td>
            <td>850</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Packages;
