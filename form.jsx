import React ,{usestate} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const reg_form = () => {
      
     const [fullName, setFullName]= usestate({
      Name:" ",
      lastname:" ",
      Age:" ",
      Gender:" ",
      admiYr:" ",
      Course:" ",
      Rank:" ",
      HsMarks:" ",
      Category:" ",
      depart:" ",
      Email:" ",
      coNo:" ",
      dipMar:" ",
      bachMar:" "
     });

     const inputEvent = (events)=>{
         const{value,name}= events.target;
         setFullName((prevalue)=>{
           return{
               ...prevalue,
               [name]:value,
           };
        };
           );

         };
    

     const onSubmits=(events)=>{
         events.preventDefault();
         alert("form submitted");
     };
      
    return( <>
<div className= "container">] <div className=" text-center mt-5 ">
        <h1>Bootstrap Contact Form</h1>
    </div>
    <div className="row ">
        <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                    <div className="container">
                        <form id="contact-form" role="form" onSubmit={onSubmits}>
                            <div className="controls">
                                <div  className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_name">Firstname *</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." value={fullName.Name} onChange={inputEvent} /> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_lastname">Lastname *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." value={fullName.lastname} onChange={inputEvent} /> </div>
                                    </div>
                                </div>

                                <div  className="row">
                                    <div className="col-md-4">
                                        <div className="form-group"> <label for="form_age">Age *</label> <input id="form_age" type="text" name="age" className="form-control" placeholder="Please enter your age *" required="required" data-error="Age is required." value={fullName.Age} onChange={inputEvent} /> </div>
                                    </div>
                                   
                                    <div className="col-md-4">
                                    <div className="form-group"> <label for="form_Gender">Gender *</label> <select id="form_gender" name="gender" className="form-control" required="required" data-error="Please specify your gender.">
                                                <option value="" selected disabled>--Select Your Gender--</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Others</option>
                                            </select> </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group"> <label for="form_admissionyear">Year of admission *</label> <input id="form_admissionyear" type="month" name="year_of_admission" className="form-control" placeholder="Please enter your year of admission " required="required" data-error="Admission year is required." /> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    
                                    <div className="col-md-4">
                                        <div className="form-group"> <label for="form_course">Please specify your Course *</label> <select id="form_course" name="course" className="form-control" required="required" data-error="Please specify your Course.">
                                                <option value="" selected disabled>--Select Your Course--</option>
                                                <option>M.Tech </option>
                                                <option>B.Tech + MBA (Integrated 5 yrs course)</option>
                                                <option>M.Tech+ B.Tech(Integrated 5 yrs course)</option>
                                                <option>B.Tech</option>
                                                <option>B.Sc </option>
                                                <option>M.Sc </option>
                                            </select> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group"> <label for="form_rank">Rank *</label> <input id="form_rank" type="number" name="rank" className="form-control" placeholder="Please enter your Rank *" required="required" data-error="Valid Rank is required." /> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group"> <label for="form_HSgrade">12th standard Grade *</label> <input id="form_HSgrade" type="number" name="HS_Grade" className="form-control" placeholder="Please enter your 12th Grade *" required="required" data-error="12th standard Grade is required." /> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_category">Please specify your Category *</label> <select id="form_category" name="category" className="form-control" required="required" data-error="Please specify your Category.">
                                                <option value="" selected disabled>--Select Your Category--</option>
                                                <option>General </option>
                                                <option>SC</option>
                                                <option>ST</option>
                                                <option>OBC</option>
                                                <option>E.W.C </option>
                                            </select> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_department">Please specify your Department *</label> <select id="form_department" name="dept" className="form-control" required="required" data-error="Please specify your Department/Branch.">
                                                <option value="" selected disabled>--Select Your Department--</option>
                                                <option>C.S.E</option>
                                                <option>I.T</option>
                                                <option>E.C.E</option>
                                                <option>E.E</option>
                                                <option>E.T.E</option>
                                                <option>A.E.I.E </option>
                                                <option>C.E </option>
                                                <option>Chemical Engg. </option>
                                                <option>M.E </option>
                                                <option>Power Engg </option>
                                                <option>Minning Engg </option>


                                            </select> </div>
                                    </div>
                                </div>
                                <div  className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_email">E-mail *</label> <input id="form_email" type="email" name="email_id" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid Email is required." /> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_phno">Contact Number *</label> <input id="form_phno" type="tel" name="contact_no" className="form-control" placeholder="Please enter your contact number *" required="required" data-error="Valid Contact Number is required." /> </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group"> <label for="form_dip_marks">Marks/Grade obtained in diploma *</label> <textarea id="form_dip_marks" name="diploma" className="form-control" placeholder="Write your Diploma Grade here." rows="2" required="required" data-error="Please, enter your Diploma grades."></textarea> </div>
                                    </div>
                                    <div className="col-md-12"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " value="Send Message" /> </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group"> <label for="form_bach_marks">Marks/Grade obtained in bachelors degree *</label> <textarea id="form_bach_marks" name="bachelors" className="form-control" placeholder="Write your Bachelors degree grade here." rows="2" required="required" data-error="Please, leave us a message."></textarea> </div>
                                    </div>
                                    <div className="col-md-12"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " value="Send Message" /> </div>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div> 