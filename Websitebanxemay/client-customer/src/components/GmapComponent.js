import React, { Component } from 'react';

class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">MY LOCATION</h2>
        <iframe
          title="gmap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.911446004571!2d106.65502676230467!3d10.85121260697438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529f7813ae625%3A0x2b97fe7a20cf3ad8!2sAn%20L%C3%AA%2052%20Team!5e0!3m2!1svi!2s!4v1721659401756!5m2!1svi!2s"
          width="800"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

export default Gmap;