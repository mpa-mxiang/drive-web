import React from 'react';
import Table from 'react-bootstrap/Table';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import Calendar from './Calendar';

const Packages = () => {
  return (

    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Course Packages</th>
            <th>Bronze<br></br><small>HST included</small></th>

            <th>Sliver<br></br><small>HST included</small></th>
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
            <td><del>740</del>
              <p>640</p>
            </td>
            <td><del>925</del>
              <p>775</p></td>
          </tr>
          <tr>
            <td>Register to drive at your own schedule/time</td>
            <td>            <a href="/Calendar" class="btn btn-primary fullwidth text-left">
              <i class="fa fa-shopping-cart"></i>
              Register Online
            </a></td>
            <td>            <a href="/Calendar" class="btn btn-primary fullwidth text-left">
              <i class="fa fa-shopping-cart"></i>
              Register Online
            </a></td>
          </tr>
        </tbody>

      </Table>
    </div >



  );
};

export default Packages;
