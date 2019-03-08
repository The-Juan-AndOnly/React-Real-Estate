import React, { Component } from 'react';

class Listings extends Component {
  clearText = e => {
    e.target.previousSibling.value = '';
  };

  render() {
    return (
      <main id="listing">
        {/* Search area Filter able results */}
        <section className="search-area">
          <input type="text" name="search" placeholder="Enter Search" />
          <i className="fa fa-times" onClick={this.clearText} />
        </section>
        <section className="search-results">
          <div className="results">0 results found</div>
          <div className="sortby-area">
            <select name="sortby" className="sortby">
              <option value="price-asc">Lowest to Highest</option>
              <option value="price-desc">Highest to Lowest</option>
              <option value="new-list">Newly Listed</option>
            </select>
            <div className="view">
              <i className="fas fa-list-ul" />
              <i className="fas fa-th" />
            </div>
          </div>
        </section>

        <section className="listing-results">
          <div className="listing">
            <div className="listing-img">
              <span className="address">Address</span>
              <div className="details">
                <div className="user-img" />
                <div className="user-details">
                  <span className="username">Juan Lopez</span>
                  <span className="post-date">01-01-1984</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="fa fa-square-o" aria-hidden="true" />
                    <span>1200 sq&sup2;</span>
                  </div>
                  <div className="bedroom-detail">
                    <i className="fa fa-bed" aria-hidden="true" />
                    <span>3 bedrooms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="rent">$1000/month</span>
              <span className="location">
                <i className="fa fa-map-marker-alt" aria-hidden="true" />
                Allentown,PA
              </span>
            </div>
          </div>
        </section>

        <section className="pagination">
          <ul className="pagination-nums">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </main>
    );
  }
}
export default Listings;
