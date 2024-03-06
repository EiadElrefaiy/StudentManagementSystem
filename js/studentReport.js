window.onload = function () {
    if(jQuery('#home-perfomer-chart').length){
        var donut = new Morris.Donut({
          element: 'home-perfomer-chart',
          resize: true,
          colors: ["#1e3d73", "#fe517e", "#99f6ca"],
          data: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
          ],
          hideHover: 'auto'
        });
    }
}
