import React, { Component } from "react";

import Pagination from "react-js-pagination";

import numberWithCommas from "../../../utilities/Utilities";

import BackButton from "../../elements/BackButton/BackButton";
import Chart from "../../elements/Chart/Chart";
import FilterKeyword from "../../elements/FilterKeyword/FilterKeyword";
import RecordsTable from "../../elements/RecordsTable/RecordsTable";
import Totals from "../../elements/Totals/Totals";

import SearchBar from "../../blocks/SearchBar/SearchBar"

import SampleData from "../../../data/BEIS-ODA-tracker";

class Search extends Component {
  state = {
    allData: [],
    currentData: [],
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
      currentData: [],
      allData: SampleData,
      dataPerPage: 15,
      activePage: 1,
    });
    setTimeout(() => {
      this.handleCurrentData(this.state.activePage);
    }, 300)
  }

  // Reset all data back to default
  resetAll = () => {
    this.setState({
      allData: SampleData,
      activePage: 1
    })
    setTimeout(() => {
      this.handleCurrentData(this.state.activePage);
    }, 300)
  }

  // Handle current data after pagination and filtering
  handleCurrentData = (pageNumber) => {
    const { allData, dataPerPage } = this.state;
    const offset = (pageNumber - 1) * dataPerPage;
    const currentData = allData.slice(offset, offset + dataPerPage);  
    
    let totalFigure = 0;
    allData.forEach(function(item) {
      totalFigure += item.grossAmount;
    });

    totalFigure = numberWithCommas(totalFigure.toFixed(2));

    this.setState({ currentData, totalFigure });
  } 

  // Pagination - reset to 1
  resetPage = () => {
    this.setState({
      activePage: 1
    });

    this.handleCurrentData(this.state.activePage);
  };

  // Pagination - handle change of page
  handlePageChange = (pageNumber) => {
    this.setState({
      activePage: pageNumber
    });
    this.handleCurrentData(pageNumber);
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

  // make copy of data to compare
  onSort = (key) => {
    let dataCopy = [...this.state.allData];
    dataCopy.sort(this.compareBy(key));
    this.setState({
      allData: dataCopy
    });
  }

  render() {
    const {
      allData,
      currentData,
      activePage,
      dataPerPage,
      totalFigure
    } = this.state;
    const totalData = allData.length;

    if (totalData === 0) return null;

    return (
      <div className="row">

        <BackButton />

        <SearchBar 
          callback={this.handleSelection} 
          locationCallback={this.handleLocation} 
          reset={this.resetAll}
        />

        <div className="col-12">
          <h2>
            <strong>{totalData}</strong>{" "}
            {totalData > 1 ? "Records" : "Record"}
          </h2>
          {activePage && (
            <span className="current-page">
              Page <span>{activePage}</span> /{" "}
              <span>{Math.ceil(allData.length / dataPerPage)}</span>
            </span>
          )}
        </div>
      
        <div className="col-12">
          <Pagination 
            activePage={activePage}
            itemsCountPerPage={dataPerPage}
            totalItemsCount={allData.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </div>

        <FilterKeyword />
        
        <RecordsTable loading={this.state.loading} sortCallback={this.onSort} data={currentData} />
        
        <Totals totalFigure={totalFigure} />
        <Chart data={allData} />

      </div>
    )
  }
}

export default Search;
