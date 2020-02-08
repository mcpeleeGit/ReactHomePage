import React from 'react';

function App() {
  return (
      <div class="container theme-showcase" role="main">
          <div class="jumbotron">
              <h1>Theme example</h1>
              <p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
          </div>
          <div class="page-header">
              <h1>Labels</h1>
          </div>
          <h1>
              <span class="label label-default">Default</span>
              <span class="label label-primary">Primary</span>
              <span class="label label-success">Success</span>
              <span class="label label-info">Info</span>
              <span class="label label-warning">Warning</span>
              <span class="label label-danger">Danger</span>
          </h1>
          <h2>
              <span class="label label-default">Default</span>
              <span class="label label-primary">Primary</span>
              <span class="label label-success">Success</span>
              <span class="label label-info">Info</span>
              <span class="label label-warning">Warning</span>
              <span class="label label-danger">Danger</span>
          </h2>
          <h3>
              <span class="label label-default">Default</span>
              <span class="label label-primary">Primary</span>
              <span class="label label-success">Success</span>
              <span class="label label-info">Info</span>
              <span class="label label-warning">Warning</span>
              <span class="label label-danger">Danger</span>
          </h3>
          <h4>
              <span class="label label-default">Default</span>
              <span class="label label-primary">Primary</span>
              <span class="label label-success">Success</span>
              <span class="label label-info">Info</span>
              <span class="label label-warning">Warning</span>
              <span class="label label-danger">Danger</span>
          </h4>
          <h5>
              <span class="label label-default">Default</span>
              <span class="label label-primary">Primary</span>
              <span class="label label-success">Success</span>
              <span class="label label-info">Info</span>
              <span class="label label-warning">Warning</span>
              <span class="label label-danger">Danger</span>
          </h5>
          <h6>
              <span class="label label-default">Default</span>
              <span class="label label-primary">Primary</span>
              <span class="label label-success">Success</span>
              <span class="label label-info">Info</span>
              <span class="label label-warning">Warning</span>
              <span class="label label-danger">Danger</span>
          </h6>
          <p>
              <span class="label label-default">Default</span>
              <span class="label label-primary">Primary</span>
              <span class="label label-success">Success</span>
              <span class="label label-info">Info</span>
              <span class="label label-warning">Warning</span>
              <span class="label label-danger">Danger</span>
          </p>

          <div class="page-header">
              <h1>Badges</h1>
          </div>
          <p>
              <a href="#">Inbox <span class="badge">42</span></a>
          </p>
          <ul class="nav nav-pills" role="tablist">
              <li role="presentation" class="active"><a href="#">Home <span class="badge">42</span></a></li>
              <li role="presentation"><a href="#">Profile</a></li>
              <li role="presentation"><a href="#">Messages <span class="badge">3</span></a></li>
          </ul>

          <div class="page-header">
              <h1>Dropdown menus</h1>
          </div>
          <div class="dropdown theme-dropdown clearfix">
              <a id="dropdownMenu1" href="#" class="sr-only dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                  <li class="active" role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                  <li role="presentation" class="divider"></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
              </ul>
          </div>


          <div class="page-header">
              <h1>Navs</h1>
          </div>
          <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">Profile</a></li>
              <li role="presentation"><a href="#">Messages</a></li>
          </ul>
          <ul class="nav nav-pills" role="tablist">
              <li role="presentation" class="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">Profile</a></li>
              <li role="presentation"><a href="#">Messages</a></li>
          </ul>


          <div class="page-header">
              <h1>Navbars</h1>
          </div>


          <nav class="navbar navbar-default">
              <div class="container">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">Project name</a>
                  </div>
                  <div class="navbar-collapse collapse">
                      <ul class="nav navbar-nav">
                          <li class="active"><a href="#">Home</a></li>
                          <li><a href="#about">About</a></li>
                          <li><a href="#contact">Contact</a></li>
                          <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                              <ul class="dropdown-menu" role="menu">
                                  <li><a href="#">Action</a></li>
                                  <li><a href="#">Another action</a></li>
                                  <li><a href="#">Something else here</a></li>
                                  <li class="divider"></li>
                                  <li class="dropdown-header">Nav header</li>
                                  <li><a href="#">Separated link</a></li>
                                  <li><a href="#">One more separated link</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>


          <nav class="navbar navbar-inverse">
              <div class="container">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">Project name</a>
                  </div>
                  <div class="navbar-collapse collapse">
                      <ul class="nav navbar-nav">
                          <li class="active"><a href="#">Home</a></li>
                          <li><a href="#about">About</a></li>
                          <li><a href="#contact">Contact</a></li>
                          <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                              <ul class="dropdown-menu" role="menu">
                                  <li><a href="#">Action</a></li>
                                  <li><a href="#">Another action</a></li>
                                  <li><a href="#">Something else here</a></li>
                                  <li class="divider"></li>
                                  <li class="dropdown-header">Nav header</li>
                                  <li><a href="#">Separated link</a></li>
                                  <li><a href="#">One more separated link</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>


          <div class="page-header">
              <h1>Alerts</h1>
          </div>
          <div class="alert alert-success" role="alert">
              <strong>Well done!</strong> You successfully read this important alert message.
          </div>
          <div class="alert alert-info" role="alert">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
          </div>
          <div class="alert alert-warning" role="alert">
              <strong>Warning!</strong> Best check yo self, you're not looking too good.
          </div>
          <div class="alert alert-danger" role="alert">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>


          <div class="page-header">
              <h1>List groups</h1>
          </div>
          <div class="row">
              <div class="col-sm-4">
                  <ul class="list-group">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Morbi leo risus</li>
                      <li class="list-group-item">Porta ac consectetur ac</li>
                      <li class="list-group-item">Vestibulum at eros</li>
                  </ul>
              </div>
              <div class="col-sm-4">
                  <div class="list-group">
                      <a href="#" class="list-group-item active">
                          Cras justo odio
                </a>
                      <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
                      <a href="#" class="list-group-item">Morbi leo risus</a>
                      <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                      <a href="#" class="list-group-item">Vestibulum at eros</a>
                  </div>
              </div>
              <div class="col-sm-4">
                  <div class="list-group">
                      <a href="#" class="list-group-item active">
                          <h4 class="list-group-item-heading">List group item heading</h4>
                          <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                      </a>
                      <a href="#" class="list-group-item">
                          <h4 class="list-group-item-heading">List group item heading</h4>
                          <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                      </a>
                      <a href="#" class="list-group-item">
                          <h4 class="list-group-item-heading">List group item heading</h4>
                          <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                      </a>
                  </div>
              </div>
          </div>



          <div class="page-header">
              <h1>Panels</h1>
          </div>
          <div class="row">
              <div class="col-sm-4">
                  <div class="panel panel-default">
                      <div class="panel-heading">
                          <h3 class="panel-title">Panel title</h3>
                      </div>
                      <div class="panel-body">
                          Panel content
                </div>
                  </div>
                  <div class="panel panel-primary">
                      <div class="panel-heading">
                          <h3 class="panel-title">Panel title</h3>
                      </div>
                      <div class="panel-body">
                          Panel content
                </div>
                  </div>
              </div>
              <div class="col-sm-4">
                  <div class="panel panel-success">
                      <div class="panel-heading">
                          <h3 class="panel-title">Panel title</h3>
                      </div>
                      <div class="panel-body">
                          Panel content
                </div>
                  </div>
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <h3 class="panel-title">Panel title</h3>
                      </div>
                      <div class="panel-body">
                          Panel content
                </div>
                  </div>
              </div>
              <div class="col-sm-4">
                  <div class="panel panel-warning">
                      <div class="panel-heading">
                          <h3 class="panel-title">Panel title</h3>
                      </div>
                      <div class="panel-body">
                          Panel content
                </div>
                  </div>
                  <div class="panel panel-danger">
                      <div class="panel-heading">
                          <h3 class="panel-title">Panel title</h3>
                      </div>
                      <div class="panel-body">
                          Panel content
                </div>
                  </div>
              </div>
          </div>



          <div class="page-header">
              <h1>Wells</h1>
          </div>
          <div class="well">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>
       </div>
  );
}

export default App;
