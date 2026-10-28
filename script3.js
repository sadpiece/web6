 const products = [
      { code: "001", name: "Ноутбук", price: 25000, quantity: 2 },
      { code: "002", name: "Мишка", price: 800, quantity: 5 },
      { code: "003", name: "Клавіатура", price: 1500, quantity: 3 },
      { code: "004", name: "Монітор", price: 8500, quantity: 2 },
      { code: "005", name: "Килимок", price: 300, quantity: 4 }
    ];

    let totalSum = 0;

    document.write('<table class="table">');
    document.write(`
      <tr>
        <th>Код товару</th>
        <th>Найменування</th>
        <th>Ціна за од. (грн)</th>
        <th>Кількість (шт)</th>
        <th>Сума (грн)</th>
      </tr>`);


    for (let i = 0; i < products.length; i++) {

      let rowSum = products[i].price * products[i].quantity;
      totalSum += rowSum;
      
      document.write(`
        <tr>
          <td>${products[i].code}</td>
          <td>${products[i].name}</td>
          <td>${products[i].price}</td>
          <td>${products[i].quantity}</td>
          <td>${rowSum}</td>
        </tr>`);
    }

    document.write(`
      <tr>
        <td colspan="4">Всього:</td>
        <td>${totalSum}</td>
      </tr>`);

    document.write('</table>');