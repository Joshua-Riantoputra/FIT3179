vegaEmbed('#choropleth_map', "js/choropleth_map.vg.json", {actions: false}).then(function(result) {}).catch(console.error);
vegaEmbed('#bubble_chart1', "js/bubble_chart.vg.json", {actions: false}).then(function(result) {    }).catch(console.error);
vegaEmbed('#bubble_chart2', "js/bubble_chart2.vg.json", {actions: false}).then(function(result) {    }).catch(console.error);
vegaEmbed('#bubble_chart3', "js/bubble_chart3.vg.json", {actions: false}).then(function(result) {    }).catch(console.error);
vegaEmbed('#heat', "js/table_heatmap.vg.json", {actions: false}).then(function(result) {}).catch(console.error);
vegaEmbed('#sankey', "js/sankey.vg.json", {renderer: 'svg', actions: false}).then(function(result) {}).catch(console.error);