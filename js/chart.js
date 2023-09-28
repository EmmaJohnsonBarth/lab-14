'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

let newState = new AppState();

newState.loadItems();
// console.log('newState: ', newState);
// console.log('newState.allProducts:', newState.allProducts)

//from newState.allProducts, pull information into one data object
//for loop
//productName: numberOfVotes

//Product
//name: 'bag'
//timesClicked: 0;


function renderChart() {
    let dataObj = {}
    for (let i = 0; i < newState.allProducts.length; i++) {
        dataObj[newState.allProducts[i].name] = newState.allProducts[i].timesClicked;
    }
    console.log(dataObj);

    let objectKeys = Object.keys(dataObj);
    console.log(objectKeys);
    let objectValues = Object.values(dataObj);
    console.log(objectValues)

    // const ctx = document.getElementById('chart-section');

    new Chart(canvasElem, {
        type: 'bar',
        data: {
            labels: objectKeys,
            datasets: [{
                label: '# of Votes',
                data: objectValues,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

renderChart();
