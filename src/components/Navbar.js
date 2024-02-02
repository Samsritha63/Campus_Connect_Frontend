function TopHeader() {
    const containerStyles = {
        position: 'relative',
        backgroundColor: 'beige', // Set background color to beige
        padding: '20px', // Add padding for spacing
        borderBottom: '2px solid #ccc',
      };
    const profileIconStyles = {
      position: 'absolute',
      top: '10px',
      left: '10px',
      width: '100px',
      height: 'auto',
      borderRadius: '50%',
    };
    const extraProfileIconStyles = {
      position: 'absolute',
      top: '10px',
      right: '20px', // Align to the top right corner
      fontSize: '40px',
      color: '#333', // Customize color as needed
    };
    const searchBarStyles = {
      position: 'absolute',
      top: '50px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '400px',
      height: '60px',
      border:'None',
    };
  
    const textStyle = {
      position: 'absolute',
      top: '120px',
      left: '50px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '18px',
      color: '#333',
    };
  
    return (
        <div>
      <div className="top-header">
        <div className="profile-icon" style={profileIconStyles}>
          <img src={ProfileIcon} alt="Profile" style={profileIconStyles} />
        </div>
        <div className="extra-profile-icon" style={extraProfileIconStyles}>
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className="search-bar" style={searchBarStyles}>
          <input type="text" placeholder="Search..." style={{ width: '100%', height: '100%' }} />
        </div>
        <div style={textStyle}>
          IITDh
        </div>
      </div>
      </div>
    );
    
  }