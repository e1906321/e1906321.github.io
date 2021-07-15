// var labels = ["january","february","March","April","may","june"];

// var data = {
//     labels: labels,
//     datasets: [{
//         label:"初めてのグラフ",
//         data: [0,10,15,3,20,60,10],
//         borderColor: 'rgb(255,100,130)',
//         backgroundColor: 'rgb(0, 0, 200)',

//     }]
// };

// var config = {
//     type: 'line',
//     data,
//     options:{},
// }

// var linechart = new Chart(
//     document.getElementById("linechart"),
//     config,
// );


var data = {
    labels: [
      '得点力',
      '守備力',
      'ファンの熱狂さ',
      'タイトル数',
      'スタジアムの規模',
      '選手層',
      '勝負強さ'
    ],
    datasets: [{
      label: 'GAMBA OSAKA',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgb(0, 0, 0)',
      borderColor: "rgb(0,0,250)",
      pointBackgroundColor: 'rgb(0, 0, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(0, 0, 200)'
    }, {
      label: 'CEREZO OSAKA',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgb(255, 192, 203)',
      borderColor: 'rgb(255, 192, 203)',
      pointBackgroundColor: 'rgb(255, 192, 203)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 192, 203)'
    }]
  };

  var config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

  var linechart = new Chart(
    // document.getElementById("linechart"),
    $("#linechart"),
    config,
);

// constは後で変えれない
// varは変えられる