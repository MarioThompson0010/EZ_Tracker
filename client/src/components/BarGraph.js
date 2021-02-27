import React from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      subscriptions: [],
    };
  }

  componentDidMount() {
    axios.get("/api/auth/getAllSubs").then((res) => {
      this.setState({ subscriptions: res.data.subscriptions });
    });
  }

  groomGraphData() {
    const labels = this.state.subscriptions.map(
      (item) => item.SubscriptionName
    );
    const data = this.state.subscriptions.map((item) => item.rating);

    return {
      labels,
      datasets: [
        {
          label: "Enjoyment",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Bar
          data={this.groomGraphData()}
          height={300}
          width={350}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                  },
                },
              ],
            },
            title: {
              display: true,
              text: "Average Joy from Subscriptions",
              fontSize: 20,
            },
          }}
        />
      </div>
    );
  }
}
