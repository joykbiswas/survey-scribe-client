const Qna = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row  my-16 gap-4">

        <div className="flex-1 space-y-5">
            <h4 className="text-6xl font-bold">Frequently Asked Question</h4>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
            What is an survey?
            </div>
            <div className="collapse-content">
              <p>
                 Put simply, an Internet survey is a questionnaire hosted on a website. These surveys are designed to elicit responses on nearly any research topic and may be completed by anyone with Internet access. Internet surveys are easy to complete, allowing respondents to quickly provide information crucial to your research needs
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
            How long does the process take?
            </div>
            <div className="collapse-content">
              <p>
                 As long or as short as you require. Internet surveys can be designed, programmed and launched in a matter of days. Responses are available immediately and can be harvested on a regular basis. There is no need to wait for data to be entered. The survey can remain on-line for days, weeks, months or indefinitely. Results can be tabulated on any schedule, according to your needs.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
            Do you offer plans for corporate needs?
            </div>
            <div className="collapse-content">
              <p>
              Our Enterprise plans offer HIPAA compliance, advanced security, and admin features for increased governance and control
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
            Do you offer discounts for teams?
            </div>
            <div className="collapse-content">
              <p>
              We offer discounts when you sign up for business plans that include 3 or more people. With Team Advantage and Team Premier plans, you will save 20% or more over personal plans and get access to additional collaboration features
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
            <img src="https://i.ibb.co/3cD1W9H/qna.png" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Qna;
