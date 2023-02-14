import React from 'react'
import Table from './Table';

function TableView() {
  return (
    <div className="main">
    <div className="heading">Assignment Upload</div>
    <div className="container1">
      <div className="box">
        <div className="table-responsive">
          <table class="table table-dark table-striped">
            <thead>
              <tr className="tablesize1">
                <th scope="col">Sno</th>
                <th scope="col">Assignment</th>
                <th scope="col">Date</th>
                <th scope="col">Upload</th>
              </tr>
            </thead>
            <tbody>
              <Table sno="1" place="Assignment 1" date="16 may 2022"/>
              <Table sno="2" place="Assignment 2" date="28 may 2022" />
              <Table sno="3" place="Assignment 3" date="15 june 2022" />
              <Table sno="4" place="Assignment 4" date="25 june 2022" />
              <Table sno="5" place="Assignment 5" date="5 july 2022" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TableView
