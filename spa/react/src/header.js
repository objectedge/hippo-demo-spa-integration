import React from 'react';
import CmsMenu from './cms-components/core/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/header.css';
import logo from './images/toms_logo.svg';

export default class Header extends React.Component 
{
  state = {
    language: "English",
    langBtnArrow: "angle-down",
    promoText: "Free Shipping $59+ & Free Returns"
  }

  render() 
  {
    const pageModel = this.props.pageModel;
    const preview = this.props.preview;

    return (
      <div id="header">
        <div className="container">
          <div className="headerRow1">
            <div className="leftContent">
              <button className="btn btn-sm langSelect">
                <img src="./images/toms_logo.svg" alt=""/>
                <span>{this.state.language}</span>
                <FontAwesomeIcon className="arrowIcon" icon={this.state.langBtnArrow}/>
              </button>
              <span className="pipe">&nbsp;</span>
              <span className="promo">
                {this.state.promoText}
                <a href="">See Details</a></span>
            </div>

            <div className="rightContent">
              <button className="btn btn-sm loginBtn">Login</button>
              <span className="pipe">&nbsp;</span>
              <FontAwesomeIcon className="bagIcon" icon="shopping-bag"/>
            </div>
          </div>

          <div className="headerRow2">
            <nav className="navbar navbar-expand-md">
              <img src={logo} alt="Toms Logo" className="tomsLogo" />
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <CmsMenu path="menu" pageModel={pageModel} preview={preview} />
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}