import React from 'react';
import Nav from './nav';
import "@fontsource/source-serif-pro";

function Layout(props) {
  let inProgress = true;
  const styles = {
    siteContainer: {
      display: 'none',
    },
    inProgressBanner: {
      height: "200px",
      width: '40%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      margin: '200px auto',
      color: "white",
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      fontFamily: 'Quicksand',
    }
  } 

  const inProgressStyle = inProgress ? styles.siteContainer : {};
  const inProgressBannerStyle = inProgress ? styles.inProgressBanner : {display: 'none'};
  
  return (
    <div>
      <div style={inProgressBannerStyle}>
        <div>
          <h1 style={{textAlign: 'center'}}>Hiscox Ventures Ltd</h1>
          <h2>This site is currently under construction</h2>
        </div>
      </div>
      <div style={inProgressStyle}> 
        <Nav dark={props.dark}/>
        {props.children}
        <Footer dark={props.dark}/>
      </div>
    </div>
  )
}

function Container(props) {
  return (
    <div className={props.classes} style={{
      width: props.margin,
      margin: '0 auto',
      padding: props.padding,
    }}>
      { props.children }
    </div>
  );
}

function Footer(props) {
  const footerStyles = props.dark ? {backgroundColor: '#202021', color: 'white'} : {backgroundColor: 'white', color: "black"}
  return (
    <div className="footer" style={footerStyles}>
      <h4> Footer </h4>
    </div>
  );
}

export { Container, Layout };