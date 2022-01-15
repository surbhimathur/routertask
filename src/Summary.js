export function Summary() {
  return (
    <div className="summary_box">
      <div className="summary_box1">
        <div className="projects">
          <p className="project_heading">Projects</p>
          <div className="ptopics server">
            <div className="pheading ">
              <p>Server Migration</p>
              <p>20%</p>
            </div>
            <div className="redcolor">
              <p className="fill_color"></p>
              <p className="empty_color"></p>
            </div>
          </div>

          <div className="ptopics">
            <div className="pheading">
              <p>Sales Tracking</p>
              <p>40%</p>
            </div>
            <div className="redcolor">
              <p className="fill_color yellow"></p>
              <p className="empty_color sales"></p>
            </div>
          </div>

          <div className="ptopics">
            <div className="pheading">
              <p>Customer Database</p>
              <p>60%</p>
            </div>
            <div className="redcolor">
              <p className="fill_color blue"></p>
              <p className="empty_color db"></p>
            </div>
          </div>

          <div className="ptopics">
            <div className="pheading">
              <p>Payout Details</p>
              <p>80%</p>
            </div>
            <div className="redcolor">
              <p className="fill_color aqua"></p>
              <p className="empty_color payout"></p>
            </div>
          </div>

          <div className="ptopics">
            <div className="pheading">
              <p>Account Setup</p>
              <p>Complete!</p>
            </div>
            <div className="redcolor">
              <p className="fill_color green"></p>
            </div>
          </div>
        </div>

        <div className="colors">
          <div className="first_color_row">
            <div className="primary">
              <p>Primary</p>
              <p id="color_code">#4e73df</p>
            </div>
            <div className="primary info">
              <p>Info</p>
              <p id="color_code">#36b9cc</p>
            </div>
            <div className="primary danger">
              <p>Danger</p>
              <p id="color_code">#e74a3b</p>
            </div>
            <div className="primary light">
              <p>Light</p>
              <p id="color_code">#f8f9fc</p>
            </div>
          </div>
          <div className="second_color_row">
            <div className="primary success">
              <p>Success</p>
              <p id="color_code">#1cc88a</p>
            </div>
            <div className="primary warning">
              <p>Warning</p>
              <p id="color_code">#f6c23e</p>
            </div>
            <div className="primary secondary">
              <p>Secondary</p>
              <p id="color_code">#858796</p>
            </div>
            <div className="primary dark">
              <p>Dark</p>
              <p id="color_code">#5a5c69</p>
            </div>
          </div>
        </div>
      </div>
      <div className="summary_box2">
        <div className="illustrate">
          <p className="project_heading">Illustrations</p>
          <div className="ill_body">
            <div className="ill_image">
              <img
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                alt="illustartion"
              ></img>
            </div>
            <div className="ill_text">
              <p>
                Add some quality, svg illustrations to your project courtesy of
                unDraw, a constantly updated collection of beautiful svg images
                that you can use completely free and without attribution!
              </p>
            </div>
            <div className="undraw_link">
              <p>Browse Illustrations on unDraw</p>
            </div>
          </div>
        </div>

        <div className="illustrate development">
          <p className="project_heading">Development Approach</p>
          <div className="ill_body">
            <div className="ill_text">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance. Custom CSS
                classes are used to create custom components and custom utility
                classes.
              </p>
              <p>
                Before working with this theme, you should become familiar with
                the Bootstrap framework, especially the utility classes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
