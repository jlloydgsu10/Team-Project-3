# Oil Price – A Comprehensive Outlook

## Project Summary: 

### In the aftermath of the global covid pandemic, the hike in oil & gas prices motivated us to assess not only the effects of rising oil price to our economy but to search for some of the key drivers that address oil price fluctuations. Given the fact that some of the major world events revolve around "OIL" the data digs deeper into only the factuals, like supply/demand rather than the geo-political problems surrounding this topic which drive the oil price. 

![](https://github.com/jlloydgsu10/Team-Project-3/blob/main/code/images/global_events.png)
![](https://github.com/jlloydgsu10/Team-Project-3/blob/main/code/images/Global_oil_supdem.png)
![](https://github.com/jlloydgsu10/Team-Project-3/blob/main/code/images/US_oil_Sipdem.png)

### Some of the major effects to the US society viz: Inflation, unemployment, gas prices and presidential approval rating, are addressed herein. 

![](https://github.com/jlloydgsu10/Team-Project-3/blob/main/code/images/gas_prices.png)
![](https://github.com/jlloydgsu10/Team-Project-3/blob/main/code/images/Pres_approval.png)
![](https://github.com/jlloydgsu10/Team-Project-3/blob/main/code/images/inflation.png)
![](https://github.com/jlloydgsu10/Team-Project-3/blob/main/code/images/unemployment_rate.png)

### One of the findings was that US being the biggest consumer of oil, it is one of the largest producers of oil even though it ranks 11 in reserves estimation. To understand US oil and gas product, the data further delves into comparing the US unconventional basins, their production and rig count for the last decade. 

![](https://github.com/jlloydgsu10/Team-Project-3/blob/main/code/images/leaflet_oil_basins_us.png)
![](https://github.com/jlloydgsu10/Team-Project-3/blob/main/code/images/rig_count_us_basins.png)
![](https://github.com/jlloydgsu10/Team-Project-3/blob/main/code/images/oil_prod_us_basins.png)

## Instructions:
- Download the repo to local machine
- Scripts included in the repo: python, SQL, python-flask, sqlalchemy, jupyter notebook, leaflet.js, d3.js, plotly.js
- Signup for an API key with EIA.gov and save it in config.py to use for running the notebooks: Production_Data-forjs.ipynb & US_BasinProd_Data-sql.ipynb
    <https://www.eia.gov>
- Run all jupyter notebook files in the "code" folder and "Jupyter_notebook_flask" folder to update sql database and make necessary csv's for plotly.js
- Run app2.py for generating the graphs for comparison. 
- Run basin.html separately for US shale oil basin visualization on separate webpage. 

## Future work: 
- To populate all the graphs using the flask-powered api
- Add a choropleth to US basin map for rigcount and oil production separately.

## Credits: 

1. Presidential Approval Ratings: <https://www.rasmussenreports.com>
2. Total US and Global oil consumption and production data: <https://www.eia.gov>
3. Rig count data: <https://rigcount.bakerhughes.com/>
4. Inflation / Unemployment data: <https://www.usinflationcalculator.com/inflation/historical-inflation-rates/>, <https://fred.stlouisfed.org/series/UNRATE>

## License
MIT License

Copyright (c) 2022 jlloydgsu10

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




