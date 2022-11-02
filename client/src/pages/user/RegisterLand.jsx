import { redirect } from "react-router-dom";

// page with a form to register land
function RegisterLand() {

  return <div style={{marginTop:"6rem"}} class=" container d-flex justify-content-center ">
    <div class="my-5" >
    <form class="well " action=" " method="post" id="contact_form">
      <fieldset>
      <legend>Land Registration</legend>

        

        <div class="form-group">
          <label class="col-md-4 control-label">Address</label>
          <div class="col-md-12 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
              <input name="address" placeholder="Address" class="form-control" type="text" />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-4 control-label">Zip Code</label>
          <div class="col-md-12 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
              <input name="zip" placeholder="Zip Code" class="form-control" type="text" />
            </div>
          </div>
        </div>


        <div class="form-group">
          <label class="col-md-4 control-label">City</label>
          <div class="col-md-12 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
              <input name="city" placeholder="city" class="form-control" type="text" />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-4 control-label">State</label>
          <div class="col-md-12 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
              <input name="city" placeholder="state" class="form-control" type="text" />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-12 control-label">Land Type</label>
          <div class="col-md-12 selectContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
              <select name="state" class="selectpicker" >

                <option>Urban/Built-up Land</option>
                <option>Agricultural Land</option>
                <option >RangeLand</option>
                <option >Forest Land</option>
                <option >Water Areas</option>
                <option >WetLand</option>
                <option >Barren Land</option>
                <option >Tundra</option>
                <option >Perennial Snow or Ice</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-6">Submit Documents</label>
          <div class="col-md-12 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
              <input name="document" class="form-control" type="file" />
            </div>
          </div>
        </div>
        <br></br>

        <div class="form-group ">
          <label class="col-md-4 control-label"></label>
          <div class="col-md-12 d-flex justify-content-center">
            <button type="submit" class="btn btn-warning " >Submit<span class="glyphicon glyphicon-send"></span></button>
          </div>
        </div>

      </fieldset>
    </form>
    </div>
  </div>


}
export default RegisterLand;
