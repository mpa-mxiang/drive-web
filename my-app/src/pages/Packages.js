import React from 'react';
import Table from 'react-bootstrap/Table';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';

const Packages = () => {
  return (

    <div>
      <br></br>
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
      <br></br>
      <div class="container">
        <h1>Both prices includes:</h1>
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <p>Each In-Car Session is at least 60 minutes
              <br></br>
              One-on-one In-Car Training
              <br></br>
              Certified Online through MTO<br></br>
              <small>(for road test & insurance reduction)</small>
            </p>
          </div>
          <div class="col-md-6 col-xs-12">
            <p>
              Free Home, Work or School Pickup for In-Car Lessons<br></br>
              <small>(for road test & insurance reduction)</small>
              <br></br>
              Certificate of Completion<br></br>
              <small>(sent by email)</small>
              <br></br>
              Road Test Booking<br></br>
              <small>(optional)</small>
            </p>
          </div>
        </div>
        <br></br>
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th class="text-center">Price</th>
                <th class="text-center">Package</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>
                  <h4>$50.00 (HST included)</h4>
                </td>
                <td>
                  <h4>One Hour Freeway Driving Lesson</h4>
                </td>
                <td>
                  Call +1(226)972-6161 to Register
                </td>
              </tr>
              <tr>
                <td>
                  <h4>$90.00 (HST included)</h4>
                </td>
                <td>
                  <h4>Two Hours Freeway Driving Lesson</h4>
                </td>
                <td>
                  Call +1(226)972-6161 to Register
                </td>
              </tr>

              <tr>
                <td>
                  <h4>$190.00 (HST included)</h4>
                </td>
                <td>
                  <h4>G2 Exit Test</h4>
                  <p>Two hours in-car training plus use of instructor's vehicle for the road test. </p>
                </td>
                <td>
                  Call +1(226)972-6161 to Register
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br></br>
    </div >



  );
};

export default Packages;
