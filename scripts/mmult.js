void function multiply(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
  }
  
void function display(m) {
    for (var r = 0; r < m.length; ++r) {
      document.write('&nbsp;&nbsp;'+m[r].join(' ')+'<br />');
    }
  }
  
  var a = [[0.6, 0.2, 0.2], [0.3, 0.5, 0.2], [0.3, 0.3, 0.4]],
      b = [[0.6, 0.2, 0.2], [0.3, 0.5, 0.2], [0.3, 0.3, 0.4]];
  document.write('matrix a:<br />');
  display(a);
  document.write('matrix b:<br />');
  display(b);
  document.write('a * b =<br />');
  display(multiply(a, b));