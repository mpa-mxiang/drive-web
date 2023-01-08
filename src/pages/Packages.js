import React from 'react';
import Table from 'react-bootstrap/Table';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import './Packages.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/about">
    Packages
  </Link>,
];

const Packages = () => {
  return (
    <div>
      <div className="p-4 text-center">
        <Stack>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      <br></br>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Course Packages</th>
            <th>
              Bronze<br></br>
              <small>HST included</small>
            </th>

            <th>
              Sliver<br></br>
              <small>HST included</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hours of in-car training</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Hours of in-className teaching</td>
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
            <td>
              <HiXCircle />
            </td>
            <td>
              <HiCheckCircle />
            </td>
          </tr>
          <tr>
            <td>Practice before test</td>
            <td>
              <HiXCircle />
            </td>
            <td>
              <HiCheckCircle />
            </td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>
              <del>740</del>
              <td>640</td>
            </td>
            <td>
              <del>925</del>
              <td>775</td>
            </td>
          </tr>
          <tr>
            <td>Register to drive at your own schedule/time</td>
            <td>
              {' '}
              <a href="/Booking">Register Online</a>
            </td>
            <td>
              {' '}
              <a href="/Booking">Register Online</a>
            </td>
          </tr>
        </tbody>
      </Table>
      <br></br>
      <div className="container">
        <h1>Both prices includes:</h1>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <p>
              Each In-Car Session is at least 60 minutes
              <br></br>
              One-on-one In-Car Training
              <br></br>
              Certified Online through MTO<br></br>
              <small>(for road test & insurance reduction)</small>
            </p>
          </div>
          <div className="col-md-6 col-xs-12">
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
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center">Private/Individual Package</th>
                <th className="text-center">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4>One Hour Freeway Driving Lesson</h4>
                </td>
                <td>
                  <h4>$50.00 (HST included)</h4>
                </td>
                <td>Call +1(226)972-6161 to Register</td>
              </tr>
              <tr>
                <td>
                  <h4>Two Hours Freeway Driving Lesson</h4>
                </td>
                <td>
                  <h4>$90.00 (HST included)</h4>
                </td>
                <td>Call +1(226)972-6161 to Register</td>
              </tr>
              <tr>
                <td>
                  <h4>G2 Road Test with a refresher lesson</h4>
                  <p>5 hours of driving lessons plus a cars for the test. </p>
                </td>
                <td>
                  <h4>Contact us for pricing</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>G2 Exit Test</h4>
                  <p>
                    Two hours in-car training plus use of instructor's vehicle
                    for the road test.{' '}
                  </p>
                </td>
                <td>
                  <h4>$190.00 (HST included)</h4>
                </td>
                <td>Call +1(226)972-6161 to Register</td>
              </tr>
              <tr>
                <td>
                  <h4>G Road Test with a refresher lesson</h4>
                </td>
                <td>
                  <h4>Contact us for pricing</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Packages;
