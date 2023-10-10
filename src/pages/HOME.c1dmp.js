import {fetch} from 'wix-fetch';


$w.onReady(function () {
const apiUrl = 'https://api.ambeedata.com/latest/by-lat-lng?lat=47.620422&lng=-122.349358';
const apiKey = '749cadccee798e3ca57bebea6cbe9f785bccca7391ac2f4ba29dc876b6102c75'; // Replace with your actual API key

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'x-api-key': apiKey,
    'Content-type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
      const aqi = data.stations[0].AQI;
      $w("#hiEl").text = aqi.toString();
          console.log(aqi);

  })

  .catch(error => {
    console.error('Error:', error);
  });

const apiKey2 = '1243d858c1874f688ced695e068afb8e';
const url = `https://newsapi.org/v2/sources?category=science&apiKey=${apiKey2}`;

fetch(url)
  .then(response => response.json())
  .then(data2 => {
    if (data2.sources && data2.sources.length > 0) {
      const climateSources = data2.sources.filter(source =>
        source.category === 'science' && source.name.toLowerCase().includes('climate')
      );

      console.log(climateSources);
      /*
        [
          {
            id: "sourceId1",
            name: "Climate News Source 1",
            description: "Description of Climate News Source 1",
            ...
          },
          {
            id: "sourceId2",
            name: "Climate News Source 2",
            description: "Description of Climate News Source 2",
            ...
          },
          ...
        ]
      */
    } else {
      console.error('No news sources found in the API response');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
});
