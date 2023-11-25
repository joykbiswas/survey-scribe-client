
const CreateSurvey = () => {
    return (
        <div>
            <div className="bg-[#fbf3de] max-w-full mx-auto  p-24">
        <h2 className="text-3xl font-bold">Create Survey</h2>
        <form >
          {/* form row 1*/}
          <div className="md:flex ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">title</span>
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
                <option>Health</option>
                <option>Food</option>
                <option>graphics design</option>
                required
              </select>
            </div>
          </div>
          
          {/* form row 3*/}
          <div className="md:flex ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">like</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="like"
                  placeholder="..."
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Option</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="option"
                  placeholder="option"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* form row 4*/}
          <div className="mb-4 ">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>

              <label className="input-group">
                <input
                  type=""
                  name="description"
                  placeholder="Enter job description"
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
          </div>
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