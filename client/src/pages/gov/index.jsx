import { Link, Outlet } from "react-router-dom";
function index() {
  return (
    <div class="container emp-profile">
      <form method="post">
        <div class="row">
          <div class="col-md-4">Government Profile</div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>Kshiti Ghelani</h5>
              <h6>Web Developer and Designer</h6>
              <p class="proile-rating">
                RANKINGS : <span>8/10</span>
              </p>
              {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Timeline
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p>Government Profile</p>
              <Link to="approvedlands">Approved Lands</Link>
              <br />
              <Link to="buyingrequest">Buy Request</Link>
              <br />
              <Link to="landrequest">Land Request</Link>
              <br />
              <Link to="userrequest">User Request</Link>
              <br />
              <Link to="profile">Profile</Link>
            </div>
          </div>
          <div class="col-md-8">
            <Outlet />
          </div>
        </div>
      </form>
    </div>
  );
}
export default index;
