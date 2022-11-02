// page with a form to register land
function RegisterLand() {
  return (<form action="" id="wizard" role="application" class="wizard clearfix"><div class="steps clearfix"><ul role="tablist"><li role="tab" aria-disabled="false" class="first current" aria-selected="true"><a id="wizard-t-0" href="#wizard-h-0" aria-controls="wizard-p-0"><span class="current-info audible">current step: </span><span class="number">1.</span> </a></li><li role="tab" aria-disabled="false"><a id="wizard-t-1" href="#wizard-h-1" aria-controls="wizard-p-1"><span class="number">2.</span> </a></li><li role="tab" aria-disabled="false" class="last"><a id="wizard-t-2" href="#wizard-h-2" aria-controls="wizard-p-2"><span class="number">3.</span> </a></li></ul></div><div class="content clearfix">

  <h2 id="wizard-h-0" tabindex="-1" class="title current"></h2>
  <section id="wizard-p-0" role="tabpanel" aria-labelledby="wizard-h-0" class="body current" aria-hidden="false">
  <div class="inner" />
  <div class="image-holder">
  <img src="images/form-wizard-1.jpg" alt="" />
  </div>
  <div class="form-content">
  <div class="form-header">
  <h3>Registration</h3>
  </div>
  <p>Please fill with your details</p>
  <div class="form-row">
  <div class="form-holder">
  <input type="text" placeholder="First Name" class="form-control" />
  </div>
  <div class="form-holder">
  <input type="text" placeholder="Last Name" class="form-control" />
  </div>
  </div>
  <div class="form-row">
  <div class="form-holder">
  <input type="text" placeholder="Your Email" class="form-control" />
  </div>
  <div class="form-holder">
  <input type="text" placeholder="Phone Number" class="form-control" />
  </div>
  </div>
  <div class="form-row">
  <div class="form-holder">
  <input type="text" placeholder="Age" class="form-control" />
  </div>
  <div class="form-holder" style="align-self: flex-end; transform: translateY(4px);">
  <div class="checkbox-tick">
  <label class="male">
  <input type="radio" name="gender" value="male" checked=""/> Male<br/>
  <span class="checkmark"></span>
  </label>
  <label class="female">
  <input type="radio" name="gender" value="female"> Female<br >
  <span class="checkmark"></span>
  </label>
  </div>
  </div>
  </div>
  <div class="checkbox-circle">
  <label>
  <input type="checkbox" checked=""> Nor again is there anyone who loves or pursues or desires to obtaini.
  <span class="checkmark"></span>
  </label>
  </div>
  </div>
  </div>
  </section>
  
  <h2 id="wizard-h-1" tabindex="-1" class="title"></h2>
  <section id="wizard-p-1" role="tabpanel" aria-labelledby="wizard-h-1" class="body" aria-hidden="true" style="display: none;">
  <div class="inner">
  <div class="image-holder">
  <img src="images/form-wizard-2.jpg" alt="" />
  </div>
  <div class="form-content">
  <div class="form-header">
  <h3>Registration</h3>
  </div>
  <p>Please fill with additional info</p>
  <div class="form-row">
  <div class="form-holder w-100">
  <input type="text" placeholder="Address" class="form-control" />
  </div>
  </div>
  <div class="form-row">
  <div class="form-holder">
  <input type="text" placeholder="City" class="form-control" />
  </div>
  <div class="form-holder">
  <input type="text" placeholder="Zip Code" class="form-control" />
  </div>
  </div>
  <div class="form-row">
  <div class="select">
  <div class="form-holder">
  <div class="select-control">Your country</div>
  <i class="zmdi zmdi-caret-down"></i>
  </div>
  <ul class="dropdown" style="display: none;">
  <li rel="United States">United States</li>
  <li rel="United Kingdom">United Kingdom</li>
  <li rel="Viet Nam">Viet Nam</li>
  </ul>
  </div>
  <div class="form-holder"></div>
  </div>
  </div>
  </div>
  </section>
  
  <h2 id="wizard-h-2" tabindex="-1" class="title"></h2>
  <section id="wizard-p-2" role="tabpanel" aria-labelledby="wizard-h-2" class="body" aria-hidden="true" style="display: none;">
  <div class="inner">
  <div class="image-holder">
   <img src="images/form-wizard-3.jpg" alt="" />
  </div>
  <div class="form-content">
  <div class="form-header">
  <h3>Registration</h3>
  </div>
  <p>Send an optional message</p>
  <div class="form-row">
  <div class="form-holder w-100">
  <textarea name="" id="" placeholder="Your messagere here!" class="form-control" / style="height: 99px;"></textarea>
  </div>
  </div>
  <div class="checkbox-circle mt-24">
  <label>
  <input type="checkbox" checked=""> Please accept <a href="#">terms and conditions ?</a>
  <span class="checkmark"></span>
  </label>
  </div>
  </div>
  </div>
  </section>
  </div><div class="actions clearfix"><ul role="menu" aria-label="Pagination"><li class="disabled" aria-disabled="true"><a href="#previous" role="menuitem">Backward</a></li><li aria-hidden="false" aria-disabled="false"><a href="#next" role="menuitem">Forward</a></li><li aria-hidden="true" style="display: none;"><a href="#finish" role="menuitem">Submit</a></li></ul></div></form>);
}
export default RegisterLand;
