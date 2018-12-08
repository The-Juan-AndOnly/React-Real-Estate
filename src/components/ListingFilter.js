import React, { Component } from 'react';

class ListingFilter extends Component {
  render() {
    return (
      <section id="filter">
        <div className="insideFilter">
          <h4> Filter</h4>

          <select name="bedrooms" className="bedrooms filters">
            <option value="defaultBR">Bedrooms</option>
            <option value="1BR">1 Bedroom</option>
            <option value="2BR">2 Bedrooms</option>
            <option value="3BR">3 Bedrooms</option>
            <option value="4BR">4 Bedrooms</option>
            <option value="5plus">5+ Bedrooms</option>
          </select>

          <select name="bathroom" className="bathroom filters">
            <option value="defaultBathroom">Bathrooms</option>
            <option value="1bathroom">1 Bathroom</option>
            <option value="1.5bathroom">1.5 Bathrooms</option>
            <option value="2bathroom">2 Bathrooms</option>
            <option value="3bathroom">3 Bathrooms</option>
            <option value="4bathroom">4 Bathrooms</option>
          </select>

          <div className="price filters">
            <span className="title">Price</span>
            <input
              type="text"
              name="min-price"
              className="min-price"
              placeholder="Minimum Price"
            />
            <input
              type="text"
              name="max-price"
              className="max-price"
              placeholder="Maximum Price"
            />
          </div>
          <div className="square-feet filters">
            <span className="title">Square Feet</span>
            <input
              type="text"
              name="min-square-feet"
              className="min-square-feet"
              placeholder="Min"
            />
            <input
              type="text"
              name="max-square-feet"
              className="max-square-feet"
              placeholder="Max"
            />
          </div>
        </div>
      </section>
    );
  }
}
export default ListingFilter;
