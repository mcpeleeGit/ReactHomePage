import React from 'react';

function About() {
  return (
      <div class="container theme-showcase" role="main">
          <div class="jumbotron">
              <h1>Theme example</h1>
              <p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
          </div>

          <div class="page-header">
              <h1>Tables</h1>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <table class="table">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="col-md-6">
                  <table class="table table-striped">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>

          <div class="row">
              <div class="col-md-6">
                  <table class="table table-bordered">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td rowspan="2">1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@TwBootstrap</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="col-md-6">
                  <table class="table table-condensed">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>

  );
}

export default About;
