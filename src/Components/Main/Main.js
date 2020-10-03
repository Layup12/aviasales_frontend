import React from "react";
import logo from "./../../logo.svg";
import "./Main.css";
import Tabs from "../Tabs/Tabs";
import Filters from "../Filters/Filters";
import TicketsList from "../Tickets/TicketsList";
import {
  sortTicketByCostF,
  sortTicketByRateF,
  createArray,
  caseAll,
  caseAnother,
} from "../../Helpers/forMain";
import { FILTER_FIELDS } from "./../../Constants/Constants";

class Main extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    sortTicketByCost: [],
    sortTicketByRate: [],
    filter: {
      ...Object.values(FILTER_FIELDS).reduce((acc, item) => {
        acc[item] = true;

        return acc;
      }, {}),
    },
    sort: {
      costSort: true,
      rateSort: false,
    },
  };

  componentDidMount() {
    fetch("https://front-test.beta.aviasales.ru/search")
      .then((res) => res.json())
      .then(
        (result) => {
          fetch(
            "https://front-test.beta.aviasales.ru/tickets?searchId=" +
              result.searchId
          )
            .then((res) => res.json())
            .then(
              (result) => {
                const sortTicketByRateV = {
                  ...result,
                  tickets: [...result.tickets],
                };
                console.log(sortTicketByRateV);
                this.setState({
                  isLoaded: true,
                  sortTicketByCost: sortTicketByCostF(result.tickets),
                  sortTicketByRate: sortTicketByRateF(
                    sortTicketByRateV.tickets
                  ),
                });
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error,
                });
              }
            );
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  changeFilter = (event) => {
    const { name } = event.target;
    const { filter } = this.state;

    if (name === FILTER_FIELDS.ALL) {
      this.setState({ filter: caseAll(name, filter) });
    } else {
      let array = createArray(name, filter);
      this.setState({ filter: caseAnother(name, filter, array) });
    }
  };

  changeSortTest = (event) => {
    const { name } = event.target;
    const { sort } = this.state;

    if (!sort[name]) {
      this.setState({
        sort: {
          costSort: !sort.costSort,
          rateSort: !sort.rateSort,
        },
      });
    }
  };

  render() {
    const {
      error,
      isLoaded,
      filter,
      sort,
      sortTicketByCost,
      sortTicketByRate,
    } = this.state;

    // Отрисовка страницы
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Загрузка...</div>;
    }

    return (
      <div className="main">
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
        <div className="content">
          <Filters filter={filter} changeFilter={this.changeFilter} />
          <div className="rightBoard">
            <Tabs sort={sort} changeSortTest={this.changeSortTest} />
            <TicketsList
              filter={filter}
              sort={sort}
              sortTicketByCost={sortTicketByCost}
              sortTicketByRate={sortTicketByRate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
