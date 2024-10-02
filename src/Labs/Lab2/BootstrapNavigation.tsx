export default function BootstrapNavigation() {
  return (
    <div id='wd-css-navigating-with-tabs'>
      <h2>Tabs</h2>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <a className='nav-link active' href='#'>
            Active
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            Disabled
          </a>
        </li>
      </ul>
      {/* Navigating with cards */}
      <div id='wd-css-navigating-with-cards'>
        <h2>Cards</h2>
        <div className='card' style={{ width: "18rem" }}>
          <img
            src='images/Northeastern_Wordmark.webp'
            className='card-img-top'
            alt=''
          />
          <div className='card-body'>
            <h5 className='card-title'>Northeastern University</h5>
            <p className='card-text'>
              Northeastern University is a top-tier institue for Computer
              Science students!
            </p>
            <a href='https://www.northeastern.edu/' className='btn btn-primary'>
              Boldly Go
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
