async function getCities() {
    let url = 'https://proverili.ru/api/areas';
    let response = await fetch(url, { method: 'POST' });
    let result = response.json()
    console.log(result)
}

getCities()


// let url = 'https://proverili.ru/api/areas';
// let res = $.ajax(url, { method: 'POST', dataType: 'json', })
// console.log(res)

let mas = []

// $.ajax({ 
//     type: 'POST', 
//     url: 'https://proverili.ru/api/areas', 
//     data: { get_param: 'value' }, 
//     dataType: 'json',
//     success: function (data) { 
//         $.each(data, function(index, element) {
//             mas.push(element)
//         });
//     }
// });

// console.log(mas)