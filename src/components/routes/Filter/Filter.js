import React, { Component } from "react";

import Pagination from "react-js-pagination";

import numberWithCommas from "../../../utilities/Utilities";

import BackButton from "../../elements/BackButton/BackButton";
import FilterKeyword from "../../elements/FilterKeyword/FilterKeyword";
import RecordsTable from "../../elements/RecordsTable/RecordsTable";
import Totals from "../../elements/Totals/Totals";

import SearchBar from "../../blocks/SearchBar/SearchBar"

import SampleData from "../../../data/BEIS-ODA-tracker";

class Search extends Component {
  state = {
    allData: [],
    currentPageData: [],
    dataPerPage: 15,
    activePage: 1,
    offset: 0,
    totalPages: 0,
    loading: false,
    totalFigure: 0
  };

  // Set the original allData state to the full JSON file
  componentDidMount() {
    this.setState({ 
      currentPageData: [],
      allData: SampleData,
      dataPerPage: 15,
      activePage: 1,
    });
    setTimeout(() => {
      this.handleCurrentPageData(this.state.activePage);
    }, 300)
  }

  // Reset all data back to default
  resetAll = () => {
    this.setState({
      allData: SampleData,
      activePage: 1
    })
    setTimeout(() => {
      this.handleCurrentPageData(this.state.activePage);
    }, 300)
  }

  // Handle current page data after pagination and filtering
  handleCurrentPageData = (pageNumber) => {
    const { allData, dataPerPage } = this.state;
    const offset = (pageNumber - 1) * dataPerPage;
    const currentPageData = allData.slice(offset, offset + dataPerPage);  
    
    let totalFigure = 0;
    allData.forEach(function(item) {
      totalFigure += item.grossAmount;
    });

    totalFigure = numberWithCommas(totalFigure.toFixed(2));

    this.setState({ currentPageData, totalFigure });
  } 

  // Pagination - reset to 1
  resetPage = () => {
    this.setState({
      activePage: 1
    });

    this.handleCurrentPageData(this.state.activePage);
  };

  // Pagination - handle change of page
  handlePageChange = (pageNumber) => {
    this.setState({
      activePage: pageNumber
    });
    this.handleCurrentPageData(pageNumber);
  }

  // Handle multi layered selection
  handleLocation = (countryName) => {
    this.setState({ loading: true });
    // TODO: Add region select option
    let resultsData = this.state.allData.filter(item => item.country === countryName);
    this.updateAllData(resultsData);
  }

  // Handle single layered selection
  handleSelection = (selector, dataKey) => {
    this.setState({ loading: true });
    let resultsData = this.state.allData.filter(item => item[dataKey] === selector);
    this.updateAllData(resultsData);
  }
  
  // Update state with new data and remove loading spinner
  updateAllData = (newData) => {
    setTimeout(() => {
      this.setState({ 
        allData: newData,
        loading: false
      });
      this.resetPage();
    }, 500)
  }

  // Filter items by key and value
  compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  // Sorting by clicking on table headers
  onSortFilter = (key) => {
    let dataCopy = [...this.state.allData];
    dataCopy.sort(this.compareBy(key));
    this.setState({
      allData: dataCopy
    });
    this.updateAllData(dataCopy);
  }

  filterByKeyword = (keyword, category) => {
    let resultsData = this.state.allData;
    if(keyword !== "") {
      resultsData = resultsData.filter(function(item){
        return item[category].toLowerCase().search(
          keyword.toLowerCase()
        ) !== -1;
      });
      this.updateAllData(resultsData);
    }
    else {
      this.resetAll();
    }
  }

  render() {
    const {
      allData,
      activePage,
      currentPageData,
      dataPerPage,
      totalFigure
    } = this.state;
    const totalData = allData.length;

    return (
      <div className="govuk-width-container govuk-wider-container">
        <main className="govuk-main-wrapper " id="main-content" role="main">
          <div className="govuk-grid-row">
            
            <div className="govuk-grid-column-full">
              <BackButton />
            </div>

            <div className="govuk-grid-column-full">
              <SearchBar 
                callback={this.handleSelection} 
                locationCallback={this.handleLocation} 
                reset={this.resetAll}
              />
            </div>


            <div className="govuk-grid-column-full">
              <div className="govuk-caption-m">Records</div>
              <div className="govuk-heading-m">{totalData}</div>
            </div>

            {activePage && (
            <div className="govuk-grid-column-one-third">
              <div className="panel-blue">
                <div className="govuk-caption-m">Page</div>
                <div className="govuk-heading-l">
                  <span>{this.state.activePage}</span> of 
                  <span> {Math.ceil(allData.length / dataPerPage)}</span>
                </div>
              </div>
            </div>
            )}

          </div>
          
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-one-half">
              <FilterKeyword callback={this.filterByKeyword} />
            </div>

            <div className="govuk-grid-column-one-half">
              <Pagination 
                activePage={activePage}
                itemsCountPerPage={dataPerPage}
                totalItemsCount={allData.length}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
              />
            </div>

            <div className="govuk-grid-column-full">
              <RecordsTable loading={this.state.loading} sortCallback={this.onSortFilter} data={currentPageData} />
            </div>

            <div className="govuk-grid-column-full">
              <Totals totalFigure={totalFigure} />
            </div>

          </div>
        </main>
      </div>
    )
  }
}

export default Search;
