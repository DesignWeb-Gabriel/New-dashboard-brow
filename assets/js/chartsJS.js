const ctx1 = document.getElementById("chart-1").getContext("2d");
const myChart = new Chart(ctx1, {
  type: "polarArea",
  data: {
    labels: ["Via pix", "Cartão de Credito", "Boleto"],
    datasets: [
      {
        label: "# of Votes",
        data: [600, 800, 1000],
        backgroundColor: [
          "rgba(12, 50, 222, 1)",
          "rgba(94, 123, 254, 1)",
          "rgba(4, 30, 145, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const ctx2 = document.getElementById("chart-2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["Mensal - Intensivo", "A vista - Intensivo", "Outros"],
    datasets: [
      {
        label: "Earning",
        data: [600, 1200, 400],
        backgroundColor: [
          "rgba(12, 50, 222, 1)",
          "rgba(94, 123, 254, 1)",
          "rgba(4, 30, 145, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
