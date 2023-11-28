import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateSurvey = () => {
  const navigate = useNavigate()
  const   handleAddSurvey = (event) =>{
   
    event.preventDefault();

    const form =event.target;
    const title = form.title.value;
    const category = form.category.value;
    const option = form.option.value;
    const description = form.description.value;

    // const timestamp = new Date().toISOString();

    const addSurvey = {title,category ,description, option }
    console.log(addSurvey);
    fetch('https://survey-scribe-server.vercel.app/survey',{
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify(addSurvey),
    })
    .then((res) =>res.json())
    .then((data) =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: "success!",
          text: "user added job successfully",
          icon: "success",
          confirmButtonText: "Add survey",
        });
      }
      navigate('/')
    })
  }
  return (
    <div>
      <div className="bg-[#fbf3de] max-w-full mx-auto  p-24">
        <h2 className="text-3xl font-bold">Create Survey</h2>
        <form onSubmit={handleAddSurvey}>
          {/* form row 1*/}
          <div className="md:flex ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder=" title here"
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>

              <select
                className="select select-bordered join-item"
                type="category"
                name="category"
              >
                <option disabled selected>
                  category
                </option>
                <option>Market Research</option>
                <option>Health and Wellness</option>
                <option>Food and Dining</option>
                <option>Research & Education</option>
                <option>Entertainment</option>
                <option>Work and Career</option>
                required
              </select>
            </div>
          </div>

          {/* form row 3*/}
          {/* <div className="md:flex ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">like</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="like"
                  placeholder=""
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Dislike</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="dislike"
                  placeholder=""
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div> */}
          {/* form row 4*/}
          <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Option</span>
              </label>

              <select
                className="select select-bordered join-item"
                type="category"
                name="option"
              >
                <option disabled selected>
                  Option
                </option>
                <option>Yes</option>
                <option>No</option>
                
                required
              </select>
            </div>

          <div className="mb-4 ">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>

              <label className="input-group">
                <input
                  type=""
                  name="description"
                  placeholder="Enter survey description"
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
          </div>
          {/* <input type="hidden" name="timestamp" value={new Date().toISOString()} /> */}
          <input
            type="submit"
            value="Add"
            className="btn w-full bg-[#f5d789]"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateSurvey;
