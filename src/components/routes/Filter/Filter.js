import React, { Component } from "react";

import Pagination from "react-js-pagination";

import numberWithCommas from "../../../utilities/Utilities";

import BackButton from "../../elements/BackButton/BackButton";
import FilterKeyword from "../../elements/FilterKeyword/FilterKeyword";
import RecordsTable from "../../elements/RecordsTable/RecordsTable";
import Totals from "../../elements/Totals/Totals";

import SearchBar from "../../blocks/SearchBar/SearchBar"

import SampleData from "../../../data/BEIS-ODA-tracker";

import BaseLocale from "../../../locale/base";

class Search extends Component {
  state = {
    allData: [],
    filteredData: [],
    currentPageData: [],
    dataPerPage: 15,
    activePage: 1,
    totalPages: 0,
    offset: 0,
    loading: false,
    totalFigure: 0,
    countries: [],
    paymentQuarter: "",
    grantCall: "",
    status: ""
  };

  // Set the original allData state to the full JSON file
  componentDidMount() {
    this.setState({ 
      currentPageData: [],
      allData: SampleData,
      filteredData: SampleData,
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
      filteredData: SampleData,
      activePage: 1
    })
    setTimeout(() => {
      this.handleCurrentPageData(this.state.activePage);
    }, 300)
  }

  // Handle current page data after pagination and filtering
  handleCurrentPageData = (pageNumber) => {
    const { filteredData, dataPerPage } = this.state;
    const offset = (pageNumber - 1) * dataPerPage;
    const currentPageData = filteredData.slice(offset, offset + dataPerPage);  
    
    let totalFigure = 0;
    filteredData.forEach(function(item) {
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

  // Handle country selection
  handleLocation = (countryName) => {
    // Make array copy and handle addition or removal
    let countryArray = this.state.countries;
    countryArray.includes(countryName) ? 
      countryArray.splice(countryArray.indexOf(countryName), 1) : 
      countryArray.push(countryName);

    this.setState({   countries: countryArray });
  }

  // Handle single layered selection
  handleSingleSelector = (selector, dataKey) => {
    this.setState({
      [dataKey]: selector
    })
  }
  
  // Filter handler
  handleFilterTerms = (selector, dataKey) => {
    this.setState({ loading: true });
    if(dataKey === "country") {
      this.handleLocation(selector)
    } else {
      this.handleSingleSelector(selector, dataKey)
    }
    setTimeout(() => {
      this.doFilter();
    }, 500)
  }

  doFilter = () => {
    // Filter to see if country included in country array
    let resultsData = [];
    if(this.state.countries.length) {
      resultsData = this.state.allData.filter(item => this.state.countries.includes(item.country));
    }
    
    this.updateAllData(resultsData);
  }

  // Update state with new data and remove loading spinner
  updateAllData = (newData) => {
    setTimeout(() => {
      this.setState({ 
        filteredData: newData,
        loading: false
      });
      this.resetPage();
    }, 500)
  }

  // Sorting data by clicking on table headers
  onSortFilter = (key) => {
    let dataCopy = [...this.state.filteredData];
    dataCopy.sort(this.keywordCompare(key));
    this.updateAllData(dataCopy);
  }

  // Filter items by key and value
  keywordCompare = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  // Filter by keyword search box
  filterByKeyword = (keyword, category) => {
    let resultsData = this.state.filteredData;
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
      filteredData,
      activePage,
      currentPageData,
      dataPerPage,
      totalFigure
    } = this.state;
    const totalData = filteredData.length;

    return (
      <div className="govuk-width-container govuk-wider-container">
        <main className="govuk-main-wrapper " id="main-content" role="main">
          <div className="govuk-grid-row">

            <div className="govuk-grid-column-full">
              <BackButton />
              <h1 className="govuk-heading-xl">{BaseLocale.filterTitle}</h1>
            </div>

            <div className="govuk-grid-column-full">
              <SearchBar 
                callback={this.handleSingleSelector} 
                filterCallback={this.handleFilterTerms}
                reset={this.resetAll}
              />
            </div>


            <div className="govuk-grid-column-full">
              <div className="govuk-caption-m">{BaseLocale.recordTitle}</div>
              <div className="govuk-heading-m">{totalData}</div>
            </div>

            {activePage && (
            <div className="govuk-grid-column-one-third">
              <div className="panel-blue">
                <div className="govuk-caption-m">{BaseLocale.pageTitle}</div>
                <div className="govuk-heading-l">
                  <span>{this.state.activePage}</span> /
                  <span> {Math.ceil(filteredData.length / dataPerPage)}</span>
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
                totalItemsCount={filteredData.length}
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
