var layout = {
  title: {
    text:'Reflectance Spectrum',
     font: {
      family: "Times New Roman",
      size: 24,
      color: 'forestgreen',
      style: 'bold',
    },
    xref: 'paper',
    x: 0.48,
  },
  xaxis: {
    title: {
      text: 'spectometer colors',
      font: {
        family: 'Times New Roman',
        size: 18,
        color: 'darkseagreen',
      },
      xref: 'paper',
      x: 0.3,
    },
  },
  yaxis: {
    title: {
      text: 'reflectance (%)',
      font: {
        family: 'Times New Roman',
        size: 18,
        color: 'darkseagreen',
      }
    }
  }
};

TESTER = document.getElementById('tester');
	Plotly.newPlot(TESTER, 
  [
    {
	    x: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red', 'deep red', 'IR1', 'IR2', 'IR3', 'IR4'],
	    y: [26.8, 14.1, 17, 17.7, 17.9, 36.3, 56.6, 65, 101, 111.7, 113.5],
     type: 'bar'
    }
  ],
 layout
  );

