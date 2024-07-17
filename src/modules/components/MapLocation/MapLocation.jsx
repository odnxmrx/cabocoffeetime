
function MapLocation() {
  
  return (
    <>
          <div style={{ width: '100%', height: '400px' }} id="mapa">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2453.197853474634!2d-109.9371359543453!3d22.889618452821022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUzJzIyLjkiTiAxMDnCsDU2JzA5LjYiVw!5e0!3m2!1sen!2smx!4v1721237428105!5m2!1sen!2smx"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
    </>
  )
}

export default MapLocation;